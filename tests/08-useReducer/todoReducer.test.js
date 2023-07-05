import { act } from "react-dom/test-utils";
import { todoReducer } from "../../src/08-useReducer/todoReducer";
describe("tests in todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("should return initialState by default", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("should add a new todo", () => {
    const addAction = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Demo todo 2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, addAction);
    expect(newState.length).toBe(2);
    expect(newState).toContain(addAction.payload);
    expect(newState).toEqual([...initialState, addAction.payload]);
  });
  test("should remove todo", () => {
    const removeAction = {
      type: "[TODO] Remove Todo",
      payload: initialState[0],
    };
    const newState = todoReducer(initialState, removeAction);
    expect(newState.length).toBe(0);
  });
  test("should toggle todo", () => {
    const toggleAction = {
      type: "[TODO] Toggle Todo",
      payload: initialState[0],
    };
    const newState = todoReducer(initialState, toggleAction);
    expect(newState[0].done).toBe(true);
  });
});
