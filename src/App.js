import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const Search = lazy(() => import("./pages/Search"));

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />

      <Route path="search" element={<Search />} />
    </Routes>
  );
};

export default App;
