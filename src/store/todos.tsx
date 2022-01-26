import { Action, action, actionOn, ActionOn, thunk, Thunk, ThunkOn, thunkOn } from 'easy-peasy';
import { StoreModel, store } from '.';
import { NotificationModel } from './notification'

export interface TodosModel {
  items: string[];
  add: Action<TodosModel, string>;
  addLazy: Thunk<TodosModel, string>;
  onAddTodo: ActionOn<TodosModel, StoreModel>;
  onAddTodoLazy: ThunkOn<TodosModel, StoreModel>;
}

const todos: TodosModel = {
  items: [],
  add: action((state, payload) => {
    state.items.push(payload);
  }),
  addLazy: thunk(async (actions, payload) => {
    // const user = await loginService(payload);
    actions.add(payload)
  }),
  onAddTodo: actionOn(
    // targetResolver:
    (actions) => actions.add,
    // handler:
    (state, target) => {
      console.log({ target })
        // (() => {
        //   store.getActions().notification.set('a')
        // })()
      // state.items.push(`Added a todo: ${target.payload}`)
      // store.getState().notification.msg
    }),
  onAddTodoLazy: thunkOn(
    // targetResolver:
    actions => actions.addLazy,
    // handler:
    async (actions, target) => {
      actions.add('onAddTodoLazy')
    }
  )
};

export default todos;
