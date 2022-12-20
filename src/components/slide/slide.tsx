import React, { useState } from 'react';
import { styled } from '@mui/material';
import { SlideElement } from '../slide-element';
import { SlideTitle } from '../slide-title'

const SlideContainer = styled('div')`
  width: 80vw;
  height: 80vh;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
`

const SlideContent = styled('div')`
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
`

const initialContentState = [{ id: 'initialLeft', order: 1 }, { id: 'initialMiddle', order: 2 }, { id: 'initialRight', order: 3 }]

export const Slide = () => {
    const [dragId, setDragId] = useState<string | null>(null);
    const [elements, setElements] = useState(initialContentState);

    const handleDrag = (e) => {
        setDragId(e.currentTarget.id);
    }

    const handleDrop = (e) => {
        const currentId = e.currentTarget.id;
        const dragComponent = elements.find(el => el.id === dragId);
        const dropTarget = elements.find(el => el.id === currentId);
        if (!dragComponent || !dropTarget) return;

        const dragComponentOrder = dragComponent.order;
        const dropTargetOrder = dropTarget.order;
        const reorderedElements = elements.map(el => {
            return el.id === dragId ?
                {...el, order: dropTargetOrder} : el.id === currentId ?
                    {...el, order: dragComponentOrder} : el
        });

        setElements(reorderedElements);
    }

    return <SlideContainer>
        <SlideTitle />
        <SlideContent>
            {elements
                .sort((a, b) => a.order - b.order)
                .map(({id}) => <SlideElement key={id} id={id} handleDrag={handleDrag} handleDrop={handleDrop} />)
            }
        </SlideContent>
    </SlideContainer>
};