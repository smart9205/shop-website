import type { NextPage } from "next";
// Layout Components
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";

// Page Components
import Home from "./home";

const Main: NextPage = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default Main;
