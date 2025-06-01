import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/application", application)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(`/myApplications`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col gap-8 my-12 justify-center items-center">
      <h1 className="text-2xl font-bold">
        Apply for this Job :{" "}
        <Link className="text-blue-400 font-normal" to={`/jobDetails/${jobId}`}>
          Details
        </Link>
      </h1>
      <form
        onSubmit={handleApplySubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <label className="label">Linkedin</label>
        <input
          type="url"
          name="linkedIn"
          className="input"
          placeholder="Linkedin URL"
        />

        <label className="label">Github</label>
        <input
          type="url"
          name="github"
          className="input"
          placeholder="Github URL"
        />

        <label className="label">Resume</label>
        <input
          type="url"
          name="resume"
          className="input"
          placeholder="Resume URL"
        />
        <input type="submit" className="btn btn-accent mt-3" value="Apply" />
      </form>
    </div>
  );
};

export default JobApply;
