import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Login from "./login.page"

test("renders learn react link", () => {
  render(<Login />)
})