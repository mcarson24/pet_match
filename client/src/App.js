// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Profile from './components/profile';
import Mission from './components/mission';
import Pet from './components/pet';
import Nav from './components/nav';
import Donate from './components/donate';
import Login from './components/login';
import SignUp from './components/signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
<ApolloProvider client={client}>
<Router>
     <React.StrictMode>
       <Nav />
      
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/donate" element={<Donate />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/ourmission" element={<Mission />} />
        <Route path="/pets" element={<Pet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     </React.StrictMode>
   </Router>
</ApolloProvider>
  
    


    </>

    
  );
}

export default App;
