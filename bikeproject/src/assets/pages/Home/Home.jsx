import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner";
import OurVehicles from "./OurVehicles";

function Home()
{
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <OurVehicles></OurVehicles>
            <AboutUs></AboutUs>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Home;