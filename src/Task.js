import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import "./App.css"
const Task = ({item,index}) => {
  const {id,name} = item;
    return (
      <Draggable key={item.id} draggableId={item?.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task">
              {item.name} 
            </div>
        </div>
      )}
    </Draggable>
    );
};

export default Task;