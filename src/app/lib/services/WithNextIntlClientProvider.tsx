import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { FunctionComponent, ReactNode } from 'react';

interface WithNextIntlClientProviderProps {
  children: ReactNode;
}

const WithNextIntlClientProvider: FunctionComponent<
  WithNextIntlClientProviderProps
> = async ({ children }) => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default WithNextIntlClientProvider;
