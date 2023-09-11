import "./Promotion.scss";
import PromotionSlider from "./PromotionSlider/PromotionSlider";

function Promotion({ isActive }) {
  return (
    <div className={`promotion ${isActive || "session-active"}`}>
      <div className="promotion__header">
        <div className="promotion__header-content">
          <p className="section-title">Special Events & Promotional</p>
          <p className="text-subtitle-l">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
          </p>
        </div>
      </div>

      <PromotionSlider />

      {/* <div className="promotion__slider-container">
        {promotionList.map((item, index) => {
          return (
            <PromotionCard
              className={`${index === currentSlide ? "active" : ""}`}
              key={index}
              image={item.image}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </div>
      <div className="promotion__pagination">
        <Pagination />
      </div> */}
    </div>
  );
}

export default Promotion;
