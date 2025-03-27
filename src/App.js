import Home from "./pages/Home.js";
import Documentation from "./pages/Documentation.js";

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
