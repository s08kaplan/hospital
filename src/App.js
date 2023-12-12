import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <div className="title text-center m-3">
         <h1 className="text-danger">Poor People' Hospital</h1>
  <h2 className="mt-3">Our Heroes at Your Service</h2>
      </div>
 
      <Home />
    </div>
  );
}

export default App;
