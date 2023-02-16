import PropTypes from 'prop-types'
import { useFela } from 'react-fela'
import styles from './styles'

const VisuallyHidden = ({ as: Component = 'span', ...props }) => {
  const { css } = useFela()

  return <Component {...props} className={css(styles.visuallyHidden)} />
}

VisuallyHidden.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
}

export default VisuallyHidden
