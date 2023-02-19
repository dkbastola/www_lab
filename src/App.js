import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/" element={<BookList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
