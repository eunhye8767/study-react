import { useEffect, useState } from "react";
import Item from "./Item";

export default function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((json_res) => setData(json_res));
  });
  let item = { status: "todo", task: "커피마시기", due: "20220331" };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Task</th>
          <th>Due</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </tbody>
    </table>
  );
}
