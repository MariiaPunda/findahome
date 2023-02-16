import { useFela } from 'react-fela'
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './styles'
import Logo from './Logo'
import Action from '../../shared/Action'
import VisuallyHidden from '../../shared/VisuallyHidden'

const App = () => {
  const { css } = useFela()

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
      </main>
    </>
  )
}

export default App
