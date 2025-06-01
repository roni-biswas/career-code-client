import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt={title} />
        </figure>
        <div>
          <h4 className="text-xl font-semibold">{company}</h4>
          <p className="flex items-center gap-1">
            <MdOutlineLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mt-6">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
