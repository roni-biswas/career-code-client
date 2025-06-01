import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl text-orange-500 font-bold">{title}</h1>
            <p className="text-gray-500">{company}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaBriefcase /> {jobType}
          </p>
          <p className="flex items-center gap-2">
            <FaMoneyBillWave /> Salary: BDT {salaryRange.min.toLocaleString()} -{" "}
            {salaryRange.max.toLocaleString()}
          </p>
          <p className="flex items-center gap-2">
            🕓 Deadline: {applicationDeadline}
          </p>
          <p className="flex items-center gap-2">
            <FaUserTie /> HR: {hr_name}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> {hr_email}
          </p>
        </div>

        <div>
          <h2 className="text-xl text-indigo-500 font-semibold mb-2">
            Job Description
          </h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div>
          <h2 className="text-xl text-indigo-500 font-semibold mb-2">
            Responsibilities
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-indigo-500 font-semibold mb-2">
            Requirements
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {requirements.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Link to={`/jobApply/${_id}`} className="btn btn-primary w-full">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
