import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Buy from "./components/Pages/Buy/Buy";
import Rent from "./components/Pages/Rent/Rent";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Property from "./components/Pages/Property/Property";

const client = new ApolloClient({
  uri:"http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
    <div className="App">
      
      <Routes>
        <Route path="*" element={
          <main>
            <Navbar />
            <h1 style={{marginTop: "3rem", color: "rgb(26,55,58"}}>
              404 NOT FOUND
            </h1>
          </main>
        }
        />
        <Route path="/" element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="/property">
          <Route path=":propertyId" element={<Property />} />
        </Route>
      </Routes>
    </div>
    </ApolloProvider>
    
  );
  
  
}

export default App;
