import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Description from "./description.component"

test("renders learn react link", () => {
  render(<Description />)
})