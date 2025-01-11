import { useMediaQuery } from 'react-responsive';

export const useDesktopMediaQuery = () =>
  useMediaQuery({ minWidth: 1201, maxWidth: 1680.9 })