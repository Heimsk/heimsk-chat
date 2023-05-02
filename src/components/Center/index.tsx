import React from "react";
import styles from "@/styles/Center/Center.module.scss";
import ChannelData from "./ChannelData";
import Input from "./Input";

export default class Center extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <ChannelData />
          <Input />
        </div>
      </>
    );
  }
}
