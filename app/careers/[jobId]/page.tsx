import { jobs } from "@/data/jobs";
import JobDetails from "./JobDetails";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    jobId: job.id,
  }));
}

// Next.js 15: params must be awaited before accessing properties
export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  return <JobDetails jobId={jobId} />;
}