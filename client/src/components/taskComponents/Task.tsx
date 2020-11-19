import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteTaskRequest, finishTaskRequest, openTaskRequest } from '../../actions/taskActions';
import DeleteIcon from '../../elements/DeleteIcon';
import FlexBox from '../../elements/FlexBox';
import Icon from '../../elements/Icon';
import Input from '../../elements/Input';
import PrimaryButton from '../../elements/PrimaryButton';
import CheckBox from '../../elements/taskElements/CheckBox';
import TaskDiv from '../../elements/taskElements/TaskDiv';
import TaskEditModeTrue from '../../elements/taskElements/TaskEditModeTrue';
import theme from '../../theme';
import { Task } from '../../types/interfaces';
import TaskDeleteModal from './TaskDeleteModal';


const CHECKBOX_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const TEXT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center
}

const ACTION_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const CANCEL_BUTTON_THEME = {
    color: theme.colors.navy,
    backgroundColor: theme.colors.white,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
}

const SUBMIT_BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: theme.colors.navy,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
}

interface OwnProps {
    task: Task,
    number: number
}

type Props = OwnProps & MapDispatchToProps;

const TaskElement: React.FC<Props> = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const [taskSubject, setTaskSubject] = React.useState(props.task.subject);
    const [confirmDeleteModal, setConfirmDeleteModal] = React.useState(false);

    if (editMode){
        return (
            <TaskEditModeTrue>
                <FlexBox>
                    <Input value={taskSubject} onChange={(e) => setTaskSubject(e.target.value)} />
                </FlexBox>
                <PrimaryButton theme={CANCEL_BUTTON_THEME} onClick={() => setEditMode(false)} >Cancel</PrimaryButton>
                <PrimaryButton theme={SUBMIT_BUTTON_THEME} onClick={() =>  { props.saveTask(props.task._id, taskSubject); setEditMode(false) } } >Save</PrimaryButton>
            </TaskEditModeTrue>
        );
    } else {
        return(
            <div>
            {confirmDeleteModal ? <TaskDeleteModal closeModal={setConfirmDeleteModal} action={props.deleteTask} object={props.task} /> : null }
            <TaskDiv style={{ backgroundColor: props.task.isDone ? 'lightgreen' : 'white'}}>
                <FlexBox theme={CHECKBOX_FLEXBOX_THEME}>
                    <CheckBox type="checkbox" defaultChecked= {props.task.isDone ? true : false } onChange={(e) => { e.target.checked ? props.finishTask(props.task._id, props.task.notebook) : props.openTask(props.task._id, props.task.notebook) } }/>
                </FlexBox>
                <FlexBox theme={TEXT_FLEXBOX_THEME}>
                    {props.number + 1}. 
                    {props.task.subject}
                </FlexBox>
                <FlexBox theme={ACTION_FLEXBOX_THEME}>
                    <Icon onClick={() => setEditMode(true)}>
                        <i className="fas fa-pen" />
                    </Icon>
                </FlexBox>
                <FlexBox theme={ACTION_FLEXBOX_THEME}>
                    <DeleteIcon onClick={() => setConfirmDeleteModal(true)}>
                        <i className="fas fa-trash-alt" />
                    </DeleteIcon>
                </FlexBox>
            </TaskDiv>
            </div>
        );
    }
}

interface MapDispatchToProps {
    finishTask: (taskId: string, notebookId: string) => void,
    openTask: (taskId: string, notebookId: string) => void,
    deleteTask: (task: Task) => void,
    saveTask: (taskId: string, taskSubject: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    finishTask: (taskId, notebookId) => dispatch(finishTaskRequest(taskId, notebookId)),
    openTask: (taskId, notebookId) => dispatch(openTaskRequest(taskId, notebookId)),
    deleteTask: (task) => dispatch(deleteTaskRequest(task)),
    saveTask: (taskId, taskSubject) => dispatch(openTaskRequest(taskId, taskSubject)),
})

export default connect(null, mapDispatchToProps)(TaskElement);