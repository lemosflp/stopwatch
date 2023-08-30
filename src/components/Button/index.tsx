import React from 'react';
import style from './botao.module.scss'

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined}> {
    render(): React.ReactNode {
        return (
            <button type={this.props.type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;

