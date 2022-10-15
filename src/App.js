import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main'
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider></RouterProvider>
    </div>
  );
}

export default App;
