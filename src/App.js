import React from "react";
import { Provider } from "react-redux";
import ProjectList from "./components/ProjectList";
import store from "./store";
import Map from "./components/Map";
import SubmissionForm from "./components/SubmissionForm";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <NavBar />
        <h1 className="text-3xl font-bold mb-8 mx-10">Projects</h1>
        <ProjectList />
        <SubmissionForm />
        <Map />
      </div>
    </Provider>
  );
}

export default App;
