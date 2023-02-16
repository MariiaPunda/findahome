import { useFela } from 'react-fela'
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
      </main>
    </>
  )
}

export default App
