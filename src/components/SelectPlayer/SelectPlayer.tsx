import { ReactComponent as SearchSVG } from "../../svg/search.svg"
import { ReactComponent as ArrowUpSVG } from "../../svg/arrow-up.svg"
import { ReactComponent as DoubleArrowLeftSVG } from "../../svg/double-arrow-left.svg"
import { ReactComponent as DoubleArrowrRightSVG } from "../../svg/double-arrow-right.svg"
import { ReactComponent as SingleArrowLeftSVG } from "../../svg/single-arrow-left.svg"
import { ReactComponent as SingleArrowRightSVG } from "../../svg/single-arrow-right.svg"
import {
  ChangePage,
  FilterButton,
  InputSearch,
  ListPlayers,
  DisplayNumberPlayer,
  SelectPlayerContainer,
} from "./SelectPlayer.styled"
import { useEffect, useState } from "react"
import axios from "axios"
import { numberEnglishToPersian } from "../../utils/numberEnglishToPersion"
import classNames from "classnames"
import useMainPageStore from "../../store"

const lanesPitch = ["All", "GK", "DEF", "MID", "ATT"]

const SelectPlayer = () => {
  const [seach, setSearch] = useState("")
  const [pagePlayers, setPagePlayers] = useState<Array<any>>([])
  const [totalPlayer, setTotalPlayer] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPage, setCountPage] = useState(1)

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  const { filter, setFilter } = useMainPageStore()

  const handleFilter = (lane: string) => {
    let numberFilter
    switch (lane) {
      case "GK":
        numberFilter = 1
        break
      case "DEF":
        numberFilter = 2
        break
      case "MID":
        numberFilter = 3
        break
      case "ATT":
        numberFilter = 4
        break
      default:
        numberFilter = 0
        break
    }
    setFilter(numberFilter)
  }

  useEffect(() => {
    axios
      .get("http://178.216.248.37:8080/api/v1/players/search", {
        params: {
          page: page,
          limit: 14,
          filter: filter,
          web_name: seach,
        },
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTVlZjc5NjE4MzQ5MWM0MzdhMGMyOSIsImlhdCI6MTY2MjM4MTk0Nn0.iwiT5k4CN8_JXvYnw4fOV5B8kDFAbZyQVTIErYbhewk",
        },
      })
      .then((res) => {
        setPagePlayers(res.data.data)
        setCountPage(res.data.pages)
        setTotalPlayer(res.data.total)
      })
      .catch((err) => console.log(err))
  }, [seach, filter, page])

  return (
    <SelectPlayerContainer>
      <div className="title-head">
        <span>انتخاب بازیکن</span>
      </div>

      <InputSearch>
        <SearchSVG className="search-icon" />
        <input type="text" placeholder="جستجو" onChange={changeSearch} />
      </InputSearch>

      <FilterButton>
        {lanesPitch.map((lane, index) => (
          <button
            key={lane}
            className={classNames({ active: filter === index })}
            onClick={() => handleFilter(lane)}
          >
            {lane}
          </button>
        ))}
      </FilterButton>

      <DisplayNumberPlayer>
        <span>{`${totalPlayer} بازیکن نمایش داده شده است`}</span>
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

        {pagePlayers.map(({ web_name, plTeam, form, now_cost }, index) => (
          <div key={index} className="row-player">
            <div>
              <span>{web_name}</span>
              <span>{plTeam.short_name}</span>
            </div>
            <span>{form}</span>
            <span>{now_cost}</span>
          </div>
        ))}
      </ListPlayers>

      <ChangePage>
        <DoubleArrowLeftSVG onClick={() => setPage(totalPage)} />
        <SingleArrowLeftSVG onClick={() => setPage(page + 1)} />
        <span>
          {`صفحه ${numberEnglishToPersian(page.toString())}
           از ${numberEnglishToPersian(totalPage.toString())}`}
        </span>
        <SingleArrowRightSVG onClick={() => setPage(page - 1)} />
        <DoubleArrowrRightSVG onClick={() => setPage(1)} />
      </ChangePage>
    </SelectPlayerContainer>
  )
}

export default SelectPlayer
