import create from "zustand"

interface MainPageState {
  budget: number
  setBudget: (budget: number) => void

  picks: []
  setPicks: (picks: []) => void

  filter: number
  setFilter: (filter: number) => void
}

const useMainPageStore = create<MainPageState>((set) => ({
  budget: 0,
  setBudget: (budget) => set((state) => ({ ...state, budget })),

  picks: [],
  setPicks: (picks) => set((state) => ({ ...state, picks })),

  filter: 0,
  setFilter: (filter) => set((state) => ({ ...state, filter })),
}))

export default useMainPageStore
