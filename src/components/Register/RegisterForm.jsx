import "./RegisterForm.scss";
import decorator from "../../assets/svg/decorator-img.svg";
import TextInput from "../common/TextInput/TextInput";
import DropdownList from "../common/DropdownList/DropdownList";
import { countries, platforms } from "../../mockup/MockupData";
import Checkbox from "../common/Checkbox/Checkbox";

function RegisterForm({ isActive }) {
  return (
    <div className={`register ${isActive || "session-active"}`}>
      <div className="register__container">
        <div className="register__decorator">
          <img src={decorator} alt="" />
        </div>

        <div className="register__form">
          <div className="form__header">
            <p className="text-h2">Stay in the Know!</p>
            <div className="form__subtitle">
              <p className="text-subtitle-s">Don't get left behind!</p>
              <p className="text-subtitle-s">
                Subscribe to our newsletters today!
              </p>
            </div>
          </div>

          <div className="form__boxs">
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />

            <DropdownList options={countries} />
            <DropdownList options={platforms} />
          </div>

          <div className="form__checkbox-group">
            <div className="form__checkbox-item">
              <Checkbox />
              <p className="form__checkbox-desc">
                By signing up, I confirm that I am 13 years old or older. I
                agree to the Gameloft Terms and Conditions and I have read the
                Privacy Policy.
              </p>
            </div>

            <div className="form__checkbox-item">
              <Checkbox />
              <p className="form__checkbox-desc">
                I agree to receive promotional offers relating to all Gameloft
                games and services.
              </p>
            </div>
          </div>

          <div className="form__footer">
            <button className="form__button">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
