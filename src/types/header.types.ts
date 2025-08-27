export interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: MenuItem[];
}

export type MenuItem = {
  label: string;
  url: string;
  onClick?: () => void;
};

export interface FloatingParticlesProps {
  particleCount?: number;
  className?: string;
}

export interface HeaderProps {
  className?: string;
  menuItems?: MenuItem[];
  logoProps?: Partial<LogoProps>;
  showSignIn?: boolean;
}
