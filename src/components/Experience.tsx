import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
    return (
        <section id="experiencia" className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-gradient">Experiencia</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Mi trayectoria profesional en el desarrollo frontend
                    </p>
                </motion.div>
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
