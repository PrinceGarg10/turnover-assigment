import { register_user } from '@/services';
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PinInput from './pinInput';
import Router from 'next/router'

export default function Verify({ codeAndEmail }) {
  const [value, setValue] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value && String(value) === String(codeAndEmail.code)) {
      toast.success("Verified Successfully. Please Login");
      Router.push('/')
    }
    else {
      toast.error("Invalid Code");
    }
  };

  return (
    <>
      <section className="bg-gray-50 text-center">
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl dark:text-white">
                Verify your email
              </h1>
              <p className="leading-tight tracking-tight text-slate-600 dark:text-white pb-5">
                Enter the 8 digit code you have received on
              </p>
              <p className="leading-tight tracking-tight text-slate-600 dark:text-white !-mt-2">
                {codeAndEmail.email}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div className='text-left mb-10'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Code</label>
                  <PinInput value={value} setValue={setValue} />
                </div>
                <button type='submit' className="w-full text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">VERIFY</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
