import React, {ChangeEvent, useState} from 'react';
import Input from '@mui/material/Input';
import {styled} from '@mui/material';
import {EditableTextProps} from './types';

const TextInput = styled(Input)`
    font-size: ${(props: {fontSize: string}) => props.fontSize};
`

export const EditableText = ({fontSize, defaultText, multiline}: EditableTextProps) => {
    const [text, setText] = useState<string>(defaultText);
    return <>
            <TextInput
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                inputProps={{ style: { textAlign: 'center' } }}
                size='medium'
                fontSize={fontSize}
                multiline={multiline}
                disableUnderline
            />
    </>
}