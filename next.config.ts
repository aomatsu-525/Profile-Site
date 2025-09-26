import type { NextConfig } from "next";

const repoName = "Profile-Site";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pagesでの公開時のみbasePathを使用
  // ローカル確認時は相対パスを使用
  basePath: process.env.GITHUB_ACTIONS ? `/${repoName}` : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? `/${repoName}/` : "./",
};

export default nextConfig;
