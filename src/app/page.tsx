import Highlights from "@/components/home/Highlights";
import Impress from "@/components/home/Impress";
import PromotionOne from "@/components/home/PromotionOne";
import PropOne from "@/components/home/PropOne";

export default function Home() {
  return (
    <>
      <Impress />
      <Highlights/>
      <PropOne/>
      <PromotionOne/>
    </>
  );
}
