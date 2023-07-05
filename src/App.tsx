import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Main />}></Route>
          <Route path="/record/step1" element={<P.RecordStep1 />}></Route>
          <Route path="/record/step2" element={<P.RecordStep2 />}></Route>
          <Route path="/record/step3" element={<P.RecordStep3 />}></Route>
          <Route path="/record/step4" element={<P.RecordStep4 />}></Route>
          <Route path="/chat" element={<P.Chat />}></Route>
          <Route path="/notloggedin" element={<P.NotLoggedIn />}></Route>
          <Route path="/calender" element={<P.CalenderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
