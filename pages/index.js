import { login_user } from '@/services';
import Head from 'next/head'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Link from 'next/link';
import Loader from './loader';


export default function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const onShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const res = await login_user(formData, setIsLoading);
    if (res.success) {
      toast.success(res.message);
      Cookies.set("token", res.token);
      setTimeout(() => {
        Router.push("/home");
      }, 1000);
    } else {
      const errorMsg = res.message || (typeof res === 'string' ? res : 'Something Went Wrong')
      toast.error(errorMsg);
    }
    // setIsLoading(false)
  };

  return (
    <>
      <Head>
        <title>Login System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-50 text-center text-indigo-600">
        <div className="flex flex-col items-center justify-center px-6 py-8 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl dark:text-white">
                Login
              </h1>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl dark:text-white">
                Welcome back to ECOMMERCE
              </h2>
              <p className="leading-tight tracking-tight text-slate-600 dark:text-white pb-5 !mt-2">
                The next gen business marketplace
              </p>
              <form onSubmit={handleSubmit} className=" space-y-4 md:space-y-6" action="#">
                <div className='text-left'>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your email</label>
                  <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div className='text-left'>
                  <div className="relative">
                    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type={showPassword ? 'text' : "password"} name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <a href="#" className="absolute top-0 right-0 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white" onClick={onShowPassword}
                    >
                      Show
                    </a>
                  </div>
                </div>
                <button type="submit" disabled={isLoading} className="w-full text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  {isLoading ? <Loader /> : 'Sign in'}
                </button>
                <hr className="w-100 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="text-sm font-light text-gray-600 dark:text-black-400">
                  Don’t have an Account? <Link href="/register" className="font-medium text-slate-700 hover:underline dark:text-primary-500">SIGN UP</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
