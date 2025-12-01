import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative rounded-full hover:bg-surface/50"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon className="h-5 w-5" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun className="h-5 w-5 text-black" />
            </motion.div>
        </Button>
    );
};
