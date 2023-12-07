import React from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import Overview from "./Overview";

const Home = () => {
  return <section className=" overflow-y-auto flex h-full text-gray-100">
    <Sidebar></Sidebar>
    <Overview />
    <Messages></Messages>
  </section>;
};

export default Home;
