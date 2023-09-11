import { liveList } from "../../mockup/MockupData";
import "./Community.scss";
import LiveItem from "./LiveItem/LiveItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import facebook from "../../assets/svg/post-facebook.svg";
import twitter from "../../assets/svg/post-twitter.svg";
import insta from "../../assets/svg/post-insta.svg";
import SearchBox from "../common/SearchBox/SearchBox";
import PostCard from "./PostCard/PostCard";
import { posts } from "../../mockup/MockupJson";

function Community() {
  const settings1 = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    dotsClass: "slick-dots",
    centerMode: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div className="community">
      <div className="community__header">
        <p className="section-title">Game Community Hub</p>
      </div>
      <div className="community__live">
        <div className="community__live-content">
          <p className="community__live-title">Live Game Updates</p>
          <div className="community__live-slider-wrapper">
            <div className="community__live-slider">
              <Slider {...settings1}>
                {liveList.map((item, index) => {
                  return (
                    <LiveItem
                      key={index}
                      title={item.title}
                      image={item.image}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="community__all-posts">
        <div className="community__post-header">
          <div className="community__post-header-content">
            <div className="community__post-header-group">
              <p className="community__post-title">All posts</p>
              <div className="community__post-filter">
                <img src={twitter} alt="twitter" />
                <img src={insta} alt="insta" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="community__post-search">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="community__post-content">
          <div className="community__post-slider desktop">
            <Slider {...settings2}>
              {posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    image={post.images}
                    type={post.type}
                    description={post.description}
                  />
                );
              })}
            </Slider>
          </div>

          <div className="community__post-slider mobile">
            {posts.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  image={post.images}
                  type={post.type}
                  description={post.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
