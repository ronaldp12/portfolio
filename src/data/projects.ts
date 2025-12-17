import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
        fullDescription: "Desarrollé una plataforma de e-commerce moderna y escalable utilizando React, TypeScript y Tailwind CSS. La aplicación incluye gestión de productos, carrito de compras con persistencia, integración de pasarela de pagos, y un panel de administración completo. Implementé diseño responsive, optimización de rendimiento y mejores prácticas de accesibilidad.",
        image: "/placeholder.svg",
        stack: ["React", "TypeScript", "Tailwind CSS", "Redux", "Stripe API", "Firebase"],
        demoUrl: "https://demo-ecommerce.example.com",
        repoUrl: "https://github.com/example/ecommerce",
        screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con funcionalidades drag-and-drop, colaboración en tiempo real y notificaciones.",
        fullDescription: "Creé una aplicación de gestión de tareas colaborativa con funcionalidades avanzadas como drag-and-drop para reorganizar tareas, actualización en tiempo real entre múltiples usuarios, sistema de notificaciones, y calendario integrado. La aplicación utiliza React Query para manejo eficiente de estado del servidor y Framer Motion para animaciones fluidas.",
        image: "/placeholder.svg",
        stack: ["React", "TypeScript", "React Query", "Framer Motion", "Supabase"],
        demoUrl: "https://demo-tasks.example.com",
        repoUrl: "https://github.com/example/task-app",
        screenshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Dashboard meteorológico interactivo con gráficos, pronósticos y geolocalización.",
        fullDescription: "Desarrollé un dashboard meteorológico completo que consume APIs de clima para mostrar condiciones actuales, pronósticos por hora y semanales, gráficos interactivos de tendencias, y soporte para múltiples ubicaciones con geolocalización. La aplicación está optimizada para rendimiento y funciona offline con service workers.",
        image: "/placeholder.svg",
        stack: ["React", "TypeScript", "Recharts", "Weather API", "PWA"],
        demoUrl: "https://demo-weather.example.com",
        repoUrl: "https://github.com/example/weather-dashboard",
        screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
        id: "4",
        title: "Portfolio Template",
        description: "Template de portafolio moderno y personalizable para desarrolladores y diseñadores.",
        fullDescription: "Diseñé y desarrollé un template de portafolio altamente personalizable con múltiples secciones, temas (claro/oscuro), animaciones suaves, y formulario de contacto funcional. El template incluye opciones de configuración sencillas para que cualquiera pueda adaptarlo a sus necesidades sin tocar código complejo.",
        image: "/placeholder.svg",
        stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
        demoUrl: "https://demo-portfolio.example.com",
        repoUrl: "https://github.com/example/portfolio-template",
        screenshots: ["/placeholder.svg", "/placeholder.svg"]
    }
];
