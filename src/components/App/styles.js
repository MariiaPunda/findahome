const header = {
  backgroundColor: '#F5F5F5',
  padding: '1em',
}

const link = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  backgroundColor: '#F5F5F5',
  padding: '0.25em',
  top: '1em',
  left: '1em',
  zIndex: 2,

  ':focus': {
    clip: 'auto',
    height: 'auto',
    overflow: 'visible',
    width: 'auto',
  },
}

export default {
  header,
  link,
}
