# Easiest Way to Learn Context API

Welcome to the "Easiest Way to Learn Context API" guide! This README will walk you through the basics of the Context API in React, providing you with a clear understanding of how to use it in your applications.

## What is Context API?

The Context API is a feature in React that allows you to manage global state in your application without having to pass props down manually at every level. It’s especially useful for managing data that many components need access to, such as user authentication, themes, or any other shared state.

### Getting Started
1. Setup Your React Project

If you don’t already have a React project, you can set up a new one using Create React App:

```
npx create-react-app my-app
cd my-app
```

2. Create a Context

First, you need to create a context. This is done by using the createContext function.

File: context.js

```
import { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [name, setName] = useState('Sandesh');

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
```







3. Wrap Your Application with the Provider

To make the context available throughout your application, wrap your main component with the provider.

File: index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
4. Consume the Context in Components

Use the useContext hook to access the context in any component.

File: App.js
```
import React, { useContext } from 'react';
import { MyContext } from './context';

function App() {
  const { name, setName } = useContext(MyContext);

  const handlePress = () => {
    setName(name === 'Sandesh' ? 'Jasmine' : 'Sandesh');
  };

  return (
    <div className="App">
      <button onClick={handlePress}>PRESS</button>
      <p>Current name: {name}</p>
    </div>
  );
}

export default App;
```
File: Box1.js
```
import React, { useContext } from 'react';
import { MyContext } from '../context';

function Box1() {
  const { name } = useContext(MyContext);
  return (
    <div>
      <h1>Box1 Component</h1>
      <p>Current name: {name}</p>
    </div>
  );
}

export default Box1;
```
## Summary

The Context API is a powerful feature in React that simplifies state management across components. By creating a context and using the useContext hook, you can share state without prop drilling.
