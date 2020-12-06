// action creator
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  ClEAR_FINISHED_TODOS,
} from "./actionTypes";

export function addTodo(content, isDone, isShowed) {
  return {
    type: ADD_TODO,
    payload: {
      content,
      isDone,
      isShowed,
    },
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId,
    },
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: todoId,
    },
  };
}

export function editTodo(todoId, newContent) {
  return {
    type: EDIT_TODO,
    payload: {
      id: todoId,
      newContent: newContent,
    },
  };
}

export function clearFinishedTodos() {
  return {
    type: ClEAR_FINISHED_TODOS,
  };
}

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
