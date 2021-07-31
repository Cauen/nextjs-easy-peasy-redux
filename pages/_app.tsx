import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore, action, Action, StoreProvider } from "easy-peasy";

type Todo = { name: string };
export interface StoreModel {
  todos: Todo[];
  addTodo: Action<StoreModel, Todo>;
  clearTodos: Action<StoreModel>;
}
const store = createStore<StoreModel>({
  todos: [{ name: "Default" }],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  clearTodos: action((state) => {
    state.todos = [];
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
export default MyApp;
