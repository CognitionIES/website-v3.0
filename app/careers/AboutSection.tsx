"use client";

import ValuesSection from "./ValuesSection";
import ApplicationForm from "./ApplicationForm";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Values sidebar */}
          <div className="lg:col-span-2">
            <ValuesSection />
          </div>
          {/* Application form */}
          <div className="lg:col-span-3">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
