import React, { useEffect, useState } from "react";
import ButtonLoadModule from "./Main/ButtonLoadModule";
import Results from "./Results";
import MainScreen from "./MainScreen";
import Trivia from "./Trivia";

const loadComponent = (mod, setLoadedModuleName) => {
  switch (mod) {
    case "main":
      return <MainScreen {...{ setLoadedModuleName }} />;
    case "trivia":
      return <Trivia {...{ setLoadedModuleName }} />;
    case "results":
      return <Results {...{ setLoadedModuleName }} />;
    default:
      <MainScreen {...{ setLoadedModuleName }} />;
      return;
  }
};

export default function Home() {
  const [loadedComponent, setLoadedComponent] = useState("");
  const [loadedModuleName, setLoadedModuleName] = useState("main");

  useEffect(() => {
    setLoadedComponent(loadComponent("main", setLoadedComponent));
  }, []);

  useEffect(() => {
    setLoadedComponent(loadComponent(loadedModuleName, setLoadedModuleName));
  }, [loadedModuleName]);

  return (
    <div className="h-screen p-5">
      <div className="rounded overflow-hidden shadow-lg flex flex-col justify-center lg:items-center h-full border">
        {loadedComponent}
        {loadedModuleName === "main" && (
          <ButtonLoadModule
            {...{ setLoadedModuleName }}
            label="BEGIN"
            module="trivia"
          />
        )}
      </div>
    </div>
  );
}
