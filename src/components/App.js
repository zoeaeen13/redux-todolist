import { Form, FormButtons } from "./FormItems";
import { Wrapper, TodosWrapper } from "./Wrappers";
import { TodoItem } from "./Todoitem";
import { useState } from "react";
import { TypeContext } from "../contexts";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/selectors";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearFinishedTodos,
} from "../redux/actions";

function App() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const [selectedType, setSelectType] = useState("All");
  const [value, setValue] = useState("");

  // handle input change
  function handleInputChnage(e) {
    setValue(e.target.value);
  }

  // add todo
  function handleAddTodo(e) {
    e.preventDefault();
    if (value !== "") {
      dispatch(addTodo(value, false, selectedType !== "Completed"));
      setValue("");
    }
  }

  // delete todo
  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  // toggle todo
  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  // edit todo
  function handlgeEditTodo(e) {
    dispatch(editTodo(e.target.id, e.target.value));
  }

  // clear finished todos
  function handleClearTodos() {
    dispatch(clearFinishedTodos());
  }

  // set type to show
  // function handleSelectType(e) {
  //   const mode = e.target.id;
  //   setSelectType(mode);
  //   switch (mode) {
  //     case "Completed":
  //       setTodos(
  //         todos.map((todo) => {
  //           if (todo.isDone) {
  //             return {
  //               ...todo,
  //               isShowed: true,
  //             };
  //           }
  //           return {
  //             ...todo,
  //             isShowed: false,
  //           };
  //         })
  //       );
  //       break;
  //     case "Incomplete":
  //       setTodos(
  //         todos.map((todo) => {
  //           if (!todo.isDone) {
  //             return {
  //               ...todo,
  //               isShowed: true,
  //             };
  //           }
  //           return {
  //             ...todo,
  //             isShowed: false,
  //           };
  //         })
  //       );
  //       break;
  //     default:
  //       setTodos(
  //         todos.map((todo) => {
  //           return {
  //             ...todo,
  //             isShowed: true,
  //           };
  //         })
  //       );
  //       break;
  //   }
  // }

  return (
    <TypeContext.Provider value={{ selectedType }}>
      <div className="App">
        <Wrapper>
          <Form
            value={value}
            handleInputChnage={handleInputChnage}
            handleAddTodo={handleAddTodo}
          />
          <FormButtons
            // handleSelectType={handleSelectType}
            handleClearTodos={handleClearTodos}
          />
          <TodosWrapper>
            {todos.map((todo) => {
              if (todo.isShowed) {
                return (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    handlgeEditTodo={handlgeEditTodo}
                    handleToggleTodo={handleToggleTodo}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              }
              return null;
            })}
          </TodosWrapper>
        </Wrapper>
      </div>
    </TypeContext.Provider>
  );
}

export default App;
