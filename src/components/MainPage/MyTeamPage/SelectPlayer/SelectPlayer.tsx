import { ReactComponent as SearchSVG } from "../../../../svg/search.svg"
import { ReactComponent as ArrowUpSVG } from "../../../../svg/arrow-up.svg"
import { ReactComponent as DoubleArrowLeftSVG } from "../../../../svg/double-arrow-left.svg"
import { ReactComponent as DoubleArrowrRightSVG } from "../../../../svg/double-arrow-right.svg"
import { ReactComponent as SingleArrowLeftSVG } from "../../../../svg/single-arrow-left.svg"
import { ReactComponent as SingleArrowRightSVG } from "../../../../svg/single-arrow-right.svg"
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
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"
import classNames from "classnames"
import useMainPageStore from "../../../../store"
import { filterStringToNumber } from "../../../../utils/filterStringToNumber"
import Loading from "../../../loading/AlternativeLoading/Loading"
import Warning from "../../../Warning/Warning"

const lanesPitch = ["All", "GK", "DEF", "MID", "ATT"]

const SelectPlayer = () => {
  const [search, setSearch] = useState("")
  const [pagePlayers, setPagePlayers] = useState<Array<any>>([])
  const [totalPlayer, setTotalPlayer] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isloadingpage, setIsLoadingPage] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const {
    filter,
    setFilter,
    position,
    setPicks,
    setBudget,
    picks,
    setRemainPlayer,
  } = useMainPageStore()

  const handleFilter = (lane: string) => {
    if (position === undefined) {
      setFilter(filterStringToNumber(lane))
    }
  }

  const handleChangePage = (num: number) => {
    if (!isloadingpage) {
      if (num === 0) setPage(1)
      else if (num === +1 && page < totalPage) setPage(page + 1)
      else if (num === -1 && page !== 1) setPage(page - 1)
      else if (num === totalPage) setPage(totalPage)
    }
  }

  const addPlayerToPitch = (_id: string) => {
    if (position !== undefined) {
      setIsLoading(true)

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
              const data = res.data.data.manager
              setPicks(data.teamId.picks)
              setBudget(data.budget)
              setRemainPlayer(res.data.data.nb)
              setIsLoading(false)
            })
            .catch((err) => {
              console.log(err)
              setIsLoading(false)
            })
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          if (err.response.status === 403)
            setError("شما نمیتوانید بیشتر از 3 بازیکن از یک تیم اضافه کنید !")
        })
    }
  }

  useEffect(() => {
    if (page !== 1) setPage(1)
  }, [filter])

  useEffect(() => {
    setIsLoadingPage(true)

    const token = JSON.parse(localStorage.getItem("token") || "{}")
    axios
      .get("http://178.216.248.37:8080/api/v1/players/search", {
        params: {
          page: page,
          limit: 14,
          filter: filter,
          web_name: search,
        },
        headers: {
          token: token,
        },
      })
      .then((res) => {
        const listPlayer = res.data.data
        if (listPlayer.length !== 0) {
          setTotalPlayer(res.data.total)
          setPagePlayers(listPlayer)
          setTotalPage(res.data.pages)
        }
        setIsLoadingPage(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoadingPage(false)
      })
  }, [search, filter, page, picks])

  return (
    <SelectPlayerContainer>
      {isLoading && <Loading />}
      {error && <Warning text={error} display={setError} />}

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
            className={classNames({
              active: filter === index,
              block: position !== undefined && filter !== index,
            })}
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

        {pagePlayers.map(
          ({ _id, web_name, plTeam, form, now_cost, generalId }) => (
            <div
              key={generalId}
              className={classNames("row-player", {
                active: position !== undefined,
              })}
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
        <DoubleArrowLeftSVG onClick={() => handleChangePage(totalPage)} />
        <SingleArrowLeftSVG onClick={() => handleChangePage(+1)} />
        <span>
          {`صفحه ${numberEnglishToPersian(page.toString())}
           از ${numberEnglishToPersian(totalPage.toString())}`}
        </span>
        <SingleArrowRightSVG onClick={() => handleChangePage(-1)} />
        <DoubleArrowrRightSVG onClick={() => handleChangePage(0)} />
      </ChangePage>
    </SelectPlayerContainer>
  )
}

export default SelectPlayer
