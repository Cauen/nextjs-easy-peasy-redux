import { store } from '../store/index'

export function getState() {
  return console.log({ store: store.getState().todoCount.count })
}