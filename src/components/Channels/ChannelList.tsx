import React from "react";
import styles from "@/styles/ChannelsStyles/ChannelList.module.scss";
import Category from "./Category";

export default class ChannelList extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <Category />
          <Category />
        </div>
      </>
    );
  }
}
