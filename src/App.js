import './App.css';
import Project from './components/project';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className='projects-container'>
      <Sidebar />
      <Project />
    </div>
  );
}

export default App;
