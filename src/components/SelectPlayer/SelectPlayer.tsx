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
import { filterStringToNumber } from "../../utils/filterStringToNumber"

const lanesPitch = ["All", "GK", "DEF", "MID", "ATT"]

const SelectPlayer = () => {
  const [seach, setSearch] = useState("")
  const [pagePlayers, setPagePlayers] = useState<Array<any>>([])
  const [totalPlayer, setTotalPlayer] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPage, setCountPage] = useState(1)

  const { filter, setFilter, position, setPicks, setBudget } =
    useMainPageStore()

  const addPlayerToPitch = (_id: string) => {
    if (position !== undefined) {
      const token = JSON.parse(localStorage.getItem("token") || "{}")
      axios({
        method: "patch",
        url: "http://178.216.248.37:8080/api/v1/teams/add-player",
        data: {
          id: _id,
          index: position,
        },
        headers: {
          token: token,
        },
      })
        .then((_) => {
          axios
            .get("http://178.216.248.37:8080/api/v1/managers/dashboard", {
              headers: {
                token: token,
              },
            })
            .then((res) => {
              setPicks(res.data.data.manager.teamId.picks)
              setBudget(res.data.data.manager.budget)
            })
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || "{}")
    axios
      .get("http://178.216.248.37:8080/api/v1/players/search", {
        params: {
          page: page,
          limit: 14,
          filter: filter,
          web_name: seach,
        },
        headers: {
          token: token,
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
        <input
          type="text"
          placeholder="جستجو"
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputSearch>

      <FilterButton>
        {lanesPitch.map((lane, index) => (
          <button
            key={lane}
            className={classNames({ active: filter === index })}
            onClick={() => setFilter(filterStringToNumber(lane))}
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

        {pagePlayers.map(
          ({ _id, web_name, plTeam, form, now_cost, generalId }) => (
            <div
              key={generalId}
              className="row-player"
              onClick={() => addPlayerToPitch(_id)}
            >
              <div>
                <span>{web_name}</span>
                <span>{plTeam.short_name}</span>
              </div>
              <span>{form}</span>
              <span>{now_cost}</span>
            </div>
          )
        )}
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
