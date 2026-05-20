"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { jobs, getDepartments } from "@/data/jobs";

const OpenPositions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const departments = getDepartments();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const selectedLabel =
    selectedDepartment === "all" ? "All Departments" : selectedDepartment;

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#0a0a0f] relative">
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-[#0098AF] text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Open Positions
          </p>
          <h2
            className="text-4xl md:text-[56px] font-bold leading-[1.05] tracking-tight text-[#003C46] dark:text-white mb-5"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Work that{" "}
            <em className="not-italic text-[#0098AF]">matters.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            We build engineering solutions used by teams across the globe.
            Come build with us.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-3"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 text-sm bg-[#f7f8fa] dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg text-[#003C46] dark:text-white placeholder:text-[#aabbcc] focus:outline-none focus:border-[#0098AF] transition-colors"
            />
          </div>

          {/* Department dropdown */}
          <div className="relative w-full sm:w-52">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full h-11 px-4 text-sm bg-[#f7f8fa] dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg text-[#003C46] dark:text-white flex items-center justify-between gap-2 focus:outline-none focus:border-[#0098AF] transition-colors"
            >
              <span className="truncate">{selectedLabel}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#aabbcc] flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-12 left-0 right-0 z-50 bg-white dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg shadow-lg overflow-hidden"
                >
                  {["all", ...departments].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => {
                        setSelectedDepartment(dept);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f0f9fb] dark:hover:bg-[#0098AF]/10 ${
                        selectedDepartment === dept
                          ? "text-[#0098AF] font-medium bg-[#f0f9fb] dark:bg-[#0098AF]/10"
                          : "text-[#003C46] dark:text-[#ccddee]"
                      }`}
                    >
                      {dept === "all" ? "All Departments" : dept}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#aabbcc] mb-8 px-1"
        >
          {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
        </motion.p>

        {/* Job List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Table header — desktop only */}
          <div className="hidden md:grid grid-cols-[1fr_160px_140px_44px] gap-4 px-5 pb-3 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#aabbcc]">Role</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#aabbcc]">Location</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#aabbcc]">Experience</span>
            <span />
          </div>

          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Link href={`/careers/${job.id}`}>
                  <div className="group grid grid-cols-1 md:grid-cols-[1fr_160px_140px_44px] gap-2 md:gap-4 items-center px-5 py-5 border-b border-[#e8eaed] dark:border-[#1e1e2e] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 cursor-pointer">

                    {/* Title + dept */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#0098AF] bg-[#0098AF]/10 px-2 py-0.5 rounded">
                          {job.department}
                        </span>
                        {job.type === "Internship" && (
                          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded">
                            Trainee
                          </span>
                        )}
                      </div>
                      <h3 className="text-[18px] font-semibold text-[#003C46] dark:text-white group-hover:text-[#0098AF] transition-colors duration-200">
                        {job.title}
                      </h3>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-[13px] text-[#778899] dark:text-[#6677aa]">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-1.5 text-[13px] text-[#778899] dark:text-[#6677aa]">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{job.experience}</span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-end">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#aabbcc] group-hover:text-[#0098AF] group-hover:bg-[#0098AF]/10 transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-3xl mb-3">—</p>
            <p className="text-sm font-medium text-[#003C46] dark:text-white mb-1">No positions found</p>
            <p className="text-sm text-[#aabbcc]">Try different search terms or department</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default OpenPositions;