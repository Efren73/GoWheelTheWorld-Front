import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import ProfileSettings from "./adminSummary.page"

test("renders learn react link", () => {
  render(<ProfileSettings />)
})