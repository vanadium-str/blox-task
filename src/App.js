import './App.css';
import Router from './views/Router';

function App() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
  }

  return <Router />;
}

export default App;
