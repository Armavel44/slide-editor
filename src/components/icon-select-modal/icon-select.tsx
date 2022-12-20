import React from 'react';
import { Icon, styled } from '@mui/material';
import { IconSelectProps } from "./types";
import { Icons } from '../../constants/icons';

const IconSelectContainer = styled('div')`
    width: 400px;
    height: 600px;
`

const SelectableIcon = styled(Icon)`
    cursor: pointer;
`

export const IconSelect = ({ selectIcon, closeModal }: IconSelectProps) => {
    const icons = Object.values(Icons);

    const handleIconSelect = (icon: Icons) => {
        selectIcon(icon);
        closeModal();
    }

    return <IconSelectContainer>
        {icons.map(icon =>
            <SelectableIcon key={icon} sx={{ fontSize: 100 }} onClick={() => handleIconSelect(icon)}>{icon}</SelectableIcon>
        )}
    </IconSelectContainer>
}