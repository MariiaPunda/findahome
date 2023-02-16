const header = {
  backgroundColor: 'var(--background-secondary)',
  padding: '1em',
}

const link = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  backgroundColor: 'var(--background-secondary)',
  padding: 'var(--spacing-xs)',
  top: 'var(--spacing-m)',
  left: 'var(--spacing-m)',
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
