import { Moon, Sun, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 px-0"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:rotate-90 hidden-system:scale-0 hidden-system:rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0 hidden-system:scale-0 hidden-system:rotate-90" />
      <MonitorSmartphone className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden-system:scale-100 hidden-system:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}