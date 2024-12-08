import Highlights from "@/components/home/Highlights";
import Impress from "@/components/home/Impress";
import PromotionOne from "@/components/home/PromotionOne";
import PromotionTwo from "@/components/home/PromotionTwo";
import PropOne from "@/components/home/PropOne";
import Homegate from "@/components/navigate/Homegate";

export default function Home() {
  return (
    <>
      <Homegate />
      <Impress />
      <Highlights />
      <PropOne />
      <PromotionOne />
      {/* <PromotionTwo/> */}
    </>
  );
}
