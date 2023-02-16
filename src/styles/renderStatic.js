export default renderer => {
  renderer.renderStatic(
    {
      boxSizing: 'border-box',
    },
    '*, *::before, *::after'
  )

  renderer.renderStatic(
    {
      minHeight: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-text-size-adjust': '100%',
    },
    'html'
  )

  renderer.renderStatic(
    {
      margin: 0,
      lineHeight: 1.45,
      overflowX: 'hidden',
      fontFamily: 'Arial, sans-serif',
    },
    'body'
  )

  renderer.renderStatic(
    {
      '--background-main': '#FFFFFF',
      '--background-secondary': '#F5F5F5',
      '--background-action': '##E37C27',
      '--typography-main': '#000000',
      '--typography-secondary': '#D3D3D3',
      '--typography-action': '#FFFFFF',
      '--spacing-xs': '0.25rem',
      '--spacing-s': '0.5rem',
      '--spacing-m': '1rem',
      '--spacing-l': '1.25rem',
      '--spacing-xl': '1.5rem',
      '--font-size-xs': '0.8rem',
      '--font-size-s': '1rem',
      '--font-size-m': '1.25rem',
      '--font-size-l': '1.5rem',
      '--font-size-xl': '1.75rem',
    },
    ':root'
  )
}
