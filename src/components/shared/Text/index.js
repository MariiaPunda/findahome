import PropTypes from 'prop-types'
import { useFela } from 'react-fela'
import { TEXT_SIZES, TEXT_COLORS } from '../../../styles/variables'
import styles from './styles'

const Text = ({
  as: Component,
  size,
  isBold,
  color,
  isCentered,
  isUppercase,
  extend,
  ...props
}) => {
  const { css } = useFela({
    size,
    isBold,
    color,
    isCentered,
    isUppercase,
  })

  return <Component {...props} className={css([styles.text, extend])} />
}

Text.defaultProps = {
  as: 'p',
  size: 'm',
  color: 'main',
  isBold: false,
  isCentered: false,
  isUppercase: false,
}

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  size: PropTypes.oneOf(TEXT_SIZES),
  isBold: PropTypes.bool,
  color: PropTypes.oneOf(TEXT_COLORS),
  spacing: PropTypes.object,
  isCentered: PropTypes.bool,
  isUppercase: PropTypes.bool,
}

export default Text
