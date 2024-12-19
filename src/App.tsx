import "./styles.css";
import { ExpandableList } from "./Toggleitem";
import { ToggleList } from "./ToggleList";

const data = [
  {
    id: 1,
    name: "Item 1",
    children: [
      { id: 4, name: "Item 1.1" },
      { id: 5, name: "Item 1.2", children: [{ id: 6, name: "Item 1.2.1" }] },
    ],
  },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3", children: [{ id: 7, name: "Item 3.1" }] },
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToggleList data={data} />
    </div>
  );
}
