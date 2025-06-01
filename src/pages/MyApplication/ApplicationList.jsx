import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div className="overflow-x-auto mb-12">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <JobApplicationRow
              key={application._id}
              index={index}
              application={application}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
