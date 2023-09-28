import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { ENLogo, SunIcon, MoonIcon } from '@/icons'
import { PopperApp } from './PopperApp'

export const NavbarApp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <ENLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <PopperApp />
        <Button
          disableRipple
          disableAnimation
          isIconOnly
          variant="light"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <span className="dark:hidden">
            <MoonIcon />
          </span>
          <span className="hidden dark:block">
            <SunIcon />
          </span>
        </Button>

      </NavbarContent>
    </Navbar>
  )
}