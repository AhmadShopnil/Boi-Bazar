
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1600px] mx-auto min-h-screen'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
