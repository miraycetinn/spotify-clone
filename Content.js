import { Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./src/views/Home";
import Search from "./src/views/Search";

function Content() {
    return (
        <main className="flex-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </main>

    )
}
export default Content