import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import MSWIntercept from "./components/MSWIntercept/MSWIntercept";

function App() {
  const [count, setCount] = useState(0);

  // env variables
  // console.log(import.meta.env.MODE);
  // console.log(import.meta.env.BASE_URL);
  // console.log(import.meta.env.PROD);
  // console.log(import.meta.env.VITE_BANANA_MAN);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          {/* <img src={viteLogo} className='logo' alt='Vite logo' /> */}
        </a>
        <a href='https://react.dev' target='_blank'>
          {/* <img src={reactLogo} className='logo react' alt='React logo' /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <MSWIntercept url='http://joe-burton.com/api/source' />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
