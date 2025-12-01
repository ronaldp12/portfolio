import { Download, ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn", color: "#0077b5" },
    { href: "https://github.com/ronaldp12", icon: FaGithub, label: "GitHub", color: "#333" },
    { href: "mailto:patinoguevararonald@gmail.com", icon: FaEnvelope, label: "Email", color: "#ea4335" },
    { href: "https://wa.me/3022892903", icon: FaWhatsapp, label: "WhatsApp", color: "#25d366" },
];

export const Hero = () => {
    const scrollToProjects = () => {
        const element = document.querySelector("#proyectos");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold">
                            <span className="block text-foreground">Ronald Patiño Guevara</span>
                        </h1>
                        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto"
                    >
                        Soy desarrollador frontend — diseño interfaces{" "}
                        <span className="text-gradient font-semibold">limpias, accesibles y responsivas</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button
                            onClick={scrollToProjects}
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full glow-hover"
                        >
                            Ver Proyectos
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-primary/50 hover:bg-primary/10 font-semibold px-8 rounded-full"
                        >
                            <a href="/cv.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Descargar CV
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-6 justify-center"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-4 glass-card rounded-2xl hover:scale-110 transition-all duration-300 glow-hover"
                                aria-label={social.label}
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            >
                                <social.icon className="w-7 h-7 text-foreground/70 group-hover:text-primary transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-10"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-block"
                        >
                            <ArrowDown className="w-6 h-6 text-primary/50" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
