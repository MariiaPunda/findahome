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
      lineHeight: 1.2,
      overflowX: 'hidden',
      fontFamily: 'Arial, sans-serif',
    },
    'body'
  )

  renderer.renderStatic(
    {
      '--background-main': '#FFFFFF',
      '--background-secondary': '#F5F5F5',
      '--background-action': '#f7892d',
      '--background-action-hover': '#f26f02', //#f26f02
      '--typography-main': '#000000',
      '--typography-secondary': '#737373',
      '--typography-action': '#FFFFFF',
      '--spacing-xs': '0.25rem',
      '--spacing-s': '0.5rem',
      '--spacing-m': '1rem',
      '--spacing-l': '1.25rem',
      '--spacing-xl': '1.5rem',
      '--font-size-xs': '0.75rem', // 12px
      '--font-size-s': '0.9rem', // 14px
      '--font-size-m': '1rem', // 16px
      '--font-size-l': '1.25rem', // 20px
      '--font-size-xl': '1.5rem', // 24px
    },
    ':root'
  )
}
