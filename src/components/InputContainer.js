import React from 'react';
import styled from 'styled-components';

import OpponentWrapper from './OpponentWrapper';

import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';


const Wrapper = styled.div`
    padding-top: 2%;
    display: flex;
    align-items : center;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    margin-top: 4%;
`;

const deadColor = "#9e0104db";
const matchedColor = "#0ba629db";

class InputContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            numDead: 0,
            opponents: ['white', 'white', 'white', 'white', 'white', 'white', 'white']
        };

        this.handleClick =  this.handleClick.bind(this);
        this.handleDead =  this.handleDead.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        }
        componentDidMount(){
            fetch('/clear');
        }

        handleClick(id){
            const temp = this.state.opponents;
            if(temp[id] !== deadColor){
                temp[id] = matchedColor;
                const url = '/addOpponent/'+id.toString()+'/'+this.state.numDead.toString();
                fetch(url).then(res => res.json()).then(data => {
                    
                    if(data.id < 8){
                        temp[data.id] = 'white';
                    }
                    this.setState({opponents: temp});
                });
            }

        };

        handleDead(id){
            const temp = this.state.opponents;
            if(temp[id] !== deadColor){
                temp[id] = deadColor;
                for (const i in temp){
                    if (temp[i] !== deadColor){
                        temp[i] = 'white';
                    }
                }
                const tempNum = this.state.numDead + 1;
                this.setState({numDead: tempNum, opponents: temp});
                fetch('/clear');
            }
        }

        handleRestart(){
            const defaultColor = ['white', 'white', 'white', 'white', 'white', 'white', 'white'];
            this.setState({numDead: 0, opponents: defaultColor});
            fetch('/clear');
        }
    


    render(){
        const elements = [];

        for (let i = 0; i < 7; i++){
            elements.push(<OpponentWrapper key={i} handleFaced={() => this.handleClick(i)} color={this.state.opponents[i]}
                            handleDead={() => this.handleDead(i)}/>);
        }
        return(
            <Wrapper>
                {elements}
                <ButtonWrapper>
                    <Button onClick={() => this.handleRestart()} variant="contained" startIcon={<RefreshIcon />}>Restart</Button>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

export default InputContainer;