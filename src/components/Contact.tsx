import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

const contactMethods = [
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Ronald Patiño",
        href: "https://linkedin.com",
        color: "#0077b5",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "@ronaldp12",
        href: "https://github.com/ronaldp12",
        color: "#333",
    },
    {
        icon: FaEnvelope,
        label: "Email",
        value: "patinoguevararonald@gmail.com",
        href: "mailto:patinoguevararonald@gmail.com",
        color: "#ea4335",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+57 3022892903",
        href: "https://wa.me/573022892903?text=Hola%20Ronald,%20me%20gustaría%20ponerme%20en%20contacto%20contigo.",
        color: "#25d366",
    },
];

export const Contact = () => {
    return (
        <section id="contacto" className="py-20 px-4 bg-surface/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-gradient">Contacto</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? Hablemos
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-8 rounded-2xl space-y-6">
                            <h3 className="text-2xl font-heading font-semibold mb-6">
                                Información de Contacto
                            </h3>
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface/80 transition-all group glow-hover"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <method.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{method.label}</p>
                                        <p className="text-sm text-text-muted">{method.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
