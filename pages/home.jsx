import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import 'react-toastify/dist/ReactToastify.css';

const interests = [
  {
    title: 'Shoes', isCheck: true
  },
  {
    title: 'Men T-shirts', isCheck: false
  },
  {
    title: 'Makeup', isCheck: true
  },
  {
    title: 'Jewellery', isCheck: true
  },
  {
    title: 'Women T-shirts', isCheck: false
  },
  {
    title: 'Furniture', isCheck: true
  },
]
export default function Home() {
  const token = Cookies.get('token')

  useEffect(() => {
    if (!token) {
      Router.push('/')
    }
  }, [])

  const logout = () => {
    Cookies.remove('token')
    Router.push('/')
  }

  return (
    <section className="bg-gray-50 text-center text-indigo-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl dark:text-white">
              Please mark your interests!
            </h1>
            <p className="text-xs leading-tight tracking-tight text-slate-600 dark:text-white pb-5 !mt-2">
              We will keep you notified.
            </p>
            <form className=" space-y-4 md:space-y-6" action="#">
              <div className='text-left'>
                <label htmlFor="interest" className="font-bold block mb-2 text-xl font-medium text-gray-600 dark:text-white">My saved interests</label>
              </div>
              {
                interests.map((d) => {
                  return <Checkbox title={d.title} isCheck={d.isCheck} />
                })
              }
               <p className=" text-center text-md font-light text-slate-700 dark:text-black-400">
               &lt;&lt;&nbsp;&nbsp;&lt; 1 2 3 <span className='font-bold'>4</span> 5 6 7...&nbsp;&nbsp;&gt;&nbsp;&nbsp;&gt;&gt;
              </p>


              {/* <div className='text-left'>
                <div className="relative">
                  <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type={showPassword ? 'text' : "password"} name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  <a href="#" className="absolute top-0 right-0 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white" onClick={onShowPassword}
                  >
                    Show
                  </a>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <hr className="w-100 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="text-sm font-light text-gray-600 dark:text-black-400">
                Don’t have an Account? <Link href="/register" className="font-medium text-slate-700 hover:underline dark:text-primary-500">SIGN UP</Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
    // <div className='w-full h-screen flex items-center justify-center text-white bg-indigo-700 flex-col tracking-widest uppercase'>
    //   <p className='text-4xl font-extrabold mb-4'>Welcome to home Page</p>
    //   <button onClick={logout} className='bg-white border-2 border-white hover:bg-transparent transition-all text-indigo-700 hover:text-white font-semibold text-lg  px-4 py-2 rounded duration-700 '>Logout</button>
    // </div>
  )
}


// import React from 'react';

const Checkbox = ({ title, isCheck }) => {
  return (
    <div className="flex items-center">
      <input
        id="white-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 border-gray-300 rounded-sm bg-black checked:bg-black checked:border-black checked:text-white checked:before:content-['\2713'] checked:before:ml-1 checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
        defaultChecked={isCheck}
      />
      <label
        htmlFor="checked-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>

  );
};