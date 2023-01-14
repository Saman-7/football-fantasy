import styled from "styled-components"

export const ListPlayerContainer = styled.div`
  width: 54.3125rem;
  height: 48rem;
  display: flex;
  justify-content: space-between;
`

export const Sidebar = styled.div`
  width: 17.125rem;
  height: 100%;
  background: #3d195b;
  border-radius: 1rem 0rem 0rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .uniform-img {
    height: 15.5625rem;
    width: 12.625rem;
    margin-top: 4.0625rem;
  }

  & .league-svg {
    height: 3.875rem;
    width: 9.3125rem;
  }
  & .stripes-svg {
    width: 17.0625rem;
    height: 21rem;
  }
`

export const ListContainer = styled.div`
  width: 100%;
  padding: 1.75rem;
`

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.9375rem;

  & .title {
    background: #3d195b;
    border-radius: 0.25rem;
    height: 1.5625rem;
    width: 9.375rem;
    padding: 0rem 0.625rem;
    display: flex;
    justify-content: start;
    align-items: center;

    & h3 {
      font-weight: 800;
      font-size: 0.875rem;
      line-height: 1.375rem;
      color: #00ff87;
    }
  }

  @media (max-width: 480px) {
    & .title {
      width: 9.5rem;
      height: 1.6rem;
      & h3 {
        font-size: 1.1rem;
      }
    }
  }
`

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 0.0625rem solid #efefef;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;

    & span {
      font-weight: 300;
      font-size: 0.75rem;
      line-height: 1.1875rem;
      color: #999999;
    }
  }

  @media (max-width: 480px) {
    & div span {
      font-size: 1rem;
    }
  }
`

export const RowList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  padding: 0.4375rem 0rem;
  border-bottom: 0.0625rem solid #efefef;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;

    &.name-player {
      padding-right: 0.9375rem;
      justify-content: start;
    }

    & span {
      font-size: 0.75rem;
      line-height: 1.1875rem;
      color: #3d195b;
    }
  }

  @media (max-width: 480px) {
    & div span {
      font-size: 1.1rem;
    }
  }
`
