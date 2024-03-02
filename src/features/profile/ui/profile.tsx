"use client";

import { useUser } from "@/features/auth";
import { DeleteToken } from "@/shared/lib/token";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

export function Profile() {
  const { user } = useUser();
  const router = useRouter();
  function handleLogout() {
    DeleteToken();
    router.push("/");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-neutral-800 text-neutral-200">
          <User size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 border-neutral-500">
        <DropdownMenuLabel>Hi {user.name}!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="w-full  flex flex-col gap-1">
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <PersonIcon /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer flex gap-2 bg-red-600/50 hover:bg-red-600/70 focus:bg-red-600/70"
          >
            <ExitIcon />
            Log out
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
