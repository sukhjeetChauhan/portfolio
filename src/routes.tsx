import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'

import Contact from './components/Contact.tsx'
import Layout from './components/Layout.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
)

export default routes
