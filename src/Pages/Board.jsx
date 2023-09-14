import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Components/Task";
import { Droppable } from "react-beautiful-dnd";
import Cards from "../Components/Cards";

const Board = ({data, boardIdx}) => {

  return (
    <Box className="board">
      <Box w="100%" textAlign="left">
        <Text as="b" fontSize="3xl">
          {/* {data?.name} */}
        </Text>
      </Box>

      <Flex className="flex">
        <Cards data={data?.resources} drpId='resourcesList' name="resources" boardIdx={boardIdx}/>
        <Cards data={data?.todo} drpId='todoList' name="todo" boardIdx={boardIdx}/>
        <Cards data={data?.doing} drpId='doingList' name="doing" boardIdx={boardIdx}/>
        <Cards data={data?.done} drpId='doneList' name="done" boardIdx={boardIdx}/>
      </Flex> 
    </Box>
  );
};

export default Board;
