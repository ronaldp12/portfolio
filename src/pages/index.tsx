import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Experience />
            </main>
        </div>
    );
};

export default Index;
