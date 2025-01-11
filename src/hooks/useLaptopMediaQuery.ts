import { useMediaQuery } from 'react-responsive';

export const useLaptopMediaQuery = () =>
  useMediaQuery({ minWidth: 1021, maxWidth: 1200.9 })