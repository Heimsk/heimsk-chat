import React from "react";
import styles from "@/styles/User.module.scss";

export default class User extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <span>Heimsk</span>
            <small>
              O que não provoca minha morte, faz com que eu fique mais forte.
            </small>
          </div>
        </div>
      </>
    );
  }
}
