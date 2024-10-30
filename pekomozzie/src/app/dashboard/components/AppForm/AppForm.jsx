import { feed } from './actions'; 
import Modal from '@/app/components/Modal'


const AppForm = ({ searchParams }) => {
  const modal = searchParams?.modal;

  return (


      <div>
      <form className="flex flex-col items-center w-72 max-w-sm p-6 space-y-4">
        <div className="w-full">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company:</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            placeholder="Company"
          />
        </div>

        <div className="w-full">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role:</label>
          <input
            id="role"
            name="role"
            type="text"
            className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            placeholder="Role"
          />
        </div>

        <div className="w-full">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes:</label>
          <input
            id="notes"
            name="notes"
            type="text"
            className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            placeholder="Notes"
          />
        </div>

        <div className="flex w-full space-x-4">
          <button
            type="submit"
            formAction={feed}
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-lime-600 border border-transparent rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
          >
            FEED THE MONSTER
          </button>
        </div>
      </form>
      {modal && <Modal modal={modal}/>}
    </ div>
  );

}

export default AppForm;