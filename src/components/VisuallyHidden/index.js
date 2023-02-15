import { useFela } from 'react-fela'

export const visuallyHidden = {
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
}

const VisuallyHidden = props => {
  const { css } = useFela()

  return <span {...props} className={css(visuallyHidden)} />
}

export default VisuallyHidden
