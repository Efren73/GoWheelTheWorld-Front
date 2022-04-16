import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Equipment from "./equipment.component"

test("renders learn react link", () => {
  render(<Equipment />)
})