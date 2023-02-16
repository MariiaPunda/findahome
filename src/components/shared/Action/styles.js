const button = {
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  border: 0,
  padding: 0,
}

const primary = {
  ...button,
  backgroundColor: 'var(--background-action)',
  color: 'var(--typography-action)',
  fontSize: 'var(--font-size-m)',
  fontWeight: 'bold',
  padding: 'var(--spacing-m)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':hover': {
    backgroundColor: 'var(--background-action-hover)',
  },
}

export default { button, primary }
