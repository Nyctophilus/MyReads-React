import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Main from "./pages/Main";

const Search = lazy(() => import("./pages/Search"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/search" element={<Search />} />
      </Routes>
    </Suspense>
  );
};

export default App;
