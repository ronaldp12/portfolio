import { Briefcase, Code, Laptop } from "lucide-react";
import type { Experience } from "../types/index";
import { motion } from "framer-motion";

const iconMap = {
    briefcase: Briefcase,
    code: Code,
    laptop: Laptop,
};

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
    const Icon = iconMap[experience.icon as keyof typeof iconMap] || Briefcase;

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
        >
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 glow-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                            {experience.position}
                        </h3>
                        <p className="text-primary font-medium mb-2">{experience.company}</p>
                        <p className="text-sm text-text-muted mb-3">{experience.period}</p>
                        <p className="text-foreground/80 leading-relaxed">{experience.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
