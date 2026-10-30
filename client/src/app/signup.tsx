import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Signup = () => {

    const handleFormSubmit = () =>{

    }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden font-sans">
     
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

     
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-200/50 p-8 transition-all duration-300">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Create an Account
          </h2>
          <p className="text-sm text-slate-500">
            Join Chatter and start connecting today
          </p>
        </div>

        <button
          type="button"
          onClick={() => console.log('Google signup clicked')}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-medium py-3 px-4 rounded-xl border border-slate-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"
            />
            <path
              fill="#4285F4"
              d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
            />
            <path
              fill="#FBBC05"
              d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 13s.6 4.6 1.6 6.6l3.7-2.9z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 15.9C3.5 19.7 7.4 23 12 23z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="px-3 text-xs uppercase tracking-wider text-slate-400 font-medium">
            Or with email
          </span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        
        <form onSubmit={e=>e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              required
              placeholder="Soumya Tiwari"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              required
              placeholder="name@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            onClick={handleFormSubmit}
            className="w-full mt-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-sky-600 hover:text-sky-500 font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;