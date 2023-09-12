import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Components/Task";
import { Droppable } from "react-beautiful-dnd";
import Cards from "../Components/Cards";

const Board = ({data}) => {


  return (
    <Box className="board">
      <Box w="100%" textAlign="left">
        <Text as="b" fontSize="3xl">
          {/* {data?.name} */}
        </Text>
      </Box>

      <Flex className="flex">
        <Cards data={data?.resources} drpId='resourcesList' name="Resources"/>
        <Cards data={data?.todo} drpId='todoList' name="Todos"/>
        <Cards data={data?.doing} drpId='doingList' name="Doing"/>
        <Cards data={data?.done} drpId='doneList' name="Done"/>
      </Flex>
    </Box>
  );
};

export default Board;
