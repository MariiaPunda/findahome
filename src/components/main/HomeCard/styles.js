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
  height: '9rem',
}

const label = {
  margin: 0,
}

const button = {
  marginTop: 'var(--spacing-m)',
}

export default { card, contentWrapper, textWrapper, image, label, button }
