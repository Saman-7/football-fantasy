import { CompositionContainer } from "./Composition.styled"

const playerFormat = [
  "4 4 2",
  "4 3 3",
  "4 5 1",
  "3 5 2",
  "5 3 2",
  "3 4 3",
  "5 4 1",
  "6 3 1",
]

interface TypeCompositionProps {
  setPlayerFormat: React.Dispatch<React.SetStateAction<Array<number>>>
}

const Composition = (props: TypeCompositionProps) => {
  const changeFormat: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const arrayFormat = e.target.value.split(" ").map((f) => parseInt(f))
    props.setPlayerFormat(arrayFormat)
  }

  return (
    <CompositionContainer onChange={changeFormat}>
      {playerFormat.map((format, index) => (
        <option key={index} value={format}>
          {format}
        </option>
      ))}
    </CompositionContainer>
  )
}

export default Composition
