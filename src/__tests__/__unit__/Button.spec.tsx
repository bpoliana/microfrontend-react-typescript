import {create} from 'react-test-renderer';
import Button from '../../components/Button';
import React from 'react';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />)
    expect(button).toBeInTheDOM();
  })
})
