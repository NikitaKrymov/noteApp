import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createTaskRequest, fetchTasksRequest } from '../../actions/taskActions';
import FlexBox from '../../elements/FlexBox';
import GridBox from '../../elements/GridBox';
import ProgressBar from '../../elements/notebookElements/ProgressBar';
import NewTaskButton from '../../elements/taskElements/NewTaskButton';
import { AppState } from '../../reducers/rootReducer';
import { NewTask, Task } from '../../types/interfaces';
import TaskComponent from './Task';
import TaskModal from './TaskCreateModal';
import '../../css/main.css';
import theme from '../../theme';


const PROGRESS_BAR_ITEM = {
    justifyContent: 'space-around',
    alignItems: 'center',
}

const progressBarLoading = (totalSections: number, doneSections: number) => {
    console.log(totalSections, doneSections);
    const doneWidth = (100/totalSections) * doneSections;
    console.log(doneWidth)
    return(
        {
            backgroundColor: 'green',
            width: `${doneWidth}%`
        }
    );
}


const countDoneTasks = (taskArray: Task[], setTotalDoneTasks: React.Dispatch<React.SetStateAction<number>>) => {
    let count = 0;
    taskArray.map((task, i) => {
        return task.isDone ? count++ : count;
    });
    setTotalDoneTasks(count);
}

interface OwnProps {
    notebookId: string
}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const TaskList: React.FC<Props> = (props) => {
    const [taskForm, setTaskForm] = useState(false);
    const [totalDoneTasks, setTotalDoneTasks] = useState(0);
    
    useEffect(() => {
        props.fetchTasks(props.notebookId);
    }, []);

    useEffect(() => {
        countDoneTasks(props.notebookTasks, setTotalDoneTasks);
    }, [props.notebookTasks])

    return (
        <div>
            {props.isTaskLoading ? <div className="spinner" style={{ position: 'fixed', top: 'calc(50% - 15px)', left: 'calc(50% - 15px)'}}></div> : null}
            {taskForm ? <TaskModal closeCreateTask={() => setTaskForm(false)} createTask={props.createTask} notebookId={props.notebookId} /> : null }
            <GridBox style={{ gridTemplateColumns: '1fr 20fr 2fr', marginTop: '0.5em'}}>
                <FlexBox theme={PROGRESS_BAR_ITEM} >
                    <i style={{  fontSize: '1.5em', borderRadius: '50%', color: props.notebookTasks.length === totalDoneTasks ? 'white' : 'black', border: props.notebookTasks.length === totalDoneTasks ? '1px solid green' : '0px solid black', backgroundColor: props.notebookTasks.length === totalDoneTasks ? 'green' : 'white' }} className="far fa-check-circle" />
                </FlexBox>
                <FlexBox theme={PROGRESS_BAR_ITEM}>
                    {props.isTaskLoading ? null : <ProgressBar style={progressBarLoading(props.notebookTasks.length, totalDoneTasks)}/> }
                </FlexBox>
                <FlexBox theme={PROGRESS_BAR_ITEM}>
                    <NewTaskButton onClick={() => setTaskForm(true)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            +
                        </div>
                    </NewTaskButton>
                </FlexBox>
            </GridBox>
            <FlexBox theme={{ justifyContent: theme.justifyContent.center, flexDirection: theme.flexDirection.column }} style={{ position: 'relative', margin: '1em' }} >
                {props.notebookTasks.map((task, i) => {
                    return(
                        <div key={task._id} style={{ position: 'relative' }}>
                            <TaskComponent task={task} number={i}/>
                        </div>
                    );
                })}
            </FlexBox>
        </div>
    );
}

interface MapDispatchToProps {
    fetchTasks: (notebookId: string) => void
    createTask: (newTask: NewTask) => void,
}

interface MapStateToProps {
    isTaskLoading: boolean
    notebookTasks: Task[],
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    notebookTasks: Object.values(state.app.notebookTasks),
    isTaskLoading: state.app.isTaskLoading
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({

    createTask: (newTask) => dispatch(createTaskRequest(newTask)),
    fetchTasks: (notebookId) => dispatch(fetchTasksRequest(notebookId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);