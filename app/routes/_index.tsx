import type { MetaFunction } from "@remix-run/node";
import TodoList from "../component/TodoList"
import styles from '../styles/task.css';
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};
export const meta: MetaFunction = () => {
  return [
    { title: "MyTodoList App" },
    { name: "description", content: "Welcome to Todo's List App!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <TodoList/>
    </div>
  );
}
