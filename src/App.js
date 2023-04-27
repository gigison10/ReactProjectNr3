import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-up/sign-up.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  function Shop() {
    return <h1>I'm the shop </h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
