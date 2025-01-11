import { useMediaQuery } from 'react-responsive';

export const useTabletMediaQuery = () =>
  useMediaQuery({ minWidth: 768, maxWidth: 1020.9 })