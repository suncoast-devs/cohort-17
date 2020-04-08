import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import axios from 'axios'
import { usePosition } from 'use-position'

export function Home() {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    true,
    { enableHighAccuracy: true }
  )

  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: latitude,
    longitude: longitude,
    zoom: 8,
  })

  useEffect(() => {
    setViewport(prev => {
      return {
        ...prev,
        latitude: latitude,
        longitude: longitude,
      }
    })
  }, [latitude, longitude])

  const [showPopup, setShowPopup] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [markers, setMarkers] = useState([])
  const [locationAddress, setLocationAddress] = useState('')
  const loadAllLocations = async () => {
    const resp = await axios.get('/api/location')
    setMarkers(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  const markerClicked = place => {
    console.log('marker clcked', place)
    setSelectedPlace(place)
    setShowPopup(true)
  }

  const addNewLocation = async () => {
    // do the API
    const resp = await axios.post('/api/location', {
      description: 'from UI',
      fullAddress: locationAddress,
    })
    if (resp.status === 201) {
      // update the markers array
      setMarkers(prevMarkers => {
        return [resp.data, ...prevMarkers]
      })
    }
  }

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Full address..."
          value={locationAddress}
          onChange={e => setLocationAddress(e.target.value)}
        />
        <button onClick={addNewLocation}>Add New Locaton</button>
      </section>
      <section className="map-container">
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          {showPopup && (
            <Popup
              latitude={selectedPlace.latitude}
              longitude={selectedPlace.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
              offsetTop={-5}
            >
              <div className="popup-window">🌧 {selectedPlace.description}</div>
            </Popup>
          )}
          {markers.map(place => {
            return (
              <Marker
                latitude={place.latitude}
                longitude={place.longitude}
                key={place.id}
              >
                <div onClick={() => markerClicked(place)}>🌂</div>
              </Marker>
            )
          })}
        </ReactMapGL>
      </section>
    </div>
  )
}
