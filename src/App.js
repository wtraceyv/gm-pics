import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Instructions from "./components/Instructions";
import Layout from "./components/Layout";
import NamingTool from "./components/NamingTool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* organize pages */}
        <Route element={<Layout />}>
          {/* effective home page, lists out instructions by step w/ pics */}
          <Route index path="/gm-pics" element={<Instructions />} />
          {/* do naming magic to make things easier */}
          <Route path="/naming-tool" element={<NamingTool />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
