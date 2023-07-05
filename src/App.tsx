import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as C from "./components/index";
import * as P from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Register usage="signup" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
