import DownloadIcon from "../../../assets/svg/download";
import RoundIcon from "../../RoundIcon/RoundIcon";
import "./ExclusiveCard.scss";

function ExclusiveCard({ image, name }) {
  console.log("image", image);
  const handleDownloadImage = () => {
    const imageURL = image;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";

    xhr.onload = () => {
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = `${name}.jpg`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    xhr.open("GET", imageURL);
    xhr.send();
  };

  return (
    <div className="exclusive-card">
      <div className="exclusive-card__content">
        <div className="exclusive-card__img-box">
          <img src={image} alt="exclusive-card" />
          <div
            className="exclisive-card__icon"
            onClick={() => handleDownloadImage()}
          >
            <RoundIcon>
              <DownloadIcon />
            </RoundIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveCard;
