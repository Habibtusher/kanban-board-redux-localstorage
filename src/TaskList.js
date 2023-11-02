import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import fetchTodo from "./redux/thunk/fetchTodo";
import updateStatus from "./redux/thunk/updateStatus";
import { changeStatus, loadTODo } from "./redux/todos/actions";
import Task from "./Task";
const TaskList = () => {
  const todos = useSelector((state) => state?.todos);


  const [columns, setColumns] = useState(todos);
  const dispatch = useDispatch()

  const onDragEnd = async (result, columns, setColumns) => {
 

    const destination = result.destination.droppableId;
    const source = result.source.droppableId;
    const todoId = result.draggableId;

    // dispatch(changeStatus(destination,todoId))
    dispatch(updateStatus(todoId,destination))
  };
  useEffect(() => {
    dispatch(fetchTodo)
    // setColumns(todos);
  },[]);
  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="tasks-div">
          <Droppable key="1" droppableId="1">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
                className="task-div"
              >
                <p className="task-title">Todo</p>
                <div className="task-content">
                  {" "}
                  {todos?.filter((e)=>e.progress === "todo")?.map((item, index) => (
                    <Task item={item} index={index} />
                  ))}
                </div>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable key="2" droppableId="2">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
                className="task-div"
              >
                <p className="task-title">In Progress</p>
                <div className="task-content">
                  {" "}
                  {todos?.filter((e)=>e.progress === "inprogress")?.map((item, index) => (
                    <Task item={item} index={index} />
                  ))}
                </div>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable key="3" droppableId="3">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
                className="task-div"
              >
                <p className="task-title">Done</p>
                <div className="task-content">
                  {" "}
                  {todos?.filter((e)=>e.progress === "done")?.map((item, index) => (
                    <Task item={item} index={index} />
                  ))}
                </div>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    md={{ span: 24 }}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 12 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className="task-div"
                  >
                    <p className="task-title">{column.title + columnId}</p>
                    <div className="task-content">
                      {" "}
                      {column.items?.map((item, index) => (
                        <Task item={item} index={index} />
                      ))}
                    </div>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })} */}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
