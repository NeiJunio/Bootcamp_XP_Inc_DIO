import {
    BrowserRouter as Router,
    // Routes,
    // Route,
} from "react-router-dom";

// import { GlobalStyle } from './styles/global';
import Home from "./pages/home/page";
//   import { Feed } from "./pages/feed";

//   import { Home } from './pages/home'



function App() {
    return (
        <Router>
            {/* <GlobalStyle /> */}
            <Home />
        </Router>
    );
}

export default App;