import * as React from "react";
import AuthContext from "./AuthContext";

export default () => {
  const auth = React.useContext(AuthContext);
  return [auth];
};
