import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
    { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn", color: "#0077b5" },
    { href: "https://github.com/ronaldp12", icon: FaGithub, label: "GitHub", color: "#333" },
    { href: "mailto:patinoguevararonald@gmail.com", icon: FaEnvelope, label: "Email", color: "#ea4335" },
    { href: "https://wa.me/3022892903?text=Hola%20Ronald", icon: FaWhatsapp, label: "WhatsApp", color: "#25d366" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#inicio"
                        onClick={(e) => scrollToSection(e, "#inicio")}
                        className="text-2xl font-heading font-bold text-gradient"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        RPG
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex gap-6">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-foreground/80 hover:text-primary transition-colors font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/60 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <ul className="flex flex-col gap-4 py-6">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4 py-4 border-t border-border/50">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/60 hover:text-primary transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};
