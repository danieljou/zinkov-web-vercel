import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import LoadingPage from './components/LoadingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense  fallback={<LoadingPage/>} >
      <Provider store={store} >
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
)
