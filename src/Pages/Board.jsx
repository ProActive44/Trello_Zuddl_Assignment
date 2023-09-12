import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Components/Task";
import { Droppable } from "react-beautiful-dnd";

const Board = () => {
  const [selectedBoard, setSelectedBoard] = useState("board1");
  const dispatch = useDispatch();

  let data = useSelector((store) => store.data[0]);
  console.log(data);

  useEffect(() => {
    dispatch(getData(selectedBoard));
  }, []);

  return (
    <Box className="board">
      <Box w="100%" textAlign="left">
        <Text as="b" fontSize="3xl">
          {data?.name}
        </Text>
      </Box>

      <Flex className="flex">
        <Droppable droppableId="resourcesList">
          {(provided, snapshot) => (
            <Box
              className="stages"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Text as="b" fontSize="2xl">
                Resources
              </Text>
              {data?.resources.map((ele, index) => {
                return <Task key={index} index={index} ele={ele} id={"resourcesList"}/>;
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Droppable droppableId="todoList">
          {(provided, snapshot) => (
            <Box
              className="stages"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Text as="b" fontSize="2xl">
                To Do
              </Text>
              {data?.todo.map((ele, index) => {
                return <Task key={index} index={index} ele={ele} id={"todoList"}/>;
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>

        <Droppable droppableId="doingList">
          {(provided, snapshot) => (
            <Box
              className="stages"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Text as="b" fontSize="2xl">
                Doing
              </Text>
              {data?.doing.map((ele, index) => {
                return <Task key={index} index={index} ele={ele} id={"doingList"}/>;
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Droppable droppableId="doneList">
          {(provided, snapshot) => (
            <Box
              className="stages"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Text as="b" fontSize="2xl">
                Done
              </Text>
              {data?.done.map((ele, index) => {
                return <Task key={index} index={index} ele={ele} id={'doneList'}/>;
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Flex>
    </Box>
  );
};

export default Board;
