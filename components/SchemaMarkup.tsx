/**
 * SchemaMarkup | injects JSON-LD into <head> as a Server Component.
 * Works with any schema object from lib/schema.ts.
 */

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
