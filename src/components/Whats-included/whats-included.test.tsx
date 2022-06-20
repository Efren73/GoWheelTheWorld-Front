import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import WhatsIncluded from "./whats-included.component"

test("renders learn react link", () => {
  render(<WhatsIncluded />)
})