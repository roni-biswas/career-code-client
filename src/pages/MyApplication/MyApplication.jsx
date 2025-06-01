import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import Loading from "../Shared/Loading";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../services/applicationApi";

const MyApplication = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-center text-2xl my-12 font-bold">
        My Applied Application
      </h2>
      <Suspense fallback={<Loading />}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplication;
