import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'
import Projects from './components/Projects.tsx'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/projects" element={<Projects />} />
  </>
)

export default routes
