// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance, Location } from "react-360-web";

export function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });
  // const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  // leftPanel.setAngle(-0.6, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("hello_react360", {
      // r360.createRoot("model_view", {
      /* initial props */
    }),
    // new Location([0, -2, -10])
    // leftPanel
    r360.getDefaultSurface()
  );
  // r360.renderToSurface(
  //   r360.createRoot("model_view", {
  //     /* initial props */
  //   }),
  //   new Location([0, -2, -10])
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
