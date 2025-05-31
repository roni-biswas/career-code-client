import { motion } from "motion/react";
import teamOne from "../../assets/team/team1.jpg";
import teamTwo from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-[calc(100vh-65px)] py-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{
              y: [100, 150, 100],
              transition: { duration: 8, repeat: Infinity },
            }}
            src={teamOne}
            className="max-w-sm rounded-lg border-l-8 border-b-8 border-blue-500 rounded-t-[45px] rounded-br-[45px]"
          />
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 16, repeat: Infinity },
            }}
            src={teamTwo}
            className="max-w-sm rounded-lg border-l-8 border-b-8 border-blue-500 rounded-t-[45px] rounded-br-[45px]"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-5xl font-bold"
          >
            Latest Job's for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
