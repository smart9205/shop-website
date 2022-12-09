import type { NextPage } from "next";
// Layout Components
import Footer from "../components/footer";
import Header from "../components/header";

// Page Components
import Home from "./home";

const Main: NextPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <Home />
            </div>
            <Footer />
        </>
    );
};

export default Main;
