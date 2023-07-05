import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";
import { render, screen } from "@testing-library/react";
describe("<MainApp />", () => {
  test('should show HomePAge when route is "/"', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test('should show LoginPage when route is "/"', () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
