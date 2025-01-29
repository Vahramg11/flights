import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import Flights from "./templates/Flights/Flights.jsx";
import HomePage from "./templates/Home/HomePage.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
