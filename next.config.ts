import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      new URL(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/**",
      ),
    ],
  },
};

export default nextConfig;
