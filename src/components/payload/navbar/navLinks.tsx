import {
  Home,
  User,
  Image,
  Tag,
  Layout,
  ShoppingCart,
  DollarSign,
  Banknote,
  Star,
  Settings,
  Globe,
  Layers,
  Folder,
  FileText,
  BarChart3,
  Lightbulb
} from "lucide-react";

export const navLinks = [
  {
    href: "/dashboard/account",
    label: "Account",
    icon: <User size={16} />,
    roles: ["admin", "affiliate", "customer"],
  },
  {
    href: "/dashboard/collections/users",
    label: "Affiliates",
    icon: <Layers size={16} />,
    roles: ["affiliate"],
  },
  {
    href: "/dashboard/collections/bank-details",
    label: "Bank Details",
    icon: <Banknote size={16} />,
    roles: ["admin", "affiliate"],
  },
  {
    href: "/dashboard/collections/banners",
    label: "Banners",
    icon: <Layout size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/categories",
    label: "Categories",
    icon: <Folder size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/affiliate-commission-settings",
    label: "Commission Settings",
    icon: <Settings size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Home size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/discount-codes",
    label: "Discount Codes",
    icon: <Home size={16} />,
    roles: ["admin", "affiliate"],
  },
  {
    href: "/dashboard/collections/affiliate-commissions",
    label: "Earnings",
    icon: <DollarSign size={16} />,
    roles: ["admin", "affiliate"],
  },
  {
    href: "/dashboard/collections/leads",
    label: "Leads",
    icon: <Lightbulb size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/pages",
    label: "Pages",
    icon: <FileText size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/products",
    label: "Products",
    icon: <ShoppingCart size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/orders",
    label: "Orders",
    icon: <ShoppingCart size={16} />,
    roles: ["admin", "affiliate", "customer"],
  },
  {
    href: "/dashboard/collections/media",
    label: "Media",
    icon: <Image size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/seo",
    label: "SEO",
    icon: <Globe size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/subscription-plans",
    label: "Subscription Plans",
    icon: <BarChart3 size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/tags",
    label: "Tags",
    icon: <Tag size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/testimonials",
    label: "Testimonials",
    icon: <Star size={16} />,
    roles: ["admin"],
  },
  {
    href: "/dashboard/collections/users",
    label: "Users",
    icon: <Layers size={16} />,
    roles: ["admin"],
  },
];


export function getNavLinksByRole(role: string) {
  return navLinks.filter((link) => !link.roles || link.roles.includes(role));
}
