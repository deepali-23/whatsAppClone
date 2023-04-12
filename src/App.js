import "./App.css";
import Messenger from "./components/messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = "715942539393-uto8o2ea8pma2bcm0m51ut5kgfn89cgv.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
