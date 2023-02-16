const text = ({ isBold, size, color, isCentered, isUppercase }) => ({
  color: `var(--typography-${color})`,
  fontWeight: isBold ? 'bold' : 'normal',
  fontSize: `var(--font-size-${size})`,
  ...(isCentered && { textAlign: 'center' }),
  ...(isUppercase && { textTransform: 'uppercase' }),
})

export default { text }
