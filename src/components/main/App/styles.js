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

const homesSection = {
  backgroundColor: 'transparent',
  position: 'absolute',
  padding: 'var(--spacing-xs)',
  bottom: 0,
  width: '100%',
  zIndex: 999,
}

const homes = {
  display: 'flex',
  gap: 'var(--spacing-s)',
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  height: '100%',
  width: '100%',
}

const card = activeMarker => ({
  minWidth: '20rem',
  width: '15rem',
  border: '2px solid transparent',
  ...(activeMarker && {
    border: '2px solid var(--background-action)',
  }),
})

const contentWrapper = {
  display: 'flex',
}

const textWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingLeft: 'var(--spacing-m)',
}

const image = {
  height: '10rem',
}

const label = {
  margin: 0,
}

const button = {
  marginTop: 'var(--spacing-m)',
}

const error = {
  color: 'red',
}

export default {
  header,
  link,
  homesSection,
  homes,
  card,
  contentWrapper,
  textWrapper,
  image,
  label,
  button,
  error,
}
