import React from "react";
import styles from "@/styles/SidebarStyles/ServerList.module.scss";
import Button from "../ServerButton";

export default class ServerList extends React.Component {
  public render() {
    const buttons = [
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
    ];

    return (
      <>
        <div id={styles.container}>
          {buttons.map((_, i) => (
            <Button notification={i % 2 === 0} active={i === 0} key={i} />
          ))}
        </div>
      </>
    );
  }
}
