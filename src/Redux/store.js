import { legacy_createStore as createStore } from "react-redux";
import reducer from "./reducer";

let store = createStore(reducer);

export { store };
