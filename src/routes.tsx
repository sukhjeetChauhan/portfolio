import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'

import Contact from './components/Contact.tsx'
import Resume from './components/sub-component/Resume.tsx'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
  </>
)

export default routes
