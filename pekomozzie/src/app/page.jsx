import { login, signup } from './actions';
import LinkedIn from './components/LinkedIn';
import Modal from './components/Modal';
import Image from "next/image";

export default function LoginPage({ searchParams }) {
  const modal = searchParams?.modal;

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Image src="/PekoMozzieLogo.png" alt="PekoMozzie Logo" width="600" height="50" className="hover:"/>
      <h1 className = "text-xl italic font-bold text-green-500 pr-2">It cannot see</h1>
      <h1 className = "text-xl italic font-bold text-green-500 pr-2">It cannot think</h1>
      <h1 className = "text-xl italic font-bold text-green-500 pr-2">It cannot hear or feel</h1>
      <h1 className = "text-xl italic font-bold text-green-500 pr-2">It lives only</h1>
      <h1 className = "text-xl italic font-bold text-green-500 pr-2">To make your app into its meal</h1>
      <br></br>
      <br></br>
      <div className="flex flex-col items-center w-full max-w-sm p-6 space-y-4 -mt-3 bg-white border rounded-lg shadow-lg">
        {/* <form className="flex flex-col items-center w-full max-w-sm p-6 space-y-4 bg-white border rounded-lg shadow-lg">
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div className="flex w-full space-x-4">
            <button
              type="submit"
              formAction={login}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-lime-600 border border-transparent rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Log in
            </button>
            <button
              type="submit"
              formAction={signup}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-lime-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <br/>
        Or */}
        <LinkedIn />
      </div>
      {modal && <Modal modal={modal}/>}
    </div>
  );
}
