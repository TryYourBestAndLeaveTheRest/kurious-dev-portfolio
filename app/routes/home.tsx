import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import AboutMe from "~/components/aboutMe";
import Contact from "~/components/contact";
import Footer from "~/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kurious Dev Portfolio" },
    { name: "description", content: "A backend developer proficiency in Javascript frameworks and library, node with express application, python and python backend frameworks like fastAPI, Flask and Django, Experience with devOps best practice, proficiency in Docker, Kubernetes and cloud platforms like azure, and GCP" },
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
