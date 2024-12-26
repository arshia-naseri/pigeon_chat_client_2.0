import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./Login View/index";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
