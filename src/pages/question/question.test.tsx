import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Question from "./question.page"

test("renders learn react link", () => {
  render(<Question />)
})