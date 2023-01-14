import styled, { css } from "styled-components"

export const YourFriendsContainer = styled.div`
  height: 54.875rem;
  width: 23.3125rem;
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`

export const YourFriendsTopContainer = styled.div`
  width: 100%;
  height: 3.125rem;
  background: #3d195b;
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    text-align: center;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #ffffff;
  }
`

export const YourFriendsBottomContainer = styled.div`
  width: 100%;
  height: 51.75rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`

export const FilterContainer = styled.div`
  margin-top: 1.6875rem;
  display: flex;
  justify-content: space-evenly;
`

interface FilterProps {
  selected: boolean
}

export const Filter = styled.button<FilterProps>`
  width: 9.25rem;
  height: 1.875rem;
  font-family: Vazirmatn;
  font-size: 0.75rem;
  text-align: center;
  background: #ffffff;

  ${(props) =>
    props.selected
      ? css`
          background: linear-gradient(
            269.48deg,
            #04f5ec -30.14%,
            #03fbb8 109.7%
          );
          border: transparent;
          border-radius: 0.25rem;
          font-family: "Vazirmatn";
          font-weight: 800;
          color: #3d195b;
        `
      : css`
          border: 0.0625rem solid;
          border-image-source: linear-gradient(
            269.48deg,
            #04f5ec -30.14%,
            #03fbb8 109.7%
          );
          border-image-slice: 1;
          font-weight: 500;
          color: #3d195b;
        `}
`

export const SearchBarContainer = styled.div`
  width: 20.1875rem;
  height: 2.5rem;
  margin-top: 1.1875rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 0.0625rem solid #e4e4e4;

  & input {
    border: transparent;
    width: 100%;
    outline: none;
    font-family: Vazirmatn;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.1875rem;
    letter-spacing: 0em;
    text-align: right;
    color: rgba(61, 25, 91, 1);
  }

  & input::placeholder {
    font-family: Vazirmatn;
    font-size: 0.875rem;
    font-weight: 300;
    text-align: right;
  }

  & .search-svg {
    margin-right: 1.25rem;
    margin-left: 0.9375rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const FollowersContainer = styled.div`
  box-sizing: border-box;
  width: 20.1875rem;
  height: 3.125rem;
  margin-top: 0.9375rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #efefef;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  & span {
    margin-right: 0.9375rem;
    font-size: 0.75rem;
    color: #3d195b;
  }

  & .profile-img {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ViewProfileButton = styled.button`
  box-sizing: border-box;
  width: 4.375rem;
  height: 1.875rem;
  background: #ffffff;
  border: 0.0625rem solid #e8e8e8;
  border-radius: 0.25rem;
  font-family: vazirmatn;
  font-weight: 300;
  font-size: 0.75rem;
  color: #555555;
`

export const FollowProfileButton = styled.button`
  box-sizing: border-box;
  width: 4.375rem;
  height: 1.875rem;
  background: #ffffff;
  border: 0.0625rem solid #05f1ff;
  border-radius: 0.25rem;
  font-family: "Vazirmatn";
  font-weight: 500;
  font-size: 0.75rem;
  color: #05d6e2;
  text-decoration: dotted;

  @media (max-width: 960px) {
    width: 5.5rem;
  }
`

export const FollowingsContainer = styled.div`
  box-sizing: border-box;
  width: 20.1875rem;
  height: 3.125rem;
  margin-top: 0.9375rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #efefef;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  & span {
    margin-right: 0.9375rem;
    font-size: 0.75rem;
    color: #3d195b;
  }

  & .profile-img {
    width: 2.5rem;
    height: 2.5rem;
  }
`
