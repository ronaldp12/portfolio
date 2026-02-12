import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SocialLink, NavLink } from "@/types";

export const socialLinks: SocialLink[] = [
    { href: "https://www.linkedin.com/in/ronald-patiño-7b9980305", icon: FaLinkedin, label: "LinkedIn", color: "#0077b5" },
    { href: "https://github.com/ronaldp12", icon: FaGithub, label: "GitHub", color: "#333" },
    { href: "mailto:patinoguevararonald@gmail.com", icon: FaEnvelope, label: "Email", color: "#ea4335" },
    { href: "https://wa.me/3022892903?text=Hola%20Ronald", icon: FaWhatsapp, label: "WhatsApp", color: "#25d366" },
];

export const navLinks: NavLink[] = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
];