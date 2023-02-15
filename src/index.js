import React from 'react'
import ReactDOM from 'react-dom/client'
import { RendererProvider } from 'react-fela'
import App from './components/App'
import createRenderer from './styles/createRenderer'
import renderStatic from './styles/renderStatic'

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderer = createRenderer()
renderStatic(renderer)

root.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <App />
    </RendererProvider>
  </React.StrictMode>
)
