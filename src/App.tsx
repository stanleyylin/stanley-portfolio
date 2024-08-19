import {
    Footer,
    Home,
    Landing,
    NavBar,
    NotFound,
    ProjectPage,
} from "@/components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <NavBar />
                <Routes location={location} key={location.key}>
                    <Route index element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="projects/:slug" element={<ProjectPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </AnimatePresence>
        </>
    );
}

export default App;
