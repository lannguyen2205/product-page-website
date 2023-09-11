
import { promotionList } from "../../../mockup/MockupData";
import PromotionCard from "../PromotionCard/PromotionCard";
import Pagination from "../../common/Pagination/Pagination";
import "./PromotionSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../common/Pagination/Pagination.scss";

function PromotionSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <div className="pagination__item">
          <p>{`0${i + 1}`}</p>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    centerMode: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          // swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          // swipeToSlide: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          // swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          // swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {promotionList.map((item, index) => {
          return (
            <PromotionCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </Slider>

      {/* <div className="promotion__pagination">
        <Pagination />
      </div> */}
    </div>
  );
}

export default PromotionSlider;
