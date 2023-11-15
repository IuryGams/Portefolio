import Header from "components/Header";
import MobileProvider from "context/mobileMenu";

function App() {
  return (
    <MobileProvider>
      <div className="App">
        <Header />
      </div>
    </MobileProvider>
  );
}

export default App;
