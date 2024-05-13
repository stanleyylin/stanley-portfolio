import {
    Footer,
    Home,
    Landing,
    NavBar,
    NotFound,
    ProjectPage,
} from "@/components";
import { ScrollToTop } from "@/hooks";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="projects/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
