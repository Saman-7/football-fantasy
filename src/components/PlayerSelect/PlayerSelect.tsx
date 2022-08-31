import styled from "styled-components"
import SearchLogo from "../../svg/search-normal.svg"

const PlayerSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 791px;
  height: 876px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
`

const PlayerSelectTopContainer = styled.div`
  width: 273px;
  height: 50px;
  background: #3d195b;
  border-radius: 16px 16px 0px 0px;
`

const PlayerSelectTopText = styled.span`
  position: absolute;
  width: 235px;
  height: 27px;
  top: 12px;
  right: 16px;
  bottom: 11px;
  left: 22px;
  text-align: center;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`

const PlayerSelectBottomContainer = styled.div`
  width: 273px;
  height: 828px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`

const SearchBarContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 244px;
  height: 40px;
  top: 22px;
  right: 12px;
  left: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e4e4e4;
`

const SearchButton = styled.button`
  position: relative;
  right: 17px;
  left: 13px;
  background: transparent;
  border: none;
`

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`

const SearchBar = styled.input`
  text-align: right;
  width: 165px;
  height: 15px;
  border: none;
  background-color: transparent;
  outline: 0;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: rgba(61, 25, 91, 0.67);
  ::placeholder {
    font-family: "Vazirmatn";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: rgba(61, 25, 91, 0.67);
  }
`

const PlayerPositionFilterContainer = styled.div`
  width: 240px;
  height: 30px;
  position: relative;
  top: 41px;
  right: 14px;
  left: 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PlayerPositionFilter = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  &:hover {
    background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  }
`

const NumberOfPlayers = styled.div`
  width: 180px;
  height: 30px;
  position: relative;
  top: 61px;
  left: 47px;
  right: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  border-radius: 8px;
`

const NumberOfPlayersText = styled.span`
  width: 165px;
  height: 15px;
  text-align: center;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 17px;
  color: #000000;
`

const PlayersTableContainer = styled.div`
  width: 240px;
  height: 620px;
  position: relative;
  top: 81px;
  right: 16px;
  left: 17px;
  /* overflow-y: scroll; */
  border-radius: 8px;
`

const TableHeadersContainer = styled.div`
  width: 240px;
  height: 21px;
`

const PlayerNameHeader = styled.span``

const PlayerPerformanceHeader = styled.span``

const PlayerPriceHeader = styled.span``

const PlayerSelect = () => {
  return (
    <PlayerSelectContainer>
      <PlayerSelectTopContainer>
        <PlayerSelectTopText>انتخاب بازیکن</PlayerSelectTopText>
      </PlayerSelectTopContainer>

      <PlayerSelectBottomContainer>
        <SearchBarContainer>
          <SearchBar placeholder="جستجو" />
          <SearchButton>
            <SearchIcon src={SearchLogo} />
          </SearchButton>
        </SearchBarContainer>

        <PlayerPositionFilterContainer>
          <PlayerPositionFilter>ATT </PlayerPositionFilter>

          <PlayerPositionFilter>MID </PlayerPositionFilter>

          <PlayerPositionFilter>DEF </PlayerPositionFilter>

          <PlayerPositionFilter>GK </PlayerPositionFilter>

          <PlayerPositionFilter>All </PlayerPositionFilter>
        </PlayerPositionFilterContainer>

        <NumberOfPlayers>
          <NumberOfPlayersText>
            ۵۲۳ بازیکن نمایش داده شده است
          </NumberOfPlayersText>
        </NumberOfPlayers>

        <PlayersTableContainer>
          <TableHeadersContainer>
            <PlayerNameHeader>نام بازیکن</PlayerNameHeader>

            <PlayerPerformanceHeader>عملکرد</PlayerPerformanceHeader>

            <PlayerPriceHeader>قیمت</PlayerPriceHeader>
          </TableHeadersContainer>
        </PlayersTableContainer>
      </PlayerSelectBottomContainer>
    </PlayerSelectContainer>
  )
}

export default PlayerSelect
