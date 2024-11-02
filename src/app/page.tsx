import { Hero, Proposition, Testimonial } from "@/sections/home";
import RegisterModal from "@/components/RegisterModal";
import { QuestionaireModal } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Proposition />
      <Testimonial />
      <RegisterModal />
      <QuestionaireModal />
    </>
  );
}
