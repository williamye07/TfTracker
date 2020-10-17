import React from 'react';
import styled from 'styled-components';

import OpponentField from './OpponentField';

import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

const OpponentDiv = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
`;

const OpponentWrapper = ({ color, handleFaced, handleDead }) => {
    return(
    <OpponentDiv>
        <OpponentField color={color}/>
        <IconButton onClick={handleFaced}>
            <CheckIcon />
        </IconButton>
        <IconButton onClick={handleDead}>
            <ClearIcon />
        </IconButton>
    </OpponentDiv>
    );
}

export default OpponentWrapper;