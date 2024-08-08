import { SignIn } from '@/components/auth/sign-in'
import { SignOut } from '@/components/auth/sign-out'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { auth } from '@/lib/auth'
import { getInitials } from '@/lib/initials'
import Link from 'next/link'

export async function AuthButton() {
  const session = await auth()
  const user = session?.user

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>
              {getInitials((user.name || user.email)!)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem className="flex-col items-start">
              Account
              <DropdownMenuShortcut className="hidden">
                ⇧⌘S
              </DropdownMenuShortcut>
              <span className="text-xs capitalize text-muted-foreground">
                coming soon
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <Link href="/home">
              <DropdownMenuItem>Home page</DropdownMenuItem>
            </Link>
            <SignOut asChild>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </SignOut>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return <SignIn>Sign In</SignIn>
}
