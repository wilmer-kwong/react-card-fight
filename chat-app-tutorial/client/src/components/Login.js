import { useRef } from "react";
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    const newId = uuidV4()
    onIdSubmit(newId);
    console.log("creating random id" + newId);
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={submitHandler} className="bg-white shadow-md rounded p-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold">Username</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          ref={idRef}
          required
          placeholder="Username"
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            onClick={createNewId}
          >
            Create new ID
          </a>
        </div>
      </form>
    </div>
  );
}
