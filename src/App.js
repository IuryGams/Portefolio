import Header from "components/Header";
import Presentation from "components/Presentation";
import MobileProvider from "context/mobileMenu";

function App() {
  return (
    <MobileProvider>
      <div className="App">
        <Header />
        <Presentation />
      </div>
    </MobileProvider>
  );
}

export default App;
