import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ToDo from "./ToDo";

function TodoList(props) {
  const { task, handleToggle } = props;
  //   console.log("how do i pass this in?", props.task);
  useEffect(() => {}, [task]);
  return (
    <div>
      {task.map((todo, i) => {
        return <ToDo key={i} task={todo} handleToggle={handleToggle} />;
      })}
    </div>
  );
}

// class TodoList extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.task.map((item) => {
//           return (
//             <ToDo
//               handleToggle={this.props.handleToggle}
//               key={item.id}
//               item={item}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default TodoList;
