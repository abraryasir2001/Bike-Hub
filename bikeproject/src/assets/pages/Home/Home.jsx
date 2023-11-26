import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner";
import OurVehicles from "./OurVehicles";
import Teammates from "./Teammates";

function Home()
{
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <OurVehicles></OurVehicles>
            <AboutUs></AboutUs>
            <Teammates></Teammates>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Home;