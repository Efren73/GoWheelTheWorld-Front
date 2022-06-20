import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Summary from "."

test("renders learn react link", () => {
  render(<Summary />)
})