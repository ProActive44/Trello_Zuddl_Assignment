import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Cards = ({data, drpId, name}) => {
    const [show, setShow] = useState(false)
    console.log(data)
    return (
        <Droppable droppableId={drpId}>
          {(provided, snapshot) => (
            <Box
              className="stages"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
                <Flex justify='space-between' p={'0 5px'}>
              <Text as="b" fontSize="2xl">
                {name}
              </Text>
                 <Text as={'h1'} fontSize={'xl'}>...</Text>
                </Flex>
              {data?.map((ele, index) => {
                return <Task key={index} index={index} ele={ele} id={drpId}/>;
              })}
              {provided.placeholder}
              <Box className={`addCard ${show? 'hide':'show'}`} onClick={()=>setShow(!show)} >+ Add a card </Box>
              <Input type="text" className={`inputCard ${show? 'show':'hide'}`} />
              <Button display={`${show? 'block' : 'none'}`} onClick={()=>setShow(!show)}>ADD</Button><br/>
            </Box>
          )}
        </Droppable>
    );
};

export default Cards;