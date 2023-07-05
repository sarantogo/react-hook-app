import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

const initialForm = {
  name: "Sara",
  email: "sara@google.com",
};

describe("pruebas en useForm hook", () => {
  test("should return default info", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function),
    });
  });
  test("should change name input on Form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: "Lola" } });
    });
    expect(result.current.name).toEqual("Lola");
    expect(result.current.formState.name).toEqual("Lola");
  });
  test("should reset Form to initial state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onReset } = result.current;
    act(() => {
      onInputChange({ target: { name: "email", value: "lola@google.com" } });
      onReset();
    });
    expect(result.current.email).toEqual(initialForm.email);
    expect(result.current.formState.email).toEqual(initialForm.email);
  });
});
