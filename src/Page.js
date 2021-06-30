import useAuthContext from "./Login/useAuthContext";

export default function Page() {
  const [auth] = useAuthContext();

  return (
    <div className="App">
      <h1>Logged in!</h1>
      <p>{auth}</p>
    </div>
  );
}
