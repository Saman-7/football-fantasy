import { Content, Dote, LoadingContainer } from "./LoadingMain.styled"

const dotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Loading = () => {
  return (
    <LoadingContainer>
      <Content>
        {dotes.map((d) => (
          <Dote key={d} dote={d}></Dote>
        ))}
      </Content>
    </LoadingContainer>
  )
}

export default Loading
