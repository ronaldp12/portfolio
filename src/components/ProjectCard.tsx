import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index: number;
    onViewDetails: () => void;
}

export const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 glow-hover"
        >
            <div className="aspect-video bg-surface relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-3">
                        {project.demoUrl && (
                            <Button
                                asChild
                                size="sm"
                                className="bg-primary hover:bg-primary/90"
                            >
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Demo
                                </a>
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="border-primary/50"
                            >
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    Repo
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {project.title}
                </h3>
                <p className="text-foreground/80 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Button
                    onClick={onViewDetails}
                    variant="outline"
                    className="w-full border-primary/50 hover:bg-primary/10"
                >
                    Ver Detalles
                </Button>
            </div>
        </motion.div>
    );
};
