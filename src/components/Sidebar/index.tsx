import React from "react";
import styles from "@/styles/SidebarStyles/Sidebar.module.scss";
import Explore from "./Explore";
import ServerList from "./ServerList";

export default class Sidebar extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <Explore />
          <ServerList />
        </div>
      </>
    );
  }
}
