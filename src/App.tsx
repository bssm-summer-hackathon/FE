import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Recorded />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
