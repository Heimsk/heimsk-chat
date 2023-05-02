import React from "react";
import styles from "@/styles/RightBarStyles/RightBar.module.scss";
import UserList from "./UserList";

export default class RightBar extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <UserList />
        </div>
      </>
    );
  }
}
