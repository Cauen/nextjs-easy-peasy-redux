import { Action, action, Thunk, thunk, actionOn, ActionOn } from "easy-peasy";
import { StoreModel } from ".";
import todosModel, { TodosModel } from "./todos";

export interface NotificationModel {
  msg: string;
  set: Action<NotificationModel, string>;
  onAddTodo: ActionOn<NotificationModel, StoreModel>;
}

const notification: NotificationModel = {
  msg: "",
  set: action((state, payload) => {
    state.msg = payload;
  }),
  onAddTodo: actionOn(
    // targetResolver:
    (actions, storeActions) => storeActions.todos.add,
    // handler:
    (state, target) => {
      console.log({ ata: 'po', state, target })
      state.msg = `Added a todo: ${target.payload}`
    })
};

export default notification;
