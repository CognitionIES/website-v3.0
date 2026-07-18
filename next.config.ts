import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*  Static export for cPanel/Apache hosting  */
  output: "export",

  /*  Image handling — no server available to run the optimizer,
      so images must be unoptimized. Cache-Control for /images/ is
      now handled in .htaccess instead.                            */
  images: {
    unoptimized: true,
  },

  /*  Performance  */
  compress: true,                                  // gzip/brotli
  poweredByHeader: false,                           // Remove X-Powered-By

  /*  headers() and redirects() removed — not supported with
      output: "export". Equivalent logic now lives in .htaccess:
        - HTTPS/www force            → section 1
        - Trailing-slash redirects   → section 1b
        - Legacy ?section= redirects → section 1c
        - Security + cache headers   → section 6
        - Compression                → section 6b               */

  /*  Build  */
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;