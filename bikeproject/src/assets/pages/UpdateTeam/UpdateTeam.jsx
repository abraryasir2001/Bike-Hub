import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import UpdateTeamTable from "./UpdateTeamTable";

function UpdateTeam() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="text-center my-10">
          <p className="text-blue-500 font-bold">Update Teammate</p>
          <h2 className="text-2xl font-bold">
            You can update any information of the member here 
          </h2>
        </div>
        {/* a form goes here */}
        <UpdateTeamTable></UpdateTeamTable>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default UpdateTeam;
