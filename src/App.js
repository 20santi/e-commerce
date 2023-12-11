import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <div className="w-full h-full mx-auto">
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
