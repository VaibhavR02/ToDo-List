import Header from './components/Header';
import Home from './components/Home';
import './components/header.css';
import './components/home.css';
import './components/task.css';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Toaster />
    </div>
  );
}

export default App;
