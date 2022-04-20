import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import ChildPolicy from "./childpolicy.component"

test("renders learn react link", () => {
  render(<ChildPolicy />)
})