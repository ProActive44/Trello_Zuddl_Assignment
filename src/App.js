import "./App.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Board from "./Pages/Board";
import { useState } from "react";

function App() {
  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // let add;
    // let active = todos;
    // let complete = CompletedTodos;

    // // Source Logic
    if (source.droppableId === "resourcesList") {
      //   add = active[source.index];
      //   active.splice(source.index, 1);
    } else if (source.droppableId === "todoList") {
    } else if (source.droppableId === "doingList") {
    } else {
      //   add = complete[source.index];
      //   complete.splice(source.index, 1);
    }

    // // Destination Logic
    if (destination.droppableId === "resourcesList") {
      //   active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "todoList") {
    } else if (destination.droppableId === "doingList") {
    } else {
      //   complete.splice(destination.index, 0, add);
    }

    // setCompletedTodos(complete);
    // setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Board />
      </div>
    </DragDropContext>
  );
}

export default App;
