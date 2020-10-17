import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 35%;
    height: 50px;
    text-align: center;
    font-size: medium;
    margin-top: 10px;
    border-width: medium;
    border-color: black;
    background-color: ${props => props.inputColor || "white"};
`


class OpponentField extends React.Component {
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    render() {
        return(
        <InputField value={this.state.value} onChange={this.handleChange} placeholder={'Opponent Name'} inputColor={this.props.color}></InputField>
        );
    }
}

export default OpponentField;