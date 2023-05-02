import React from "react";
import styles from "@/styles/ChannelsStyles/Channel.module.scss";

// icons
import { RiMessage2Fill } from "react-icons/ri";

export default class Channel extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <i>
            <RiMessage2Fill />
          </i>
          <span>Chat-principal</span>
        </div>
      </>
    );
  }
}
