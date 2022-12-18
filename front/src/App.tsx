import React from 'react';
import { ToastContainer } from 'react-toastify';
import RoutersContainer from './routers/RoutersContainer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RoutersContainer />
      <ToastContainer />
    </>
    );
}

export default App;
