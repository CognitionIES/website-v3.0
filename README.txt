CHANGES IN THIS PATCH (corrected version)
==========================================

KEEP (restored after my earlier mistake):
  app/services/product-engineering/ProductServicesExpanded.tsx
    -> The accordion listing all 9 Product Engineering services on the
       /services/product-engineering page itself. This STAYS.
  app/services/product-engineering/page.tsx
    -> Renders MegaMenu, HeroSection, AboutSection, ProductServicesExpanded, CTASection, Footer.

DELETE from your repo (the actual "horizontal service" standalone pages):
  app/services/product-engineering/[service]/            <- whole folder
    (page.tsx + ProductEngineeringServiceClient.tsx)
    This is what generated /services/product-engineering/electrical-engineering,
    /hydraulic-engineering, /asset-management, etc. Confirmed via your screenshot
    that these are the pages to remove. They will now 404.
  app/services/SearchParamsHandler.js
    Dead code, wasn't imported anywhere, leftover from the old /services?section= pattern.

UPDATED:
  constants/product-engineering/constants.ts
    - Removed the dead `SERVICES` block (confirmed unused anywhere in the app) which
      contained hrefs pointing at the now-deleted /services/product-engineering/[slug] pages.
    - Removed now-unused image/icon imports and the `Service` interface that only that
      block used.
    - HERO, ABOUT, FAQ, ANIMATIONS left untouched.
  app/sitemap.ts
    - Removed the bare /services entry (it's a redirect target now, not a real page).
    - Individual /services/product-engineering/[slug] entries were already commented
      out in this file — no change needed there.

CONFIRMED SAFE (checked, no changes needed):
  - Mega menu (components/ui/Megamenu/MegaMenu.tsx) already links to
    /services/product-engineering#anchor-id (hash into the accordion), not the
    deleted subpages. No dead links there.
  - AboutSection.tsx only reads .ABOUT from PRODUCT_ENGINEERING_CONSTANTS, never
    touched the removed .SERVICES block.

RESULT AFTER DEPLOY:
  /services/product-engineering                          -> stays live w/ accordion
  /services/product-engineering/electrical-engineering    -> 404 (and all its siblings)
  /services  (bare)                                       -> your existing redirect to /product
