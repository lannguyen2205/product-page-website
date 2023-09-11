import ExclusiveCard from "./ExclusiveCard/ExclusiveCard";
import "./ExclusiveContent.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exclusiveList } from "../../mockup/MockupData";

function ExclusiveContent() {
  const settings = {
    centerMode: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 1.6,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="exclusive">
      <div className="exclusive__header">
        <div className="exclusive__header-content">
          <p className="section-title">Exclusive Game Content</p>
          <p className="text-subtitle-l">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
          </p>
        </div>
      </div>

      <div className="exclusive__slider">
        <Slider {...settings}>
          {exclusiveList.map((item, index) => {
            return (
              <ExclusiveCard key={index} name={item.name} image={item.link} />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ExclusiveContent;
