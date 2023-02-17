import { useFela } from 'react-fela'
import Action from '../../shared/Action'
import Card from '../../shared/Card'
import Text from '../../shared/Text'
import homeImage from './home-image.png'
import styles from './styles'

const HomeCard = ({ home, distanceFromCenter, mapCenter, setMapCenter }) => {
  const { css } = useFela()
  const isActiveHome =
    mapCenter[0] === home.position.lat && mapCenter[1] === home.position.lng

  return (
    <Card
      extend={styles.card(isActiveHome)}
      ref={home.ref}
      onClick={() => {
        setMapCenter([home.position.lat, home.position.lng])
      }}
    >
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
            <Text size='xl' isBold isUppercase extend={styles.label}>
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
}

export default HomeCard
