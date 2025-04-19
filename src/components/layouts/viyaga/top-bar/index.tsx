import { Button } from "@/components/ui/button";
import { Moon, Languages } from "lucide-react";

export function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <span className="font-semibold text-lg">Viyaga Enterprises</span>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Moon className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Languages className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
