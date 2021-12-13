import { ReactNode } from 'react';
import { ModalProvider } from '_context';

interface IProps {
	children: ReactNode;
}

const Providers = ({ children }: IProps) => (
  <ModalProvider>
    { children }
  </ModalProvider>
);

export default Providers;
