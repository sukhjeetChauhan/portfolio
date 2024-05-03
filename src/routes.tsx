import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
  </>
)

export default routes
