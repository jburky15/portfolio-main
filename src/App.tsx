import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
