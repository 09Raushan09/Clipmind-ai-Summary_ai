import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;