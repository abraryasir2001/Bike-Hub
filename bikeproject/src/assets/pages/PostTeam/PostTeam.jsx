import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import PostTeamForm from "./postTeamForm";

function PostTeam(){
return (
    <div>
    <div className="md:max-w-6xl mx-auto">
        <Navbar></Navbar>
    <div className="text-center mt-10">
      <p className="text-blue-500 font-bold">Add Teammate</p>
      <h2 className="text-2xl font-bold">
        Add New Member
      </h2>
    </div>
    <PostTeamForm></PostTeamForm>
    </div>
    <Footer></Footer>
  </div>
)
}
export default PostTeam;