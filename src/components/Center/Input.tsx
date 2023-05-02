import React, { FormEvent } from "react";
import styles from "@/styles/Center/Input.module.scss";

// icons
import { FaPlusCircle } from "react-icons/fa";
import { BsFillEmojiLaughingFill, BsSend } from "react-icons/bs";

export interface IState {
  content: string;
}

export default class Input extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      content: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  private handleInput(e: FormEvent) {
    this.setState({ content: (e.target as HTMLDivElement).innerText || "" });
  }

  public render() {
    return (
      <>
        <div id={styles.container}>
          <div className={styles.action}>
            <i>
              <FaPlusCircle />
            </i>
          </div>
          <div id={styles.input}>
            <div onInput={this.handleInput} contentEditable></div>
          </div>
          <div
            id={styles.send}
            className={`${styles.action} ${
              this.state.content.length ? styles.visible : ""
            }`}
          >
            <BsSend />
          </div>
          <div className={styles.action}>
            <i>
              <BsFillEmojiLaughingFill />
            </i>
          </div>
        </div>
      </>
    );
  }
}
