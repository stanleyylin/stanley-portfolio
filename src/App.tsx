import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, NavBar } from "@/components";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
