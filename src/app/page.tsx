import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Watches from "./watches/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Watches />
      <About />
      <Contact />
    </main>
  );
}