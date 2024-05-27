import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <div className="bg-slate-50 w-full h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorite" element={<FavoriteList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
