import React from 'react';
import { connect } from 'react-redux';
import DashboardDiv from '../../elements/dashboardElements/DashboardDiv';
import DashboardElement from './DashboardElement';

import { AppState } from '../../reducers/rootReducer';
import { Notebook } from '../../types/interfaces';
import LoadingPage from '../../elements/LoadingPage';
import '../../css/main.css';
import FlexBox from '../../elements/FlexBox';
import theme from '../../theme';
import { readBuilderProgram } from 'typescript';

const TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    flexDirection: theme.flexDirection.row,
    alignItems: theme.alignItems.flexStart,
    flexWrap: theme.flexWrap.wrap
}

const renderWelcome = (setText: React.Dispatch<React.SetStateAction<string>>) => {
    setText('To open a new Notebook press "Open Notebook" button at the top of the page');
}

type Props = MapStateToProps;

const WebPlannerDashboard: React.FC<Props> = (props) => {
    const [text, setText] = React.useState('Welcome');
    if (props.isNotebookLoading){
        return (
            <LoadingPage>
                <div className="spinner">

                </div>
            </LoadingPage>
        );       
    } else {
        if (!props.notebooks.length) {
            setTimeout(() => renderWelcome(setText), 4000);
            return (
                <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3em'}}>
                    <div className="showUp" style={{ padding: '3em', textAlign: 'center'}} >
                        {text}
                    </div>
                </div>
            );
        } else {
            return(
                <DashboardDiv>
                    <FlexBox theme={TASKLIST_FLEXBOX_THEME} style={{ width: '66em' }}>
                        {props.notebooks.map((notebook, i) => {
                            return(
                                <DashboardElement 
                                    key={i} 
                                    notebook={notebook}
                                />
                            );
                        })}
                    </FlexBox>
                </DashboardDiv>
            );
        }
    }
}

interface MapStateToProps {
    notebooks: Notebook[],
    isNotebookLoading: boolean
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    notebooks: Object.values(state.app.userNotebooks),
    isNotebookLoading: state.app.isNotebookLoading
})

export default connect(mapStateToProps)(WebPlannerDashboard);