
// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext"
import MainPage from './components/MainScreen';
import AboutPage from './components/aboutScreen';
import DemoPage from './components/demo';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/demo", element: <DemoPage /> },
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
