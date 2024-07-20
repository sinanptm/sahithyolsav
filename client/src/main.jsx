import { Suspense, StrictMode, lazy } from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from "./App.jsx";
import LoadingFallback from "./components/LoadingFallback"; 

const TeamsList = lazy(() => import('./Screens/TeamsScreen.jsx'));
const ProgramsList = lazy(() => import('./Screens/ProgramScreen.jsx'));
const ParticipantsList = lazy(() => import('./Screens/ParticipantScreen.jsx'));
const Admin = lazy(() => import("./Screens/AdminScreen.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Navigate to="teams" />} />
            <Route path="teams" element={<Suspense fallback={<LoadingFallback />}><TeamsList /></Suspense>} />
            <Route path="programs" element={<Suspense fallback={<LoadingFallback />}><ProgramsList /></Suspense>} />
            <Route path="participants" element={<Suspense fallback={<LoadingFallback />}><ParticipantsList /></Suspense>} />
            <Route path="admin/*" element={<Suspense fallback={<LoadingFallback />}><Admin /></Suspense>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
