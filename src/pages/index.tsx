import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Experience />
                <Skills />
                <Contact />
            </main>
        </div>
    );
};

export default Index;
