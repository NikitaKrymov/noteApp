import React, { useState } from 'react';
import FormInput from '../../elements/authElements/FormInput';
import FlexBox from '../../elements/FlexBox';
import ModalDiv from '../../elements/ModalDiv';
import PrimaryButton from '../../elements/PrimaryButton';
import theme from '../../theme';
import { NewTask } from '../../types/interfaces';

const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
}

const MID_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
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
        label: 'Subject',
        id: 1,
        type: 'text'
    },
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
    closeCreateTask: () => void,
    createTask: (newTask: NewTask) => void,
    notebookId: string
}

const TaskModal: React.FC<Props> = (props) => {
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false); 
    const { notebookId } = props;

    return(
        <ModalDiv style={{ gridTemplateRows: '2fr 2fr 8fr 1fr' }}>
            <FlexBox theme={TOP_FLEXBOX_THEME} style={{ color: 'navy', fontSize: '1.5em', borderBottom: '1px solid navy'}}>
                Add New Task
            </FlexBox>
            <FlexBox theme={ERROR_FLEXBOX_THEME} style={{ opacity: subjectError ? '1' : '0', color: 'red', border: '1px solid red', margin: '1em', padding: '1em'}}>
                Subject field can not be empty! 
            </FlexBox>
            <FlexBox theme={MID_FLEXBOX_THEME}>
                <FormInput type={FORM_FIELDS[0].type} placeholder={FORM_FIELDS[0].label} value={subject} onChange={(e) => setSubject(e.target.value)} style={{
                    height: '100%',
                    border: '1px solid navy',
                    borderRadius: '1em'
                }}/>
            </FlexBox>
            <FlexBox theme={BOTTOM_FLEXBOX_THEME}>
                <PrimaryButton theme={CANCEL_BUTTON_THEME} onClick={() => props.closeCreateTask()} >Cancel</PrimaryButton>
                <PrimaryButton theme={SUBMIT_BUTTON_THEME} onClick={() => { subject.length > 0 ? props.createTask({ subject, notebookId: notebookId }) : setSubjectError(true); props.closeCreateTask();  } } >Add</PrimaryButton>
            </FlexBox>
        </ModalDiv>
    );
}
export default TaskModal;