import React from "react";
import styles from "@/styles/Center/ChannelData.module.scss";
import Message from "../Message";

export default class ChannelData extends React.Component {
  public render() {
    return (
      <>
        <div id="data" className={styles.container}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        </div>
      </>
    );
  }
}
