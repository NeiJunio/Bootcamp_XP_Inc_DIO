import {
    BrowserRouter as Router,
    // Routes,
    // Route,
} from "react-router-dom";

// import { GlobalStyle } from './styles/global';
import Home from "./pages/home/page";
import Login from "./pages/login/page";
//   import { Feed } from "./pages/feed";

//   import { Home } from './pages/home'



function App() {
    return (
        <Router>
            {/* <GlobalStyle /> */}
            <Home />
            <Login />
        </Router>
    );
}

export default App;