import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mt-6 mb-16 px-4">
      <Helmet>
        <title>Contact | Suggestly</title>
      </Helmet>
      <h1 className="text-center text-primary text-4xl font-bold">
        Get in Touch
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        We're here to help! Reach out with any questions, inquiries, or
        feedback.
      </p>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-16 ">
      
       
              <form onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
               }} className="card-body p-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input bg-base-200"
              required
            />
          </div>
          <label className="label">
            <span className="label-text font-semibold">Message</span>
          </label>
          <textarea
            required
            className="textarea bg-base-200"
            placeholder="Message"
          ></textarea>

          <div className="form-control mt-2">
            <button className="text-xl btn border-none bg-primary text-slate-100 hover:bg-secondary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
