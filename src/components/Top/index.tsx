import React from "react";
import styles from "@/styles/Top/Top.module.scss";
import ChannelInfo from "./ChannelInfo";
import Actions from "./Actions";

export default class RightBar extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <ChannelInfo />
          <Actions />
        </div>
      </>
    );
  }
}
