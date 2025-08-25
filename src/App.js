import Home from "./pages/Home.js";
import CommandLine from "./pages/CommandLine.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/command-line" element={<CommandLine />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
