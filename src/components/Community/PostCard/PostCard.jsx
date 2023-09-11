import "./PostCard.scss";
import RoundIcon from "../../RoundIcon/RoundIcon";
import ShareIcon from "../../../assets/svg/share-icon";
import FbDefault from "../../../assets/svg/facebook-default";
import twitter from "../../../assets/svg/post-twitter.svg";
// import facebook from "../../assets/svg/post-facebook.svg";
import insta from "../../../assets/svg/post-insta.svg";

function PostCard({ image, type, description }) {
  var typeIcon;
  if (type === "facebook") {
    typeIcon = <FbDefault />;
  } else if (type === "twitter") {
    typeIcon = <img src={twitter} alt="" />;
  } else {
    typeIcon = <img src={insta} alt="" />;
  }

  const defaultDesc =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore ...";
  return (
    <div className="post-card__container">
      <div className="post-card">
        <div className="post-card__img-box">
          <div className="post-card__img">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="post-card__overlay"></div>

        <div className="post-card__content-container">
          <div className="post-card__content">
            <div className="post-card__top-content">
              <div className="post-card__type-button">
                <RoundIcon>{typeIcon}</RoundIcon>
              </div>
              <div className="post-card__share-button">
                <RoundIcon>
                  <div className="share-icon">
                    <ShareIcon />
                  </div>
                </RoundIcon>
              </div>
            </div>
            <div className="post-card__desc">{description || defaultDesc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
