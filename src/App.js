import MobileProvider from "context/mobileMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import BasePage from "pages/BasePage";
import MyProjects from "pages/MyProjects";

function App() {
  return (
    <MobileProvider>
      <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={ <BasePage />} >
              <Route index element={ <Home />} />
              <Route path="/myProjects" element={ <MyProjects />} />
            </Route>
        </Routes>
          
      </div>
      </BrowserRouter>
    </MobileProvider>
  );
}

export default App;
