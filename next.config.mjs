/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  trailingSlash: true,
  metadataBase: new URL("https://edmundhowdlebutchers.co.uk"),
};

export default nextConfig;
