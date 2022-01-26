import todos, { TodosModel } from './todos';
import notification, { NotificationModel } from './notification';
import { StoreProvider, createStore } from 'easy-peasy';

export interface StoreModel {
  todos: TodosModel;
  notification: NotificationModel;
}

const model: StoreModel = {
  todos,
  notification,
};

export const store = createStore(model);

export const Provider: React.FC = ({ children }) => <StoreProvider store={store}>{children}</StoreProvider>

export default model;
