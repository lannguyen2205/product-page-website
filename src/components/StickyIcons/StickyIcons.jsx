import "./StickyIcons.scss";

import RoundIcon from "../RoundIcon/RoundIcon";
import ShareIcon from "../../assets/svg/share-icon";
import MailIcon from "../../assets/svg/mail-icon";
import SupportIcon from "../../assets/svg/support-icon";

function StickyIcons() {
  return (
    <div className="sticky-icons">
      <RoundIcon>
        <div className="share-icon">
          <ShareIcon />
        </div>
      </RoundIcon>

      <RoundIcon>
        <MailIcon />
      </RoundIcon>

      <RoundIcon>
        <SupportIcon />
      </RoundIcon>
    </div>
  );
}

export default StickyIcons;
