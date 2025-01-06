import MyHome from './MyHome.js'
import MyJokes from "./pages/MyJokes";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
              <Link to="/">Home</Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/jokes">Jokes</Link>
              <Routes>
                  <Route path="/" element={<MyHome></MyHome>}></Route>
                  <Route path="/jokes" element={<MyJokes />} />
              </Routes>   
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
