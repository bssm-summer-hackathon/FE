import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as C from "./components/index";

function App() {
  return (
    <>
      <C.Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"Fef"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
