import { ReactComponent as SearchSVG } from "../../svg/search.svg";
import { ReactComponent as ArrowUpSVG } from "../../svg/arrow-up.svg";

import { ReactComponent as DoubleArrowLeftSVG } from "../../svg/double-arrow-left.svg";
import { ReactComponent as DoubleArrowrRightSVG } from "../../svg/double-arrow-right.svg";
import { ReactComponent as SingleArrowLeftSVG } from "../../svg/single-arrow-left.svg";
import { ReactComponent as SingleArrowRightSVG } from "../../svg/single-arrow-right.svg";
import {
  ChangePage,
  FilterButton,
  InputSearch,
  ListPlayers,
  DisplayNumberPlayer,
  SelectPlayerContainer,
} from "./SelectPlayer.styled";

const lanesPitch = ["All", "GK", "DEF", "MID", "ATT"];

const playersList = [
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
  { name: "Ronaldo", team: "MUN", rating: 9, price: 5.9 },
];

const SelectPlayer = () => {
  return (
    <SelectPlayerContainer>
      <div className="title-head">
        <span>انتخاب بازیکن</span>
      </div>

      <InputSearch>
        <SearchSVG className="search-icon" />
        <input type="text" placeholder="جستجو" />
      </InputSearch>

      <FilterButton>
        {lanesPitch.map((lane) => (
          <button>{lane}</button>
        ))}
      </FilterButton>

      <DisplayNumberPlayer>
        <span>۵۲۳ بازیکن نمایش داده شده است</span>
      </DisplayNumberPlayer>

      <ListPlayers>
        <div className="row-player">
          <span className="header">نام بازیکن</span>
          <span className="header">
            عملکرد
            <ArrowUpSVG />
          </span>
          <span className="header">
            قیمت
            <ArrowUpSVG />
          </span>
        </div>
        {playersList.map(({ name, team, rating, price }) => (
          <div className="row-player">
            <div>
              <span>{name}</span>
              <span>{team}</span>
            </div>
            <span>{rating}</span>
            <span>{price}</span>
          </div>
        ))}
      </ListPlayers>

      <ChangePage>
        <DoubleArrowLeftSVG />
        <SingleArrowLeftSVG />
        <span>صفحه ۱ از ۲</span>
        <SingleArrowRightSVG />
        <DoubleArrowrRightSVG />
      </ChangePage>
    </SelectPlayerContainer>
  );
};

export default SelectPlayer;
