import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Locations from "./components/Locations";
import NewDevice from "./components/NewDevice";
import NewLocation from "./components/NewLocation";
import SingleLocation from "./components/SingleLocation";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Locations />} />
          <Route path="/newlocation" element={<NewLocation />} />
          <Route path="/newdevice/:id" element={<NewDevice />} />
          <Route path="/location/:id" element={<SingleLocation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
