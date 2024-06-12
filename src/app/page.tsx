"use client";

import {
  AppHeader,
  Container1,
  DownloadApp,
  Experience,
  Faq,
  Team,
  WhyChose,
} from "./lib/components";

export default function Home() {
  return (
    <>
      <Container1 bg="bg-gray-100">
        <AppHeader />
        <Experience />
        <WhyChose />
        <DownloadApp />
        <Team />
      </Container1>
      <Container1 bg="bg-gray-500">
        <Faq />
      </Container1>
    </>
  );
}
