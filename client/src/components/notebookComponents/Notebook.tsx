import React, { useEffect } from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import theme from '../../theme';
import GridBox from '../../elements/GridBox';
import NotebookEditModal from './NotebookEditModal';
import FlexBox from '../../elements/FlexBox';
import NotebookDiv from '../../elements/notebookElements/NotebookDiv';
import Icon from '../../elements/Icon';
import TaskList from '../taskComponents/TaskList';
import { NewNotebook, Notebook } from '../../types/interfaces';
import { deleteNotebookRequest, editNotebookRequest, fetchNotebookRequest } from '../../actions/notebookActions';
import { AppState } from '../../reducers/rootReducer';
import DeleteIcon from '../../elements/DeleteIcon';
import Modal from '../notebookComponents/NotebookDeleteModal';

const GRIDBOX_THEME = {
    gridTemplateRows: '1fr 20fr',
}

const NOTEBOOK_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.flexStart
}

const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sb
}

const TOP_FLEXBOX_STYLE = {
    borderBottom: '1px solid navy',
    width: '100%',
    marginTop: '1em',
    paddingBottom: '1em',
    fontSize: '1.5em'
}

const TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    flexDirection: theme.flexDirection.column
}

const TOP_RIGHT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexEnd,
    alignItems: theme.alignItems.flexStart,
    marginRight: '1em'
}

const TOP_LEFT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.flexStart,
    marginTop: '1em',
}

const TITLE_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 1fr'
}

const UPPER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'center'
}

const LOWER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'flex-end'
}



interface OwnProps {
    match: any
}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const NotebookComponent:React.FC <Props> = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const [deleteModal, setDeleteModal] = React.useState(false);

    useEffect(() => {
        props.fetchNotebook(props.match.params.id);
    }, [props.match.params.id]);

    console.log(props)
    if (props.isNotebookLoading) {
        return(
            <div>
                Loading
            </div>
        );
    } else {
        console.log(props.notebookData)
        return(
            <GridBox theme={GRIDBOX_THEME}>
                    {deleteModal ? <Modal closeModal={setDeleteModal} action={props.deleteNotebook} object={props.notebookData} /> : null }
                    {editMode ? <NotebookEditModal modalMame='Edit Notebook' closeModal={setEditMode} notebookId={props.notebookData._id} title={props.notebookData.title} userId={props.notebookData.owner} description={props.notebookData.description} saveNotebook={props.editNotebook} /> : null }
                    <FlexBox theme={NOTEBOOK_FLEXBOX_THEME}>
                        <NotebookDiv>
                            <FlexBox theme={TOP_FLEXBOX_THEME} style={TOP_FLEXBOX_STYLE}>
                                <FlexBox onClick={() => history.push('/')} theme={TOP_LEFT_FLEXBOX_THEME} style={{  cursor: 'pointer' }}>
                                    <Icon>
                                        <i style={{ fontSize: '1em', marginLeft: '1em' }}className="fas fa-arrow-left" />
                                    </Icon>
                                </FlexBox>
                                <GridBox theme={TITLE_GRIDBOX_THEME} style={{margin: '0 1em 0 1em'}}>
                                    <FlexBox theme={UPPER_TITLE_FLEXBOX_THEME}>
                                        <div>
                                            {props.notebookData.title}
                                        </div>
                                        <Icon onClick={() => setEditMode(true)}>
                                            <i className="fas fa-pen" />
                                        </Icon>
                                    </FlexBox>
                                    <FlexBox theme={LOWER_TITLE_FLEXBOX_THEME} style={{ fontSize:'0.8em' }}>
                                        {props.notebookData.description}
                                    </FlexBox>
                                </GridBox>
                                <FlexBox style={TOP_RIGHT_FLEXBOX_THEME} onClick={(e) => { setDeleteModal(true) } }>
                                    <DeleteIcon>
                                        <i className="fas fa-trash-alt" />
                                    </DeleteIcon>
                                </FlexBox>
                            </FlexBox>
                            <FlexBox theme={TASKLIST_FLEXBOX_THEME} style={{ height: '95%', position: 'relative', overflow: 'auto', borderRadius: '1em', marginTop: '1em' }}>
                                <div>
                                    <TaskList notebookId={props.notebookData._id }/>
                                </div>
                            </FlexBox>
                        </NotebookDiv>
                    </FlexBox>
            </GridBox>
        );
    }
}

interface MapStateToProps {
    notebookData: Notebook,
    isNotebookLoading: boolean
}

interface MapDispatchToProps {
    deleteNotebook: (notebook: Notebook) => void,
    editNotebook: (notebookId: string, notebookData: NewNotebook) => void,
    fetchNotebook: (notebookId: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    deleteNotebook: (notebook) => dispatch(deleteNotebookRequest(notebook)),
    editNotebook: (notebookId, notebookData) => dispatch(editNotebookRequest(notebookId, notebookData)),
    fetchNotebook: (notebookId) => dispatch(fetchNotebookRequest(notebookId)) 
})

const mapStateToProps = (state: AppState, ownProps: OwnProps): MapStateToProps => ({
    notebookData: state.app.userNotebooks[ownProps.match.params.id],
    isNotebookLoading: state.app.isNotebookLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookComponent);