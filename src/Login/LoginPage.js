import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

export default ({ setHeaders }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isLoginEnabled = username && password;

  return (
    <React.Fragment>
      <FormControl label={() => "Username"}>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          clearable
        />
      </FormControl>
      <FormControl label={() => "Password"}>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
      </FormControl>
      <Button onClick={() => {}} disabled={!isLoginEnabled}>
        Login
      </Button>
    </React.Fragment>
  );
};
