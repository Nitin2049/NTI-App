import "./PlacementSection.css";
import Placement from "../components/Placement";
import OurPlacementPartners from "../components/OurPlacementPartners";

const PlacementSection = () => {
  return (
    <>
      <div>
        <section className="placement-section">
          <h2 className="placement-title">Best placements offered</h2>
          <p className="placement-description">
            We provide best career guidance along with appropriate placements.
          </p>
        </section>
      </div>
      <Placement />
      <OurPlacementPartners />
    </>
  );
};

export default PlacementSection;
