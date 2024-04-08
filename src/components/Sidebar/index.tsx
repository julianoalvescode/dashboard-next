import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UserSpaceWidget } from "./UserSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <>
      <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
        <Logo />
        <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 border-0 bg-transparent p-0 focus:outline-none text-zinc-900 placeholder-zinc-600"
          />
        </div>
        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>
        <UserSpaceWidget />
        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </aside>
    </>
  );
}
