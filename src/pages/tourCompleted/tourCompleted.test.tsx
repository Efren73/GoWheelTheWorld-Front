import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import TourCompleted from "./tourCompleted.page"

test("renders learn react link", () => {
  render(<TourCompleted />)
})