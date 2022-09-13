import create from "zustand"

interface MainPageState {
  budget: number
  setBudget: (budget: number) => void

  picks: Array<any>
  setPicks: (picks: Array<any>) => void

  filter: number
  setFilter: (filter: number) => void

  position: number | undefined
  setPisition: (position: number) => void
}

const useMainPageStore = create<MainPageState>((set) => ({
  budget: 0,
  setBudget: (budget) => set((state) => ({ ...state, budget })),

  picks: [],
  setPicks: (picks) => set((state) => ({ ...state, picks })),

  filter: 0,
  setFilter: (filter) => set((state) => ({ ...state, filter })),

  position: undefined,
  setPisition: (position) => set((state) => ({ ...state, position })),
}))

export default useMainPageStore
