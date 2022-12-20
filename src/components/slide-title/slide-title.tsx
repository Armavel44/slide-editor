import React from 'react';
import { styled } from '@mui/material';
import { EditableText } from '../editable-text'
import { defaultTitle } from './constants';

const TitleContainer = styled('div')`
    width: 100vw;
    display: flex;
    justify-content: center;
    cursor: default;
`

export const SlideTitle = () => {
    return <TitleContainer>
        <EditableText fontSize='2rem' defaultText={defaultTitle} />
    </TitleContainer>
}