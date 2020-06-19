import React from "react";
import { create } from "react-test-renderer";
import Button from '../components/Button'

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})