import AppInfoBlock from "@/components/dinoLanding/AppInfoBlock/AppInfoBlock";
import BottomDecorateBlock from "@/components/dinoLanding/BottomDecorateBlock/BottomDecorateBlock";
import DinoBenefitsBlock from "@/components/dinoLanding/DinoBenefitsBlock/DinoBenefitsBlock";
import DinoCardBlock from "@/components/dinoLanding/DinoCardBlock/DinoCardBlock";
import DinoFooter from "@/components/dinoLanding/DinoFooter/DinoFooter";
import DinoLiveBlock from "@/components/dinoLanding/DinoLiveBlock/DinoLiveBlock";
import DinoSlider from "@/components/dinoLanding/DinoSlider/DinoSlider";
import HeroBlock from "@/components/dinoLanding/HeroBlock/HeroBlock";

export default function Home() {
  return (
    <div>
      <HeroBlock />
      <AppInfoBlock />
      <DinoCardBlock />
      <DinoBenefitsBlock />
      <DinoLiveBlock />
      <DinoSlider />
      <DinoFooter />
      <BottomDecorateBlock />
    </div>
  );
}
