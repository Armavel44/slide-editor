import {Icons} from '../../constants/icons';

export interface IconSelectProps {
    selectIcon: (icon: Icons) => void;
    closeModal: () => void
}