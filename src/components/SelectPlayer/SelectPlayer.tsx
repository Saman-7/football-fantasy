import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../svg/search.svg";
import { ReactComponent as ArrowUpSVG } from "../../svg/arrow-up.svg";

import { ReactComponent as DoubleArrowLeftSVG } from "../../svg/double-arrow-left.svg";
import { ReactComponent as DoubleArrowrRightSVG } from "../../svg/double-arrow-right.svg";
import { ReactComponent as SingleArrowLeftSVG } from "../../svg/single-arrow-left.svg";
import { ReactComponent as SingleArrowRightSVG } from "../../svg/single-arrow-right.svg";

const SelectPlayerContainer = styled.div`
  height: 876px;
  width: 273px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title-head {
    width: 100%;
    height: 50px;
    background: #3d195b;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 800;
      font-size: 18px;
      line-height: 28px;
      color: white;
    }
  }
`;

const InputSearch = styled.div`
  width: 244px;
  height: 40px;
  background: white;
  border-bottom: 1px solid #e4e4e4;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .search-icon {
    padding: 0px 10px;
  }

  & input {
    border: none;
    direction: rtl;
    width: 100%;
    height: 100%;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: rgba(61, 25, 91, 0.67);
    padding: 0px 10px;
    font-family: vazirmatn;
    &:focus {
      outline: none;
      border-bottom: 1px solid;
    }
  }
`;

const FilterButton = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  & button {
    width: 40px;
    height: 30px;
    background: white;
    border: 1px solid #f3f3f3;
    border-radius: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    &:first-child {
      background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
    }
  }
`;

const NumberDisplay = styled.div`
  width: 180px;
  height: 30px;
  background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  border-radius: 8px;
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & span {
    font-weight: 700;
    font-size: 11px;
    line-height: 17px;
  }
`;

const ListPlayers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  & .row-player {
    width: 240px;
    height: 40px;
    direction: rtl;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    background-color: white;
    border-bottom: 1px solid #efefef;
    &:last-child {
      border-bottom: none;
    }

    & div span {
      display: flex;
      justify-content: start;
      align-items: center;
      &:last-child {
        font-weight: 400;
        font-size: 9px;
        line-height: 14px;
        color: rgba(61, 25, 91, 0.36);
      }
    }

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      line-height: 19px;
      color: #3d195b;
      &:first-child {
        justify-content: start;
      }
      &.header {
        color: #999999;
      }
    }
  }
`;

const ChangePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  & svg {
    cursor: pointer;
  }

  & span {
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
  }
`;

const players = [
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
        <input type="text" placeholder="جستجو" />
        <SearchSVG className="search-icon" />
      </InputSearch>

      <FilterButton>
        <button>All</button>
        <button>GK</button>
        <button>DEF</button>
        <button>MID</button>
        <button>ATT</button>
      </FilterButton>

      <NumberDisplay>
        <span>۹۰ دروازه‌بان نمایش داده شده است</span>
      </NumberDisplay>

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
        {players.map(({ name, team, rating, price }) => (
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
