import React from "react";
import styles from "@/styles/RightBarStyles/UserList.module.scss";
import User from "../User";
import Role from "./Role";

export default class RightBar extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <Role />
          <Role />
        </div>
      </>
    );
  }
}
