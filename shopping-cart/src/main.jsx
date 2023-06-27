import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FiltersProvider } from './contexts/filters'

ReactDOM.createRoot(document.getElementById('app')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
