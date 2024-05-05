import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'

import Contact from './components/Contact.tsx'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/contact" element={<Contact />} />
  </>
)

export default routes
