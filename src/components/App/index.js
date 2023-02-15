import { useFela } from 'react-fela'
import styles from './styles'
import Logo from './Logo'
import VisuallyHidden from '../VisuallyHidden'

const App = () => {
  const { css } = useFela()

  return (
    <>
      <header role='banner' className={css(styles.header)}>
        <a href='#main' className={css(styles.link)}>
          Skip to main content
        </a>
        <a href='/'>
          <Logo />
          <VisuallyHidden>Home</VisuallyHidden>
        </a>
      </header>
      <main role='main' id='main'></main>
    </>
  )
}

export default App
