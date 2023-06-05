import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        containerStyle={{
          fontSize: "1rem",
          fontFamily: "Merriweather Sans",
        }}
        reverseOrder={false}
      />
    </>
  );
};

export default App;
