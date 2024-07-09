import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: "export",
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  // distDir: "dist",

  trailingSlash: true,

  images: {
    domains: ["owlegram.com", "127.0.0.1"],
    disableStaticImages: false,
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
