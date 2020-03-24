import React from "react";
import { render } from "@testing-library/react";
import GenTest from "./gen-test.component";

it("renders without failing", () => {
  render(<GenTest />);
});
