import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner";

function Home()
{
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Home;