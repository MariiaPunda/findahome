import { useEffect, useState, createRef } from 'react'
import { useFela } from 'react-fela'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Action from '../../shared/Action'
import VisuallyHidden from '../../shared/VisuallyHidden'
import Text from '../../shared/Text'
import MapMarker from '../MapMarker'
import HomeCard from '../HomeCard'
import Logo from './Logo'
import styles from './styles'

const SetMapCenter = ({ position }) => {
  const map = useMap()

  map.setView(position, map.getZoom())
}

const App = () => {
  const { css } = useFela()
  const [homes, setHomes] = useState([])
  const [mapCenter, setMapCenter] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch('/hotels', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data?.items.length > 0) {
          const homesList = data.items
          homesList.forEach(home => (home.ref = createRef()))

          setMapCenter([homesList[0].position.lat, homesList[0].position.lng])
          setHomes(homesList)
        } else {
          setError('No homes found')
        }
      })
      .catch(error => setError(error?.message))
  }, [])

  return (
    <>
      <header role='banner' className={css(styles.header)}>
        <Action href='#main' extend={styles.link}>
          Skip to main content
        </Action>
        <Action href='/'>
          <Logo />
          <VisuallyHidden>Home</VisuallyHidden>
        </Action>
      </header>
      <main role='main' id='main'>
        <VisuallyHidden as='h1'>Find a home for rent</VisuallyHidden>
        <div id='map'>
          {Boolean(mapCenter) && (
            <MapContainer
              center={mapCenter}
              zoom={20}
              scrollWheelZoom={false}
              style={{ width: '100%', height: 'calc(100vh - 2.5rem)' }}
            >
              <SetMapCenter position={mapCenter} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              {homes.map(home => {
                return (
                  <MapMarker
                    key={`marker-${home.title}`}
                    home={home}
                    mapCenter={mapCenter}
                    setMapCenter={setMapCenter}
                  />
                )
              })}
            </MapContainer>
          )}
        </div>
        <div className={css(styles.homesSection(Boolean(error)))}>
          <div id='homes' className={css(styles.homes)}>
            {homes.length > 0 &&
              homes.map(home => {
                const distanceFromCenter = `${
                  home.distance / 100
                } km from the city center`

                return (
                  <HomeCard
                    key={`home-${home?.title}`}
                    home={home}
                    distanceFromCenter={distanceFromCenter}
                    mapCenter={mapCenter}
                    setMapCenter={setMapCenter}
                  />
                )
              })}
            <Text as='p' aria-live='assertive' role='alert' color='alert'>
              {'Hello'} {error}
            </Text>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
