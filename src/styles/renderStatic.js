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
}
