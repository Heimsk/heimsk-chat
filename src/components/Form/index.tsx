import React from 'react';
import styles from "@/styles/Form/Form.module.scss";
import FormInput from './Input';
import Button from '../Button';

interface IProps {
    type: "login" | "register";
}

interface IState extends IProps { };

export default class Form extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            type: props.type
        }

        this.changeType = this.changeType.bind(this);
    }

    public changeType() {
        if (this.state.type == 'login') {
            this.setState({ type: 'register' });
        } else {
            this.setState({ type: 'login' });
        }
    }

    public render() {
        return <>
            <form id={styles.container}>
                {this.state.type == "login" ? (
                    <>
                        <div id={styles.header}>
                            <h2>Bem vindo de volta!</h2>
                            <small>Entre com a sua conta</small>
                        </div>
                        <div id={styles.fields}>
                            <FormInput label='Email' type='email' />
                            <FormInput label='Senha' type='password' />
                        </div>
                        <Button label='Login' type="submit" />
                        <div id={styles.footer}>
                            <small>Não possui uma conta? <span onClick={this.changeType} className={styles.link}>Crie uma!</span></small>
                        </div>
                    </>
                ) : (
                    <>
                        <div id={styles.header}>
                            <h2>Bem vindo!</h2>
                            <small>Crie sua conta e começe a interagir!</small>
                        </div>
                        <div id={styles.fields}>
                            <FormInput type='email' label='Email' />
                            <FormInput type='password' label='Senha' />
                            <FormInput type='password' label='Repetir senha' />
                        </div>
                        <Button type='submit' label='Criar conta' />
                        <div id={styles.footer}>
                            <small>Já possui uma conta? <span onClick={this.changeType} className={styles.link}>Entre com ela!</span></small>
                        </div>
                    </>
                )}
            </form>
        </>
    }
}