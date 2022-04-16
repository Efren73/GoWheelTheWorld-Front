import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Transportation from "."

test("renders learn react link", () => {
  render(<Transportation />)
})