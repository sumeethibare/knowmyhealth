import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import Homegate from "@/components/navigate/Homegate";
import Impress from "@/components/home/Impress";
import Highlights from "@/components/home/Highlights";
import PropOne from "@/components/home/PropOne";
import PromotionOne from "@/components/home/PromotionOne";
import Search from "@/components/navigate/Search";
import { User2Icon } from "lucide-react";


const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <>
      <div className="lg:hidden">
        <Search />
      </div>
      <Homegate />
      <Impress />
      <Highlights />
      <PropOne />
      <PromotionOne />

      <section id="appointment" className="flex flex-col lg:flex-row max-h-screen bg-dark-300 text-white p-6 lg:p-12 gap-8 lg:gap-16">
        {isAdmin && <PasskeyModal />}

        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">knowmyhealth.in</h1>
          <p className="text-dark-200 text-lg lg:text-xl">Book your appointment now</p>
        </div>

        <div className="sub-container flex-1 max-w-[496px] w-full lg:w-[400px] bg-zinc-800 p-6 rounded-lg shadow-md gap-4">
          <PatientForm />
          <a href="/?admin=true" className="group btn inline-flex items-center hover:scale-90 border-none rounded-none themebutton py-4">
            <User2Icon className="right-0 size-5 transition-all duration-300 ease-out" aria-hidden="true" />
            admin login
          </a>
        </div>
      </section>

    </>
  );
};

export default Home;
