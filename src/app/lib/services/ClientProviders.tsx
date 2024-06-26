'use client';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { FunctionComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders: FunctionComponent<ClientProvidersProps> = ({
  children,
}) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ClientProviders;
