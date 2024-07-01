"use client";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./ApiCallService";

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders: FunctionComponent<ClientProvidersProps> = ({
  children,
}) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default ClientProviders;
