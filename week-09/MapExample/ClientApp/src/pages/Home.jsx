import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import axios from 'axios'

export function Home() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 27.7676,
    longitude: -82.6403,
    zoom: 8,
  })
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [markers, setMarkers] = useState([])

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

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>show popup</button>
      <section className="map-container">
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZGV3c2VwaCIsImEiOiJjanRrNzQwYTYwMHdjM3lwNnh2am05ejc0In0._LCOTuYCw-eRKDvUut2TxQ'
          }
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
