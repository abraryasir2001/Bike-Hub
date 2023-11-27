import { useNavigate } from "react-router-dom";
function PostTeamForm() {
  const navigate = useNavigate();

  function handlePostTeammate(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const position = event.target.position.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const message = event.target.message.value;
    const teammate = {
      fullName,
      position,
      email,
      photo,
      message,
    };

    fetch(`http://localhost:3000/add-teammate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teammate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate(`/manage-teammate`);
        }
      })
      .catch((error) => {
        console.error("Error adding teammate:", error);
      });
  }

  return (
    <form onSubmit={handlePostTeammate} className="my-10 flex flex-col gap-y-5">
      <input
        type="text"
        placeholder="Teammate Name"
        name="fullName"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate Position"
        name="position"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate Email"
        name="email"
        className="input input-bordered input-info w-full input-bordered"
      />

      <input
        type="text"
        placeholder="Teammate image url"
        name="photo"
        className="input input-bordered input-info w-full input-bordered"
      />

      <textarea
        className="textarea textarea-info"
        placeholder="About Teammate"
        name="message"
      ></textarea>
      <div className="flex justify-center">
        <button
          type="submit"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
export default PostTeamForm;
