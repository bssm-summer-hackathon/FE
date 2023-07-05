import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"Fef"}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/record/write" element={<Write />}></Route>
          <Route path="/" element={<P.Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
