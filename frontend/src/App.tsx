import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProjectList from './components/projects/ProjectList';
import ProjectCreate from './components/projects/ProjectCreate';
import Builder from './components/builder/Builder'; // Wrapper for builder components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/create" element={<ProjectCreate />} />
        <Route path="/builder/:projectId" element={<Builder />} />
      </Routes>
    </Router>
  );
}

export default App;