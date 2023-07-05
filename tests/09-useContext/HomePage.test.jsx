import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";
describe("<HomePage />", () => {
  const user = {
    id: 1,
    name: "Sara",
    email: "sara@google.com",
  };
  test("should show component without any user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    expect(screen.getByLabelText("pre").innerHTML).toBe("null");
  });
  test("should show component WITH user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    expect(screen.getByLabelText("pre").innerHTML).toContain(user.name);
  });
});
