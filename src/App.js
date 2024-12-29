import { HashRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeView from "Views/Welcome View/index";
import ChatView from "Views/Chat View";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomeView />} />
          <Route path="/chat" element={<ChatView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
