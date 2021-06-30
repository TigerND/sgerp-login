import "./styles.css";

import withBaseUI from "./BaseUI/withBaseUI";
import withAuth from "./Login/withAuth";
import useAuth from "./Login/useAuth";

const config = { api: "https://sgerp-stage.d.gcdev.swatrider.com" };

const App = () => {
  const auth = useAuth();

  return (
    <div className="App">
      <h1>Logged in!</h1>
      <p>{auth}</p>
    </div>
  );
};

export default withBaseUI(config.ui)(withAuth(config.api)(App));
