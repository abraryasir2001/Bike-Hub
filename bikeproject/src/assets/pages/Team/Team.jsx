import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import TeamCarousel from "./TeamCarousel";

function Team() {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto">
        <Navbar> </Navbar>
        <div className="text-center mt-10">
          <p className="text-blue-500 font-bold">Meet Our Teams</p>
          <h2 className="text-2xl font-bold">Read What Our Team Says</h2>
        </div>
        <TeamCarousel></TeamCarousel>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Team;
