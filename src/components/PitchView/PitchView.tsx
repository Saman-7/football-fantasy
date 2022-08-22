import styled from "styled-components"

const PitchViewContainer = styled.div`
  width: 131px;
  height: 30px;
  background: #ffffff;
  border-radius: 4px;
`

const PitchViewText = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #3d195b;
`

const PitchView = () => {
  return (
    <PitchViewContainer>
      <PitchViewText>شماتیک ترکیب</PitchViewText>
    </PitchViewContainer>
  )
}

export default PitchView
