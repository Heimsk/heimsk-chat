import React from "react";
import styles from "@/styles/ChannelsStyles/Channels.module.scss";
import ServerName from "./ServerName";
import ChannelList from "./ChannelList";

export default class Channels extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <ServerName />
          <ChannelList />
        </div>
      </>
    );
  }
}
