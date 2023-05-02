import React from "react";
import styles from "@/styles/RightBarStyles/Role.module.scss";
import User from "../User";

export default class Role extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <span>admin</span>
          <div id={styles.users}>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
        </div>
      </>
    );
  }
}
