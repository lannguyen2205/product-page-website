import "./LiveItem.scss";

function LiveItem({title,image}) {
  return (
    <div className="live-item">
      <div className="live-item__content">
        <div className="live-item__img-box">
          <img src={image} alt="" />
        </div>
        <p className="live-item__title">{title}</p>
      </div>
    </div>
  );
}

export default LiveItem;
