import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { MdDone } from "react-icons/md";

const Task = ({ index, ele, id }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  // console.log(id)

  return (
    <Draggable draggableId={ele.id.toString()} index={index}>
      {(provided, snapshot) => (
        <Box
          className="Tasks"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          children={ele.description}
        ></Box>
      )}
    </Draggable>
  );
};

export default Task;
