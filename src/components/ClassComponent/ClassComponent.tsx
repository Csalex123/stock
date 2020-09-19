import React, { Component } from 'react';

class ClassComponent extends Component<{ name: string }> {

    constructor(props: any){
        super(props);
        console.log('Method constructor');
    }

    state = {
        name: this.props.name
    }

    componentDidMount(){
        /* Quando é construído */
        console.log('Component Did mount');
    }

    componentDidUpdate(){
        /* Quando alguma coisa é atualiza e o dom precisa ser atualizado */
        console.log('Component Did Update');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Component Baseado em {this.state.name}</h1>
                <button onClick={() => this.setState({name: 'teste'})}>Alterar</button>
            </div>
        )
    }
}

export default ClassComponent;