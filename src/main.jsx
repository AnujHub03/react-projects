import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './Components/Project 12/Context/Index.jsx'
import { Provider } from 'react-redux'
import { store } from './Components/Project 13/Storage/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <Provider store={store}>
      <App />
      </Provider>
    </GlobalState>
  </StrictMode>,
)
