import React from 'react';
import FlexBox from '../../elements/FlexBox';
import ModalDiv from '../../elements/ModalDiv';
import PrimaryButton from '../../elements/PrimaryButton';
import theme from '../../theme';
import { Task } from '../../types/interfaces';


const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    fontSize: '1.4em'
}

const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems,
    flexDirection: theme.flexDirection.row
}

const CANCEL_BUTTON_THEME = {
    color: theme.colors.navy,
    backgroundColor: theme.colors.white,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginRight: '1em',
    marginBottom: '1em',

}

const SUBMIT_BUTTON_THEME = {
    color: theme.colors.black,
    backgroundColor: 'red',
    hoverColor: 'red',
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px red',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em',
}

interface Props {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>,
    action: (task: Task) => void,
    object: Task
}

const Modal: React.FC<Props> = (props) => {
    return(
        <ModalDiv style={{ top: '8em', height: '10em', gridTemplateRows: '1fr 1fr' }}>
            <FlexBox theme={TOP_FLEXBOX_THEME}>
                Are you sure you want to delete this task?
            </FlexBox>
            <FlexBox theme={BOTTOM_FLEXBOX_THEME}>
                <PrimaryButton theme={CANCEL_BUTTON_THEME} onClick={() => props.closeModal(false)} >Cancel</PrimaryButton>
                <PrimaryButton theme={SUBMIT_BUTTON_THEME} onClick={() => { props.action(props.object); props.closeModal(false) } } >Delete</PrimaryButton>
            </FlexBox>
        </ModalDiv>
    );
}

export default Modal;