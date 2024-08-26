import {
    Footer,
    Home,
    Landing,
    NavBar,
    NotFound,
    ProjectPage,
    StarCursor,
} from "@/components";
import { CursorifyProvider } from "@cursorify/react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    return (
        <>
            <CursorifyProvider
                cursor={<StarCursor />}
                delay={1}
                defaultCursorVisible={false}
                breakpoint={997}
            >
                <AnimatePresence>
                    <NavBar />
                    <Routes location={location} key={location.key}>
                        <Route index element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="projects/:slug"
                            element={<ProjectPage />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </AnimatePresence>
            </CursorifyProvider>
        </>
    );
}

export default App;
