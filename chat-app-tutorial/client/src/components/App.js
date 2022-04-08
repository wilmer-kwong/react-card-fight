import useLocalStorage from '../hooks/useLocalStorage';

import Login from "./Login";
import Dashboard from './Dashboard';

export default function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    <div className="flex flex-col items-center w-full">
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}
