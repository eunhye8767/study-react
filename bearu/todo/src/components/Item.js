import { useState } from "react";

export default function Item({item: i}) {
  const [item, setItem] = useState(i);
  return (
    <tr>
      <td><input type="checkbox" checked={item.status === "done" ? true : false} /></td>
      <td>{i.task}</td>
      <td>{i.due}</td>
      <td></td>
    </tr>
  );
};