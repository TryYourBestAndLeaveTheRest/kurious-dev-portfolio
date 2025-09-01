import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import AboutMe from "~/components/aboutMe";
import Contact from "~/components/contact";
import Footer from "~/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <Projects />
    <AboutMe />
    <Contact />
    <Footer />
  </div>

}
