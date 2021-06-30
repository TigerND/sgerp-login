import AuthContainer from "./AuthContainer";

export default (options) => {
  return (Component) => {
    return (...props) => {
      return (
        <AuthContainer {...options}>
          <Component {...props} />
        </AuthContainer>
      );
    };
  };
};
