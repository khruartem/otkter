import { useMediaQuery } from 'react-responsive';

export const useLargeScreenMediaQuery = () =>
  useMediaQuery({ minWidth: 1681 })