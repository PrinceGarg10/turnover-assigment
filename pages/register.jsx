import { register_user } from '@/services';
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyOtp from './verifyOtp';

export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [isOtp, setIsOtp] = useState(false)
    const [codeAndEmail, setCodeAndEmail] = useState({
        code: '',
        email: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await register_user(formData);
        if (res.success) {
            toast.success(res.message);
            setIsOtp(true)
            setCodeAndEmail({
                email: res.email,
                code: res.code
            })
        }
        else {
            toast.error(res.message);
        }
    };

    return (
        <>
            {
                isOtp ? <VerifyOtp codeAndEmail={codeAndEmail} /> :

                    <section className="bg-gray-50 text-center">
                        <div className="flex flex-col items-center justify-center px-6 py-8">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl dark:text-white">
                                        Create an Account
                                    </h1>
                                    <form onSubmit={handleSubmit} className=" space-y-4 md:space-y-6" action="#">
                                        <div className='text-left'>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your Name</label>
                                            <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" name="name" id="name" className="bg-indigo-50 border border-indigo-300 text-black-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                        </div>
                                        <div className='text-left'>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your email</label>
                                            <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-black-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div className='text-left'>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password</label>
                                            <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-black-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>

                                        <button type="submit" className="w-full text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">CREATE ACCOUNT</button>
                                        <p className="text-sm font-light text-gray-600 dark:text-black-400">
                                            Have an account?  <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">LOGIN</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            }
            <ToastContainer />
        </>
    )
}
