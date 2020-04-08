import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const data = [
  { latitude: 27.9676, longitude: -82.3403, text: 'A' },
  { latitude: 27.4676, longitude: -82.8403, text: 'B' },
  { latitude: 26.7676, longitude: -83.6403, text: 'C' },
]

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
              <div className="popup-window"> 💜 {selectedPlace.text}</div>
            </Popup>
          )}
          <Marker
            latitude={27.7676}
            longitude={-82.6403}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>📍</div>
          </Marker>
          {data.map(place => {
            return (
              <Marker
                latitude={place.latitude}
                longitude={place.longitude}
                key={place.text}
              >
                <div onClick={() => markerClicked(place)}>{place.text}</div>
              </Marker>
            )
          })}
        </ReactMapGL>
      </section>
    </div>
  )
}
