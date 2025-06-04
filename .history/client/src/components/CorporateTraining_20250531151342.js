import "./CorporateTraining.css";
import { useForm } from "react-hook-form";
import EnquiryNow from "./EnquiryNow";
import OurPlacementPartners from "./OurPlacementPartners";
import CTP from "./CTP";
import TrainingSteps from "./TrainingSteps";
import FeatureCards from "./FeatureCards";
import DFCSection from "./DFCSection";
import GetExpertGuidance from "./GetExpertGuidance";
import TopCourses from "./TopCourses";
import OurSuccess from "./OurSuccess";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";

export default function CorporateTraining() {

  return (
    <>
      <EnquiryNow />

      <OurPlacementPartners />

      <CTP />

      <TrainingSteps />

      <FeatureCards />

      <DFCSection />

      <GetExpertGuidance />

      <TopCourses />

      <OurSuccess />

      <FAQSection />

      <Testimonials />
    </>
  );
}
