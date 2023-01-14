import styled from "styled-components"

export const LatesEventsContainer = styled.div`
  height: 58.5rem;
  width: 41.875rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: auto;

  & .title {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-bottom: 1.25rem;
    & h1 {
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 2.375rem;
      color: #3d195b;
    }
  }
`

export const BoxEventContent = styled.div`
  height: 11.25rem;
  width: 40rem;
  border-radius: 0.5rem;
  background-color: #fbfbfb;
  margin: 0.75rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.625rem;
  box-sizing: border-box;
`

export const PictureEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 5rem;
    width: 5rem;
    border-radius: 15.625rem;
  }

  & span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
    margin-top: 0.1875rem;
  }

  & .heart-like-svg {
    margin-top: 0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    &.isLike path {
      fill: red;
    }
  }
`

export const MainBoxEvent = styled.div`
  height: 10rem;
  width: 30.25rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 0.9375rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const HeadBoxEvent = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
  }

  & .rating {
    width: 4.125rem;
    height: 1.875rem;
    background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
    border-radius: 0.25rem;
    margin-right: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.5625rem;
      color: #3d195b;
      margin-right: 0.125rem;
    }
  }

  & .star-svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const ChangesPlayerContent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
    margin: 0.3125rem 0rem;
  }

  & .items-content {
    display: flex;
    & .item {
      margin-left: 0.875rem;
    }
  }
`

export const ItemEvent = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3125rem 0rem;

  & span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
    margin-right: 0.1875rem;
  }

  & .arrow-svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const MatchWeek = styled.div`
  width: 1.875rem;
  height: 6.625rem;
  background: rgba(61, 25, 91, 0.06);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0.625rem;
  top: 50%;
  transform: translateY(-50%);

  & span {
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
    transform: rotate(-90deg);
  }
`
