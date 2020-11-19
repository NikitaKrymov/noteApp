import React from 'react';
import { connect } from 'react-redux';
import DashboardDiv from '../../elements/dashboardElements/DashboardDiv';
import DashboardElement from './DashboardElement';

import { AppState } from '../../reducers/rootReducer';
import { Notebook } from '../../types/interfaces';

type Props = MapStateToProps;

const WebPlannerDashboard: React.FC<Props> = (props) => {

    if (props.isNotebookLoading){
        console.log('was loading')
        return (
            <div>
                Loading
            </div>
        );       
    } else {
        console.log(props.notebooks)
        return(
            <DashboardDiv>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', maxWidth: '66em'}} >
                    {props.notebooks.map((notebook, i) => {
                        return(
                            <DashboardElement 
                                key={i} 
                                notebook={notebook}
                            />
                        );
                    })}
                </div>
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