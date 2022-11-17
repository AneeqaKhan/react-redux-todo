import React from "react";
import Todo from "./Todo";
import renderer from "react-test-renderer";
import expect from "expect";

it("matches the snapshot", () => {
  const tree = renderer.create(<Todo />).toJSON();
  expect(tree).toMatchSnapshot();
});
