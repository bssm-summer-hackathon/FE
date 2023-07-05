import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as C from "./components/index";
import { Record } from "./pages";
import Write from "./pages/record/write";

function App() {
  return (
    <>
      <C.Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"Fef"}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/record/write" element={<Write />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
