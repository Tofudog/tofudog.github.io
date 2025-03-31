import Home from "./pages/Home.js";
import Documentation from "./pages/Documentation.js";

// import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
