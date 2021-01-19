import { Typography } from "@material-ui/core";
import React from "react";

function ToDo(props) {
  const { task, handleToggle } = props;

  const handleClick = () => {
    handleToggle(task.id);
  };

  return (
    <div>
      {/* <Typography
        className={task.completed ? " completed" : ""}
        onClick={handleClick}
        variant="h3"
      > */}
      <h3 className={task.completed ? " completed" : ""} onClick={handleClick}>
        {task.item}
      </h3>
      {/* </Typography> */}
    </div>
  );
}

// export default class ToDo extends React.Component {
//   handleClick = () => {
//     this.props.handleToggle(this.props.item.id);
//   };

//   render() {
//     return (
//       <div>
//         <div
//           onClick={this.handleClick}
//           className={this.props.item.completed ? "completed" : ""}
//         >
//           <p>{this.props.item.item}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default ToDo;
