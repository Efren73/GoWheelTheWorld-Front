import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import MainScreenTO from "./mainScreenTO.page"

test("renders learn react link", () => {
  render(<MainScreenTO />)
})