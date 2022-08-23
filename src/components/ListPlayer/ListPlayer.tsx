import UniformPNG from "../../images/uniform.png";
import { ReactComponent as LeagueSVG } from "../../svg/league.svg";
import { ReactComponent as StripesSVG } from "../../svg/stripes.svg";
import {
  BoxList,
  HeaderList,
  ListContainer,
  ListPlayerContainer,
  RowList,
  Sidebar,
} from "./ListPlayerStyled";

const ListPlayer = () => {
  return (
    <ListPlayerContainer>
      <ListContainer>
        <HeaderList>
          <div>
            <span>قیمت</span>
          </div>
          <div>
            <span>عملکرد</span>
          </div>
          <div></div>
        </HeaderList>

        <BoxList>
          <div className="title">
            <h3>دروازه بانان</h3>
          </div>

          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
        </BoxList>

        <BoxList>
          <div className="title">
            <h3>مدافعان</h3>
          </div>

          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
        </BoxList>

        <BoxList>
          <div className="title">
            <h3>هافبک ها</h3>
          </div>

          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
        </BoxList>

        <BoxList>
          <div className="title">
            <h3>مهاجمین</h3>
          </div>

          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
          <RowList>
            <div>
              <span>9</span>
            </div>
            <div>
              <span>5.9</span>
            </div>
            <div className="name-player">
              <span>none</span>
            </div>
          </RowList>
        </BoxList>
      </ListContainer>

      <Sidebar>
        <img src={UniformPNG} alt="uniform" className="uniform-img" />
        <LeagueSVG />
        <StripesSVG />
      </Sidebar>
    </ListPlayerContainer>
  );
};

export default ListPlayer;
