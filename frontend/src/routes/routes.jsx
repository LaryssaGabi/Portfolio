import { Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Resume from '../containers/Resume'
import Project from '../containers/Project'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    )
}

export default Router