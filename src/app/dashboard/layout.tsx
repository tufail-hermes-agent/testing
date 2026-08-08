import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { 
  LayoutDashboard, Truck, Package, Users, Settings, BarChart3, LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/shipments", label: "Shipments", icon: Package },
  { href: "/dashboard/fleet", label: "Fleet", icon: Truck },
  { href: "/dashboard/clients", label: "Clients", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const initials = (session.user?.name || session.user?.email || "U")
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-zinc-900 border-r border-white/10 p-4">
        <Link href="/" className="text-xl font-extrabold text-white mb-8 px-3">
          Swift<span className="text-orange-500">Haul</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition text-sm font-medium"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <Separator className="bg-white/10 my-4" />

        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="h-8 w-8 bg-orange-500">
            <AvatarFallback className="text-xs font-bold">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{session.user?.name || "User"}</p>
            <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
          </div>
          <Link href="/api/auth/signout">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
              <LogOut className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900">
          <Link href="/" className="text-lg font-extrabold text-white">
            Swift<span className="text-orange-500">Haul</span>
          </Link>
          <Link href="/api/auth/signout">
            <Button variant="ghost" size="sm" className="text-gray-400">Sign Out</Button>
          </Link>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>

      <Toaster />
    </div>
  );
}
