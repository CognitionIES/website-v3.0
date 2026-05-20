import ApplicationForm from "./ApplicationForm";
import ValuesSection from "./ValuesSection";

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <ValuesSection />
          </div>
          <div className="md:col-span-2">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
