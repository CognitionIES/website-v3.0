import type { Metadata } from "next";
import { jobs } from "@/data/jobs";
import { buildMetadata } from "@/lib/seo";
import JobDetails from "./JobDetails";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    jobId: job.id,
  }));
}

// Next.js 15: params must be awaited before accessing properties
export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  const { jobId } = await params;
  const job = jobs.find((j) => j.id === jobId);
  if (!job) return {};

  return buildMetadata({
    title: `${job.title} | Careers`,
    description: `${job.title} (${job.department}) at Cognition IES. ${job.type} role, ${job.experience} experience, based in ${job.location}.`,
    path: `/careers/${job.id}`,
    keywords: [
      job.title.toLowerCase(),
      job.department.toLowerCase(),
      `${job.title.toLowerCase()} job`,
      `${job.title.toLowerCase()} ${job.location.toLowerCase()}`,
      "engineering jobs india",
      "cognition ies careers",
    ],
  });
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  return <JobDetails jobId={jobId} />;
}