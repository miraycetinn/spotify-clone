import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import Content from "./components/Content";
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

    return (
        <Router>
            <div className="wrapper overflow-scroll">
                <Sidebar/>
                <Content/>
            </div>
            <div className={"absolute bottom-0 left-0 w-full"}>
                <Bottombar/>
            </div>
        </Router>
    );
}

export default App;
