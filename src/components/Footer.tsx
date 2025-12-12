import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/ronaldp12", icon: FaGithub, label: "GitHub" },
    { href: "mailto:patinoguevararonald@gmail.com", icon: FaEnvelope, label: "Email" },
    { href: "https://wa.me/573022892903", icon: FaWhatsapp, label: "WhatsApp" },
];

const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="glass-card border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
                            Ronald Patiño Guevara
                        </h3>
                        <p className="text-text-muted">
                            Desarrollador Frontend apasionado por crear experiencias web excepcionales
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-text-muted hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Sígueme</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass-card rounded-lg hover:scale-110 transition-transform glow-hover"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Ronald Patiño Guevara. Todos los derechos reservados.
                    </p>

                    <Button
                        onClick={scrollToTop}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/50 hover:bg-primary/10 glow-hover"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    );
};
