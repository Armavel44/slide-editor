import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material';
import Icon from '@mui/material/Icon';
import { IconSelect } from './icon-select';
import { Positions } from '../../constants/positions';

const EditableIcon = styled(Icon)`
  cursor: pointer;
`

export const IconWithModal = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [icon, setIcon] = useState<string>('star')

    const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <EditableIcon sx={{ fontSize: 200 }} onClick={openPopover}>{icon}</EditableIcon>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: Positions.Center,
                    horizontal: Positions.Right,
                }}
                transformOrigin={{
                    vertical: Positions.Center,
                    horizontal: Positions.Left,
                }}
            >
                <IconSelect selectIcon={setIcon} closeModal={closePopover} />
            </Popover>
        </>
    )
}