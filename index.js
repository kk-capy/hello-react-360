import { AppRegistry } from "react-360";
import App from "./src/app";
import ModelView from "./src/ModelView";
import Store from "./src/Store";

Store.initialize("AIzaSyAzqnCxJgcTF6zGEv6er0rJme7Cg0x7zqg");
AppRegistry.registerComponent("hello_react360", () => App);
AppRegistry.registerComponent("model_view", () => ModelView);
