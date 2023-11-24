export interface NavItem {
  label: string
  link: string
}

export interface NavBarProps {
  active?: string
}

export interface NavLinkProps {
  item: NavItem
  active: string
}
