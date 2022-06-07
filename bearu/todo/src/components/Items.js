import Item from "./Item";

export default function Items() {
  let item = { status: "todo", task: "커피마시기", due: "20220331"};
  
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
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
      </tbody>
    </table>
  );
};