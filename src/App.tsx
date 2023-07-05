import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as C from "./components/index";
import { Record } from "./pages";

function App() {
  return (
    <>
      <C.Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"Fef"}></Route>
          <Route path="/record" element={<Record />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
