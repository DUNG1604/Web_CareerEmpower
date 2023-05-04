import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      {/* <Header></Header> */}
      <Home></Home>
    </>
  );
}

export default App;
