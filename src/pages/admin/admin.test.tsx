import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Admin from "./admin.page"

test("renders learn react link", () => {
  render(<Admin />)
})