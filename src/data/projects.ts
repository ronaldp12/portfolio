import { Project } from "@/types";
import homeAccesoriosApolo from "@assets/home_accesorios_apolo.png";
import bestDiscountAccesoriosApolo from "@assets/best_discount_accesorios_apolo.png";
import loginAccesoriosApolo from "@assets/login_accesorios_apolo.png";
import homeVersatileRadiant from "@assets/home_versatile_radiant.png";
import loginVersatileRadiant from "@assets/login_versatile_radiant.png";

export const projects: Project[] = [
    {
        id: "1",
        title: "Accesorios Apolo",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
        fullDescription: "Desarrollé una plataforma de e-commerce moderna y escalable utilizando React, JavaScript y CSS. La aplicación incluye gestión de productos, carrito de compras con persistencia, integración de pasarela de pagos, y un panel de administración completo. Implementé diseño responsive, optimización de rendimiento y mejores prácticas de accesibilidad.",
        image: homeAccesoriosApolo,
        stack: ["React", "JavaScript", "CSS", "APIs Rest", "Framer Motion"],
        demoUrl: "https://accesorios-apolo-frontend.vercel.app/",
        repoUrl: "https://github.com/ronaldp12/AccesoriosApoloFrontend",
        screenshots: [homeAccesoriosApolo, bestDiscountAccesoriosApolo, loginAccesoriosApolo]
    },
    {
        id: "2",
        title: "Versatile & Radiant",
        description: "Plataforma de comercio electrónico completa con carrito de compras y panel de administración.",
        fullDescription: "Creé una plataforma completa de gestión empresarial diseñada para facilitar la administración de inventarios, productos, proveedores, costos, órdenes de venta y más. El sistema proporciona una interfaz intuitiva para el control total de las operaciones comerciales. Desarrollado con React, TypeScript y Tailwind CSS, el proyecto incluye funcionalidades avanzadas como gestión de productos, seguimiento de inventarios, generación de informes y un panel de administración robusto. Implementé un diseño responsive y optimización de rendimiento para garantizar una experiencia fluida en todos los dispositivos.",
        image: homeVersatileRadiant,
        stack: ["React", "TypeScript", "React Query", "Framer Motion", "Supabase", "Tailwind CSS", "Toastify"],
        demoUrl: "https://versatile-radiant-swart.vercel.app/",
        repoUrl: "https://github.com/kelvinocampo/Versatile_Radiant",
        screenshots: [homeVersatileRadiant, loginVersatileRadiant]
    }
];
