import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const data = use(jobsPromise);
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center my-6">
        Hot Jobs of the day
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
