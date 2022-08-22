import { ReactComponent as LinePitchSVG } from "../svg/linePitch.svg";
import { ReactComponent as PlusSVG } from "../svg/plus.svg";
import { ReactComponent as DeleteSVG } from "../svg/delete.svg";
import undress from "../img/undress.png";
import uniform from "../img/uniform.png";
import blueDress from "../img/blue-dress.png";
import {
  BoxDress,
  LanePitch,
  PaleGreen,
  PitchContainer,
} from "../styles/Pitch";

const Pitch = () => {
  return (
    <PitchContainer>
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div />
        <div />
        <div />
      </PaleGreen>

      <LanePitch>
        <div className="GK">
          <div />

          <div className="box">
            <DeleteSVG className="delete-icon" />
            <img src={uniform} className="uniform" alt="uniform" />
            <BoxDress>
              <div className="title">
                <span>Cancelo</span>
              </div>
              <div className="rating">
                <span>9.5</span>
              </div>
            </BoxDress>
          </div>
          <div className="box">
            <img src={blueDress} className="undress" alt="undress" />
            {/* <PlusSVG className="plus-icon" /> */}
          </div>

          <div />
        </div>

        <div className="DEF">
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
        </div>

        <div className="MID">
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
        </div>

        <div className="ATT">
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
          <div className="box">
            <img src={undress} className="undress" alt="undress" />
            <PlusSVG className="plus-icon" />
          </div>
        </div>
      </LanePitch>
    </PitchContainer>
  );
};

export default Pitch;
