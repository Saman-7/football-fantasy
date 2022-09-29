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
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"
import classNames from "classnames"
import useMainPageStore from "../../../../store"
import { filterStringToNumber } from "../../../../utils/filterStringToNumber"
import Loading from "../../../loading/AlternativeLoading/Loading"
import Warning from "../../../Warning/Warning"
import useDebounce from "../../../../utils/useDebounce"
import axiosMain from "axios"
import { axios } from "../../../../api/axiosInstance"

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
    setPosition,
    setPicks,
    setBudget,
    picks,
    setRemainPlayer,
  } = useMainPageStore()

  const debounce = useDebounce(search, 400)

  const handleFilter = (lane: string) => {
    if (position === undefined) {
      setFilter(filterStringToNumber(lane))
      if (page !== 1) setPage(1)
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

      const localStorageToken = localStorage.getItem("token")
      let token = localStorageToken && JSON.parse(localStorageToken)

      axiosMain({
        method: "patch",
        url: "http://178.216.248.37:8080/api/v1/teams/add-player",
        data: {
          id: _id,
          index: position,
        },
        headers: {
          token,
        },
      })
        .then((_) => {
          axios
            .get("/api/v1/managers/dashboard")
            .then((res) => {
              const data = res.data.data.data.manager
              setPicks(data.teamId.picks)
              setBudget(data.budget)
              setRemainPlayer(res.data.data.data.nb)
              setIsLoading(false)
              setPosition(undefined)
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
    setIsLoadingPage(true)

    axios
      .get("/api/v1/players/search", {
        params: {
          page: page,
          limit: 14,
          filter: filter,
          web_name: debounce,
        },
      })
      .then((res) => {
        const data = res.data.data

        if (data.length !== 0) {
          setTotalPlayer(data.total)
          setPagePlayers(data.array)
          setTotalPage(data.pages)
        }
        setIsLoadingPage(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoadingPage(false)
      })
  }, [debounce, filter, page, picks])

  return (
    <SelectPlayerContainer
      className={classNames({ menu: position !== undefined })}
    >
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
          value={search}
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
            <ArrowUpSVG className="arrow-svg" />
          </span>
          <span className="header">
            قیمت
            <ArrowUpSVG className="arrow-svg" />
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
