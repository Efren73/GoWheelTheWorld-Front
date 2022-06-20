import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import LateralMenu from "./lateral-menu.component";

test("menu component", () => {
  render(<LateralMenu />)
})
