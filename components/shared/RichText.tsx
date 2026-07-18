import Link from "next/link";

type Segment = { text: string; href?: string };

export function RichText({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.href ? (
          <Link
            key={i}
            href={seg.href}
            className="text-[#0098AF] font-medium hover:text-[#003C46] underline decoration-[#0098AF]/30 underline-offset-2 transition-colors"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}