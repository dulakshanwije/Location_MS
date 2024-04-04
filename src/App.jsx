import "./App.css";
import Header from "./components/Header";
import Locations from "./components/Locations";
import NewDevice from "./components/NewDevice";
import NewLocation from "./components/NewLocation";
import SingleLocation from "./components/SingleLocation";

export default function App() {
  return (
    <>
      <Header />
      {/* <Locations /> */}
      {/* <SingleLocation /> */}
      {/* <NewLocation /> */}
      <NewDevice />
    </>
  );
}
