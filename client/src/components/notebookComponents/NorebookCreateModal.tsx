import React, { useState } from 'react';
import FormInput from '../../elements/authElements/FormInput';
import FlexBox from '../../elements/FlexBox';
import ModalDiv from '../../elements/ModalDiv';
import PrimaryButton from '../../elements/PrimaryButton';
import theme from '../../theme';
import { NewNotebook } from '../../types/interfaces';

const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
}

const MID_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column
}

const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems,
    flexDirection: theme.flexDirection.row
}

const FORM_FIELDS = [
    {
        label: 'Title',
        id: 1,
        type: 'text'
    },
    {
        label: 'Description',
        id: 2,
        type: 'text'
    }
]

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
    color: theme.colors.white,
    backgroundColor: theme.colors.navy,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em',
}

const ERROR_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
}

interface Props {
    closeCreateNotebook: React.Dispatch<React.SetStateAction<boolean>>,
    createNotebook: (newNotebook: NewNotebook) => void,
    userId: string
}

const NotebookCreateModal: React.FC<Props> = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false); 
    const { userId } = props;
    console.log(userId)
    return(
        <ModalDiv style={{ top: '20%', gridTemplateRows: '2fr 2fr 8fr 1fr' }}>
            <FlexBox theme={TOP_FLEXBOX_THEME} style={{ color: 'navy', fontSize: '1.5em', borderBottom: '1px solid navy'}}>
                Open New Notebook
            </FlexBox>
            <FlexBox theme={ERROR_FLEXBOX_THEME} style={{ opacity: titleError ? '1' : '0', color: 'red', border: '1px solid red', margin: '1em', padding: '1em'}}>
                Title field can not be empty! 
            </FlexBox>
            <FlexBox theme={MID_FLEXBOX_THEME}>
                <FormInput type={FORM_FIELDS[0].type} placeholder={FORM_FIELDS[0].label} value={title} onChange={(e) => setTitle(e.target.value)} />
                <FormInput type={FORM_FIELDS[1].type} placeholder={FORM_FIELDS[1].label} value={description} onChange={(e) => setDescription(e.target.value)} />
            </FlexBox>
            <FlexBox theme={BOTTOM_FLEXBOX_THEME}>
                <PrimaryButton theme={CANCEL_BUTTON_THEME} onClick={() => props.closeCreateNotebook(false)} >Cancel</PrimaryButton>
                <PrimaryButton theme={SUBMIT_BUTTON_THEME} onClick={() => { props.closeCreateNotebook(false); title.length > 0 ? props.createNotebook({ title, description, owner: userId }) : setTitleError(true) } } >Create</PrimaryButton>
            </FlexBox>
        </ModalDiv>
    );
}
export default NotebookCreateModal;