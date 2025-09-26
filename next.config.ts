import type { NextConfig } from "next";

const repoName = "Profile-Site";
const isGh = !!process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages での公開時のみ basePath/assetPrefix を設定
  ...(isGh
    ? {
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
    }
    : {}),
};

export default nextConfig;
