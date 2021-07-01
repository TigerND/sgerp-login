import "./styles.css";

import config from './config';

import withBaseUI from "./BaseUI/withBaseUI";
import withAuth from "./Login/withAuth";
import useAuth from "./Login/useAuth";

const App = () => {
  const [auth] = useAuth();

  return (
    <div classN ame="App">
      <h1>Logged in!</h1>
      <p>{auth}</p>
    </div>
  );
};

export default withBaseUI(config.ui)(withAuth(config.api)(App));
