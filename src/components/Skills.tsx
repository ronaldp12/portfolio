import { skills } from "../data/skills";
import { motion } from "framer-motion";

export const Skills = () => {
    const technicalSkills = skills.filter((skill) => skill.category === "technical");
    const softSkills = skills.filter((skill) => skill.category === "soft");

    return (
        <section id="habilidades" className="py-20 px-4 bg-surface/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-gradient">Habilidades</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Tecnologías y competencias que domino
                    </p>
                </motion.div>

                {/* Technical Skills */}
                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-heading font-semibold mb-6 text-primary"
                    >
                        Habilidades Técnicas
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {technicalSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300 glow-hover"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-foreground">{skill.name}</span>
                                    {skill.level && (
                                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                                    )}
                                </div>
                                {skill.level && (
                                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-heading font-semibold mb-6 text-secondary"
                    >
                        Habilidades Blandas
                    </motion.h3>
                    <div className="flex flex-wrap gap-3">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="glass-card px-5 py-3 rounded-full border border-secondary/30 hover:border-secondary transition-colors"
                            >
                                <span className="text-foreground font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
