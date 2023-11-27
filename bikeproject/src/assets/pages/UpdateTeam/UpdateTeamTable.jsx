import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateTeamTable() {
  const teammate = useLoaderData();
  const navigate = useNavigate();

  function handleUpdateTeam(event) {
    event.preventDefault();

    const updatedTeammate = {
      fullName: event.target.fullName.value,
      position: event.target.position.value,
      email: event.target.email.value,
      photo: event.target.photo.value,
      message: event.target.message.value,
    };

    fetch(`http://localhost:3000/teammates/${teammate?._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTeammate),
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if the response indicates a successful update
        if (data && data.message === "Teammate updated successfully") {
          navigate("/manage-teammate");
        } else {
          throw new Error("Update unsuccessful");
        }
      })
      .catch((error) => {
        console.error("Error updating teammate:", error);
        // Handle error scenarios here
      });
  }
  return (
    <form onSubmit={handleUpdateTeam} className="my-10 flex flex-col gap-y-5">
      <input
        type="text"
        placeholder="Teammate Name"
        defaultValue={teammate?.fullName}
        name="fullName"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate Position"
        defaultValue={teammate?.position}
        name="position"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate Email"
        defaultValue={teammate?.email}
        name="email"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate image url"
        defaultValue={teammate?.photo}
        name="photo"
        className="input input-bordered input-info w-full input-bordered"
      />

      <textarea
        className="textarea textarea-info"
        placeholder="About Teammate"
        defaultValue={teammate?.message}
        name="message"
      ></textarea>
      <div className="flex justify-center">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}
export default UpdateTeamTable;
