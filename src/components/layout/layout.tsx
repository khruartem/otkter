import MediaQuery from 'react-responsive';

import { LayoutProps } from './types';

export const Layout = ({ type, children }: LayoutProps) => {
  switch (type) {
    case 'large':
      return <MediaQuery minWidth={1681}>{children}</MediaQuery>
    case 'desktop':
      return <MediaQuery maxWidth={1680.9} minWidth={1201}>{children}</MediaQuery>
    case 'laptop':
      return <MediaQuery maxWidth={1200.9} minWidth={1021}>{children}</MediaQuery>
    case 'tablet':
      return <MediaQuery maxWidth={1020.9} minWidth={768}>{children}</MediaQuery>
    case 'mobile':
      return <MediaQuery maxWidth={767.9}>{children}</MediaQuery>
  }
}

/* ВТОРОЙ ВАРИАНТ:

import { useMediaQuery } from 'react-responsive';

const Large = ({ children }: LayoutProps) => {
  const isLarge = useMediaQuery({ minWidth: 1681 })
  return isDesktop ? children : null
}
const Desktop = ({ children }: LayoutProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1201, maxWidth: 1680 })
  return isTablet ? children : null
}
const Laptop = ({ children }: LayoutProps) => {
  const isLaptop = useMediaQuery({ maxWidth: 1200, minWidth: 1021 })
  return isMobile ? children : null
}
const Tablet = ({ children }: LayoutProps) => {
  const isTablet = useMediaQuery({ maxWidth: 1020, minWidth: 769 })
  return isNotMobile ? children : null
}
const Mobile = ({ children }: LayoutProps) => {
  const isMobile = useMediaQuery({ minWidth: 768 })
  return isMobile ? children : null
}*/