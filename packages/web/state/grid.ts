import { atom } from 'recoil'

interface GridState {
  selectedBlock: number[]
}

export const gridState = atom<GridState>({
  key: 'gridState',
  default: {
    selectedBlock: [],
  },
})
