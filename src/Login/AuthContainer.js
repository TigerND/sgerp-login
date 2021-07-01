import * as React from "react";

import LoginPage from "./LoginPage";

import AuthContext from "./AuthContext";

export default ({ children }) => {
  const [headers, setHeaders] = React.useState();

  if (headers) {
    return (
      <AuthContext.Provider value={headers}>
        {children}
      </AuthContext.Provider>
    );
  }

  return <LoginPage setHeaders={setHeaders} />;
};
