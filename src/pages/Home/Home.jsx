import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={"Loading data..."}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </>
  );
};

export default Home;
