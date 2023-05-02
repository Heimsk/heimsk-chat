import React from "react";
import styles from "@/styles/ChannelsStyles/ServerName.module.scss";

// icons
import { FaChevronDown } from "react-icons/fa";

export default class ServerName extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <span>Server Name</span>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </>
    );
  }
}
