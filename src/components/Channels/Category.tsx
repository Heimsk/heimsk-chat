import React from "react";
import styles from "@/styles/ChannelsStyles/Category.module.scss";

// icons
import { FaChevronDown, FaPlus } from "react-icons/fa";
import Channel from "./Channel";

export interface ICategoryState {
  closed: boolean;
}

export default class Category extends React.Component<{}, ICategoryState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      closed: false,
    };
  }

  public render() {
    const channels = [
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
      "a",
    ];

    return (
      <>
        <div id={styles.container}>
          <div id={styles.label}>
            <div onClick={() => this.setState({ closed: !this.state.closed })}>
              <i className={`${this.state.closed ? styles.rotate : ""}`}>
                <FaChevronDown />
              </i>
              <span>Principal</span>
            </div>
            <i>
              <FaPlus />
            </i>
          </div>
          {!this.state.closed ? (
            <div id={styles.channels}>
              {channels.map((_, i) => (
                <Channel key={i} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
