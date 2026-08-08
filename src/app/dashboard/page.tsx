import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, DollarSign, TrendingUp, Plus, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Active Shipments", value: "1,248", change: "+12%", icon: Package, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Total Revenue", value: "$842K", change: "+23%", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Fleet Utilized", value: "87%", change: "+5%", icon: Truck, color: "text-orange-400", bg: "bg-orange-500/10" },
  { label: "On-Time Rate", value: "98.4%", change: "+1.2%", icon: TrendingUp, color: "text-purple-400", bg: "bg-purple-500/10" },
];

const shipments = [
  { id: "SH-2024-001", client: "Acme Corp", origin: "Chicago, IL", dest: "New York, NY", status: "Delivered", date: "Aug 7, 2024" },
  { id: "SH-2024-002", client: "Globex Inc", origin: "Los Angeles, CA", dest: "Dallas, TX", status: "In Transit", date: "Aug 7, 2024" },
  { id: "SH-2024-003", client: "Initech", origin: "Seattle, WA", dest: "Miami, FL", status: "Pending", date: "Aug 6, 2024" },
  { id: "SH-2024-004", client: "Umbrella Co", origin: "Boston, MA", dest: "Denver, CO", status: "Delivered", date: "Aug 6, 2024" },
  { id: "SH-2024-005", client: "Stark Ind", origin: "Houston, TX", dest: "Phoenix, AZ", status: "In Transit", date: "Aug 5, 2024" },
  { id: "SH-2024-006", client: "Wayne Ent", origin: "Atlanta, GA", dest: "Portland, OR", status: "Delayed", date: "Aug 5, 2024" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  "Delivered": "default",
  "In Transit": "secondary",
  "Pending": "outline",
  "Delayed": "destructive",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back, {session.user?.name || "User"}</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="w-4 h-4 mr-2" />
          New Shipment
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-zinc-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-400">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white mt-4">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-white/10 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white text-lg">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end gap-2">
              {[420, 380, 510, 460, 620, 580, 720, 650, 780, 710, 840, 790].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-500">{val}K</span>
                  <div
                    className="w-full bg-orange-500 rounded-t-md transition-all hover:bg-orange-400"
                    style={{ height: `${(val / 840) * 100}%` }}
                  />
                  <span className="text-xs text-gray-600">{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white text-lg">Fleet Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Available", count: 142, color: "bg-green-500", pct: "48%" },
              { label: "In Transit", count: 98, color: "bg-blue-500", pct: "33%" },
              { label: "Maintenance", count: 35, color: "bg-yellow-500", pct: "12%" },
              { label: "Out of Service", count: 21, color: "bg-red-500", pct: "7%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-300 flex-1">{item.label}</span>
                <span className="text-sm text-white font-medium">{item.count}</span>
                <span className="text-xs text-gray-500 w-10 text-right">{item.pct}</span>
              </div>
            ))}
            <div className="flex h-2 rounded-full overflow-hidden bg-zinc-800 mt-2">
              <div className="bg-green-500" style={{ width: "48%" }} />
              <div className="bg-blue-500" style={{ width: "33%" }} />
              <div className="bg-yellow-500" style={{ width: "12%" }} />
              <div className="bg-red-500" style={{ width: "7%" }} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Shipments */}
      <Card className="border-white/10 bg-zinc-900">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg">Recent Shipments</CardTitle>
          <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:text-white">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-gray-400">ID</TableHead>
                <TableHead className="text-gray-400">Client</TableHead>
                <TableHead className="text-gray-400">Origin</TableHead>
                <TableHead className="text-gray-400">Destination</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400 text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((s) => (
                <TableRow key={s.id} className="border-white/5 hover:bg-white/5">
                  <TableCell className="text-white font-mono text-sm">{s.id}</TableCell>
                  <TableCell className="text-gray-300">{s.client}</TableCell>
                  <TableCell className="text-gray-400">{s.origin}</TableCell>
                  <TableCell className="text-gray-400">{s.dest}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[s.status]} className="text-xs">
                      {s.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 text-right">{s.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
