import React from "react";
import styles from "@/styles/UserInfo.module.scss";

export default class UserInfo extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <div id={styles.avatar}>
            <div></div>
          </div>
          <div id={styles.infos}>
            <span>Heimsk</span>
            <small>#0000</small>
          </div>
        </div>
      </>
    );
  }
}
