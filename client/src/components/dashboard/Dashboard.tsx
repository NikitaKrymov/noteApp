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

const TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    flexDirection: theme.flexDirection.row,
    flexWrap: theme.flexWrap.wrap
}

type Props = MapStateToProps;

const WebPlannerDashboard: React.FC<Props> = (props) => {

    if (props.isNotebookLoading){
        return (
            <LoadingPage>
                <div className="spinner">

                </div>
            </LoadingPage>
        );       
    } else {
        console.log(props.notebooks)
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

interface MapStateToProps {
    notebooks: Notebook[],
    isNotebookLoading: boolean
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    notebooks: Object.values(state.app.userNotebooks),
    isNotebookLoading: state.app.isNotebookLoading
})

export default connect(mapStateToProps)(WebPlannerDashboard);