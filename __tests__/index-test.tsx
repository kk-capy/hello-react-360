import "react-native";
import "react-360";
import React from "react";
import Index from "../index.tsx";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Index />);
});
