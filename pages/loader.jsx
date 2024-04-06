import React from 'react';
import 'react-toastify/dist/ReactToastify.css';


const Loader = () => (
  <div className="flex items-center justify-center">
    <div className="w-8 h-8 border-t-4 border-b-4 border-gray-200 rounded-full animate-spin"></div>
  </div>
);

export default Loader;
