import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import type { ContactFormData } from "../types";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "../hooks/useToast";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            // Simulación de envío - Aquí se integraría con EmailJS o una API
            // Formato de ejemplo para endpoint:
            // POST /api/contact
            // Body: { name, email, subject, message }

            await new Promise((resolve) => setTimeout(resolve, 2000));

            toast({
                title: "¡Mensaje enviado!",
                description: "Gracias por contactarme. Te responderé pronto.",
            });

            reset();
        } catch (error) {
            toast({
                title: "Error al enviar",
                description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 rounded-2xl space-y-6"
        >
            <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                    id="name"
                    {...register("name", { required: "El nombre es requerido" })}
                    placeholder="Tu nombre completo"
                    className="bg-surface border-border/50"
                />
                {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "El email es requerido",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido",
                        },
                    })}
                    placeholder="tu@email.com"
                    className="bg-surface border-border/50"
                />
                {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Asunto *</Label>
                <Input
                    id="subject"
                    {...register("subject", { required: "El asunto es requerido" })}
                    placeholder="Motivo del mensaje"
                    className="bg-surface border-border/50"
                />
                {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                    id="message"
                    {...register("message", { required: "El mensaje es requerido" })}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    className="bg-surface border-border/50 resize-none"
                />
                {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 font-semibold text-lg py-6 rounded-xl glow-hover"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                    </>
                )}
            </Button>

            <p className="text-sm text-text-muted text-center">
                Los mensajes se envían a través de un servicio seguro de correo electrónico
            </p>
        </motion.form>
    );
};
