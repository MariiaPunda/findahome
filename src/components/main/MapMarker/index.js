import { Marker } from 'react-leaflet'
import L from 'leaflet'

const MarkerIcon = L.icon({
  iconUrl: require('./home-icon.png'),
  iconSize: [50, 50],
})

const MarkerActiveIcon = L.icon({
  iconUrl: require('./home-icon-active.png'),
  iconSize: [50, 50],
})

const MapMarker = ({ home, mapCenter, setMapCenter }) => {
  const isActiveHome =
    mapCenter[0] === home.position.lat && mapCenter[1] === home.position.lng

  return (
    <Marker
      position={[home.position.lat, home.position.lng]}
      icon={isActiveHome ? MarkerActiveIcon : MarkerIcon}
      eventHandlers={{
        click: () => {
          setMapCenter([home.position.lat, home.position.lng])
          if (home.ref?.current) {
            home.ref.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        },
      }}
    ></Marker>
  )
}

export default MapMarker
