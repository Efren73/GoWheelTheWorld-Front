import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import Faqs from "./faqs.component"

test("renders learn react link", () => {
  render(<Faqs />)
})