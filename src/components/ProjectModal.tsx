import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scrollArea";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle className="text-3xl font-heading font-bold text-foreground">
                        {project.title}
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="max-h-[calc(90vh-8rem)] px-6 pb-6">
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="aspect-video bg-surface rounded-xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-primary">Descripción</h3>
                            <p className="text-foreground/80 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-primary">Tecnologías Utilizadas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Screenshots */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-primary">Capturas</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.screenshots.map((screenshot, index) => (
                                        <div
                                            key={index}
                                            className="aspect-video bg-surface rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={screenshot}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        <div className="flex gap-3 pt-4">
                            {project.demoUrl && (
                                <Button
                                    asChild
                                    className="bg-primary hover:bg-primary/90 flex-1"
                                >
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Ver Demo en Vivo
                                    </a>
                                </Button>
                            )}
                            {project.repoUrl && (
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-primary/50 flex-1"
                                >
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        Ver Repositorio
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
