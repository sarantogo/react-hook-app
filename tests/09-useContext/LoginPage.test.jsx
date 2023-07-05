import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";
describe("<LoginPage />", () => {
  test("should show component WITHOUT user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    expect(screen.getByLabelText("pre").innerHTML).toBe("null");
  });

  test("should call setUser funciton when button is clicked", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const setUserButton = screen.getByRole("button", {
      name: "Establecer usuario",
    });
    fireEvent.click(setUserButton);

    expect(setUserMock).toHaveBeenCalled();
  });
});
