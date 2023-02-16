const text = ({ isBold, size, color, isCentered }) => ({
  color: `var(--typography-${color})`,
  fontWeight: isBold ? 'bold' : 'normal',
  fontSize: `var(--font-size-${size})`,
  ...(isCentered && { textAlign: 'center' }),
})

export default { text }
