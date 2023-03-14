import { Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Manage from "./components/Manage";
import Preview from "./components/Preview";
import TopNav from "./components/TopNav";
import Upload from "./components/Upload";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="preview/:id" element={<Preview />} />
        <Route path="manage" element={<Manage />} />
        <Route path="manage/edit/:id" element={<Edit />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
