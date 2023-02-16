import { useEffect, useState } from 'react'
import { useFela } from 'react-fela'
import { MapContainer, TileLayer } from 'react-leaflet'
import Action from '../../shared/Action'
import VisuallyHidden from '../../shared/VisuallyHidden'
import Card from '../../shared/Card'
import Text from '../../shared/Text'
import homeImage from './home-image.png'
import Logo from './Logo'
import styles from './styles'

const App = () => {
  const { css } = useFela()
  const [homes, setHomes] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    fetch('/hotels', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setHomes(data?.items ?? [])
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
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>
        </div>
        <div className={css(styles.homesSection)}>
          <div id='homes' className={css(styles.homes)}>
            {homes.length > 0 &&
              homes.map(home => {
                const distanceFromCenter = `${
                  home.distance / 100
                } km from the city center`

                return (
                  <Card key={home?.title} extend={styles.card}>
                    <div className={css(styles.contentWrapper)}>
                      <img
                        src={homeImage}
                        alt='Home interior'
                        className={css(styles.image)}
                      />
                      <div className={css(styles.textWrapper)}>
                        <div>
                          <Text as='h2' size='m' isBold extend={styles.label}>
                            {home?.address.city}
                          </Text>
                          <Text size='s' isBold extend={styles.label}>
                            {home?.address.street}
                          </Text>
                          <Text size='xs' color='secondary' isBold isUppercase>
                            {distanceFromCenter}
                          </Text>
                        </div>
                        <div>
                          <Text
                            size='xl'
                            isBold
                            isUppercase
                            extend={styles.label}
                          >
                            98$
                          </Text>
                          <Text as='span' color='secondary' size='s'>
                            Designs may vary
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Action theme='primary' extend={styles.button}>
                      Book
                    </Action>
                  </Card>
                )
              })}
            <Text
              as='p'
              aria-live='assertive'
              role='alert'
              className={css(styles.error)}
            >
              {error}
            </Text>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
