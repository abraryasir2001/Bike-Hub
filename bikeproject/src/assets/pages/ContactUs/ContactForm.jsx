function ContactForm() {
  return (
    <div className="min-h-fit bg-cyan-00">
      <div className="text-center mt-10">
        <p className="text-orange-500 font-bold">Contact</p>
        <h2 className="text-2xl font-bold">Leave Your Message</h2>
      </div>
      <div className="my-10 flex flex-col gap-y-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-info w-full input-bordered"
        />
        <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
      </div>
      <div className="flex justify-center my-10">
        <button className="btn btn-primary w-64">Submit</button>
      </div>
    </div>
  );
}
export default ContactForm;
