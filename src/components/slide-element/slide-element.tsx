import React from 'react';
import { styled } from '@mui/material';
import { EditableText } from '../editable-text';
import { IconWithModal } from '../icon-select-modal';
import { defaultSubText, defaultText } from './constants';

const ElementContainer = styled('div')`
    width: 30%;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
`

interface SlideElementProps {
    handleDrag: (e) => void;
    handleDrop: (e) => void;
    id: string;
}

export const SlideElement = ({ handleDrag, handleDrop, id }: SlideElementProps) => {
    return <ElementContainer
        onDragOver={(e) => e.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
        id={id}
        draggable
    >
        <IconWithModal />
        <EditableText fontSize='1.3rem' defaultText={defaultText} />
        <EditableText fontSize='0.9rem' defaultText={defaultSubText} multiline />
    </ElementContainer>
};