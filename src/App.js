import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="feedback_wrap">
                    <FeedbackForm />
                    <FeedbackStatus />
                    <FeedbackList />
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
