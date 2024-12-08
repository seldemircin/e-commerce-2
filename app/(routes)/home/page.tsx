import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import "animate.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-violet-300 to-violet-700  h-[90vh] flex justify-center items-center max-lg:p-4">
      <div
        className={`lg:w-3/4 lg:h-2/3 bg-slate-800 shadow-2xl rounded-3xl bg-opacity-10 flex justify-evenly items-center flex-col space-y-6 ${raleway.className} max-lg:p-10 h-3/4`}
      >
        <h1 className="text-white text-5xl font-extrabold max-lg:text-4xl max-lg:text-center animate__animated animate__fadeInDown animate__delay-0.5s">
          Learn and buy at the same time!
        </h1>
        <p className="text-lg text-white">Enjoy learning while shopping.</p>
        <div className="space-x-3">
          <Button variant={"wfullButton"}>Start Shopping </Button>
          <Button variant={"wfullButton"}> Docs </Button>
        </div>
      </div>
    </div>
  );
}
