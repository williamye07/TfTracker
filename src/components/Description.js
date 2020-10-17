import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    text-align: center;
    display: block;
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 4%;
    padding-bottom: 4%;
    font-size: 20px;

    @media (max-width: 768px){
        font-size: 18px;
    }
    
    @media (max-width: 480px){
        font-size: 16px;
    }
`;

const Description = () => {
    return(
        <TextWrapper>
            TfT-scouter is an app that can help you scout and keep track of the enemies that you face in your TFT games! Start off by 
            entering your opponent names. If you face an opponent, click the check button and the 
            corresponding box will turn green. If an opponent is no longer in the game, click the x button and the corresponding box will
            turn red. You cannot face opponents that are red or green.
        </TextWrapper>
    );
}

const AlgDescription = () => {
    return(
        <TextWrapper>
            The TFT match making algorithm works as follows:
            If there are 7 other players alive, you cannot face the last 4 you have matched.
            If there are 6 other players alive, you cannot face the last 3 you have matched.
            If there are 5 other players alive, you cannot face the last 2 you have matched.
            If there are 4 or 3 other players alive, you cannot face the last person you matched.
            If someone is eliminated or leaves the game, the algorithm is reset so you can face anyone.
        </TextWrapper>
    )
}

export {Description, AlgDescription};