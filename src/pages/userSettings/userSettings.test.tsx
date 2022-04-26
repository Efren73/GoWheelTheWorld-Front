import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import UserSettings from "./userSettings.page"

test("renders learn react link", () => {
  render(<UserSettings />)
})