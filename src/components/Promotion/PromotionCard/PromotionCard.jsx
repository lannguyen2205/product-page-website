import "./PromotionCard.scss";
import RoundIcon from "../../RoundIcon/RoundIcon";
import ShareIcon from "../../../assets/svg/share-icon";

function PromotionCard({ title, image, description }) {
  const defaultDesc =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore ...";

  return (
    <div className="promotion-card__container">
      <div className="promotion-card">
        <div className="promotion-card__img-box">
          <div className="promotion-card__img">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="promotion-card__overlay"></div>

        <div className="promotion-card__title">
          <p className="title-h2">{title || "shot title here"}</p>
        </div>

        <div className="promotion-card__content-container">
          <div className="promotion-card__content">
            <div className="promotion-card__top-content">
              <div className="promotion-card__share-button">
                <RoundIcon>
                  <div className="share-icon">
                    <ShareIcon />
                  </div>
                </RoundIcon>
              </div>
              <div className="promotion-card__header">
                <p className="title-h2">{title || "shot title here"}</p>
                <div className="promotion-card__underline"></div>
              </div>
              <div className="promotion-card__desc">
                {description || defaultDesc}
              </div>
            </div>
            <div className="promotion-card__bottom">
              <button className="promotion-card__button">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionCard;
