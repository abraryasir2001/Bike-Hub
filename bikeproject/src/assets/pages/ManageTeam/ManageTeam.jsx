import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import ManageTeamTable from "./ManageTeamTable";


function ManageTeam() {
    
  return (
    <div>
      <div className="max-w-6xl mx-auto">
       <Navbar></Navbar>
        {/* Manage vehicle heading */}
        <div className="text-center my-10">
          <p className="text-blue-500 font-bold">Manage Team</p>
          <h2 className="text-2xl font-bold">
            You can update or delete any member here 
          </h2>
        </div>

        <ManageTeamTable></ManageTeamTable>

      </div>
     <Footer></Footer>
    </div>
  );
}

export default ManageTeam;
