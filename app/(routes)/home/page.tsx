import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-violet-300 to-violet-700  h-[90vh] flex justify-center items-center">
      <div
        className={`lg:w-3/4 lg:h-2/3 lg:bg-slate-800 lg:hadow-2xl lg:rounded-3xl lg:bg-opacity-10 flex justify-around items-center flex-col space-y-6 ${raleway.className} max-lg:p-2`}
      >
        <h1 className="text-white text-5xl font-extrabold max-lg:text-4xl">
          Learn and buy at the same time!
        </h1>
        <p className="text-lg text-white">Enjoy learning while shopping.</p>
        <div className="space-x-3">
          <Button variant={"wfullButton"}> Shopping </Button>
          <Button variant={"wfullButton"}> Docs </Button>
        </div>
      </div>
    </div>
  );
}
