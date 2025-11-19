import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start">
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/work">
            <DropdownMenuItem>Work</DropdownMenuItem>
          </Link>
          <Link href="/blog">
            <DropdownMenuItem>Blog</DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link href="/contact">
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Contribute
          <FaGithub size={32} color="black" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
