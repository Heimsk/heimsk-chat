import React, { FormEvent } from "react";
import styles from "@/styles/Center/Input.module.scss";

// icons
import { FaPlusCircle } from "react-icons/fa";
import { BsFillEmojiLaughingFill, BsSend } from "react-icons/bs";

export interface IState {
  content: string;
  lastH: number;
}

export default class Input extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      content: "",
      lastH: 0
    };

    this.handleInput = this.handleInput.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.adjustHeight();
      }, 100);
    });
  }

  private handleInput(e: FormEvent) {
    const h = this.adjustHeight();
    this.setState({ content: (e.target as HTMLDivElement).innerText || "", lastH: h });
  }

  private adjustHeight(): number {
    const input = document.getElementById('input');
      const data = document.getElementById('data');
      if(!data || !input) return 0
      const bounding = input.getBoundingClientRect();
      
      if(bounding.height == this.state.lastH) return 0;
      data.style.height = `calc(100vh - ${bounding.height + 120}px)`;

      return bounding.height;
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
          <div id="input" className={styles.input}>
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
