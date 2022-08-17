import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />

      <Route path="search" element={<Search />} />
    </Routes>
  );
};

export default App;
