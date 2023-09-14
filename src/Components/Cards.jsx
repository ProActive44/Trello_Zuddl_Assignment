import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { addNewData } from "../Redux/action";

const Cards = ({ data, drpId, name, boardIdx }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const addNew = () => {
    setShow(!show);
    dispatch(addNewData(state, name, boardIdx));
  };

  return (
    <Droppable droppableId={drpId}>
      {(provided, snapshot) => (
        <Box
          className="stages"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Flex justify="space-between" p={"0 5px"}>
            <Text as="b" fontSize="2xl">
              {name}
            </Text>
            <Text as={"h1"} fontSize={"xl"}>
              ...
            </Text>
          </Flex>
          {data?.map((ele, index) => {
            return <Task key={ele.id} index={index} ele={ele} id={drpId} />;
          })}
          {provided.placeholder}
          <Box
            className={`addCard ${show ? "hide" : "show"}`}
            onClick={() => setShow(!show)}
          >
            + Add a card{" "}
          </Box>
          <Input
            type="text"
            className={`inputCard ${show ? "show" : "hide"}`}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button display={`${show ? "block" : "none"}`} onClick={addNew}>
            ADD
          </Button>
          <br />
        </Box>
      )}
    </Droppable>
  );
};

export default Cards;
