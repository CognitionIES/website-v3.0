import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*  Image optimisation  */
  images: {
    formats: ["image/avif", "image/webp"],       // Modern formats up to 50% smaller
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [75, 80, 85, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30,          // 30-day cache
    unoptimized: false,                            // Enable optimisation
  },

  /*  Performance  */
  compress: true,                                  // gzip/brotli
  poweredByHeader: false,                          // Remove X-Powered-By

  /*  Security & performance HTTP headers  */
  async headers() {
    // Custom headers (esp. Cache-Control on /_next/static) break Next.js dev
    // behavior and spam a warning on every start, so apply them in prod only.
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Clickjacking protection
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // XSS protection
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // HSTS
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Referrer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Long-term cache for static assets
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Image cache
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  /*  Redirects  */
  async redirects() {
    return [
      //  Trailing slash normalisation 
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/careers/", destination: "/careers", permanent: true },
      { source: "/faq/", destination: "/faq", permanent: true },
      { source: "/services", destination: "/services/product-engineering", permanent: true },
      { source: "/services/", destination: "/services/product-engineering", permanent: true },
      { source: "/services/product-engineering/", destination: "/services/product-engineering", permanent: true },
      { source: "/services/plant-engineering/", destination: "/services/plant-engineering", permanent: true },

      //  301: Legacy ?section= query-param URLs → clean semantic service URLs 
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "mechanical" }],
        destination: "/services/product-engineering/mechanical-design",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "electrical" }],
        destination: "/services/product-engineering/electrical-engineering",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "cae-cfd" }],
        destination: "/services/product-engineering/cae-cfd",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "prototyping" }],
        destination: "/services/product-engineering/prototyping-3d-printing",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "hydraulic" }],
        destination: "/services/product-engineering/hydraulic-engineering",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "asset-management" }],
        destination: "/services/product-engineering/asset-management",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "embedded-systems" }],
        destination: "/services/product-engineering/embedded-systems",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "technical-publication" }],
        destination: "/services/product-engineering/technical-publication",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "section", value: "supply-chain" }],
        destination: "/services/product-engineering/supply-chain-management",
        permanent: true,
      },
    ];
  },

  /*  Build  */
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
