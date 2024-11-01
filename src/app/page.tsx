import { Hero, Proposition, Testimonial } from "@/sections/home";
import RegisterModal from "@/components/RegisterModal";

export default function Home() {
  return (
    <>
      <Hero />
      <Proposition />
      <Testimonial />
      <RegisterModal />
    </>
  );
}
