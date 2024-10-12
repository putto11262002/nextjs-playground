import type { NextConfig } from "next";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve("node_modules/geoip-lite/data"),
            to:
              process.env.NODE_ENV === "production"
                ? path.resolve(".next/server/app/data/")
                : path.resolve(".next/server/data/"),
          },
        ],
      })
    );
    return config;
  },
};

export default nextConfig;
