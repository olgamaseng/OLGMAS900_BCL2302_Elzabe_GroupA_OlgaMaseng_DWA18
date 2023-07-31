import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h3>Mindful Moments</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/genre">Genre</Link>
        <Link to="/seasons">Seasons</Link>
      </nav>
      <Outlet />
    </div>
  )
};

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function GenrePage() {
  return (
    <main>
      <h2>Genre</h2>
    </main>
  );
}

function SeasonsPage() {
  return (
    <main>
      <h2>Seasons</h2>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="genre" element={<GenrePage />} />
          <Route path="seasons" element={<SeasonsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)