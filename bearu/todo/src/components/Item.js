import { useState } from "react";

export default function Item({item: i}) {
  const [item, setItem] = useState(i);

  const toggle = () => {
    fetch(`http://localhost:3001/items/${item.id}`, {
        // 데이터를 업데이트 하겠다는 의미 => PUT
        method: "PUT",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          ...item,
          status: item.status === "done" ? "todo" : "done"
        })
      }).then(res => {
        if (res.ok) {
          setItem({
            ...item,
            status: item.status === "done" ? "todo" : "done"
          })
        }
      })
  }

  // 삭제 (method => DELETE)
  const deketeItem = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/items/${item.id}`, {
        method: "DELETE"
      }).then(res => {
        if (res.ok) {
          setItem({id: 0})
        }
      })
    }
  }

  if(item.id === 0) return null;

  return (
    <tr>
      <td><input type="checkbox" onClick={toggle} checked={item.status === "done" ? true : false} /></td>
      <td>{i.task}</td>
      <td>{i.due}</td>
      <td><button onClick={deketeItem}>삭제</button></td>
    </tr>
  );
};