import { useMediaQuery } from 'react-responsive';

export const useMobileMediaQuery = () =>
  useMediaQuery({ maxWidth: 767.9 })