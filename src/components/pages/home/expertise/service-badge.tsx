import { Badge } from "@/components/ui/badge";

const ServiceBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <Badge
    className="px-2 py-1 text-xs"
    style={{
      color,
      borderColor: color,
      backgroundColor: `${color}20`,
    }}
  >
    {text}
  </Badge>
);

export default ServiceBadge;