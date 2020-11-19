import React from 'react';
import theme from '../../theme';
import history from '../../history';
import FlexBox from '../../elements/FlexBox';
import PrimaryButton from '../../elements/PrimaryButton';
import DashboardElementDiv from '../../elements/dashboardElements/DashboardElementDiv';
import { Notebook } from '../../types/interfaces';



const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center
}

const MID_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    margin: '1em'
}

const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
}

const BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: theme.colors.navy,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em'
}

interface Props {
    notebook: Notebook
}

const NotebookComponent: React.FC<Props> = (props) => {
    return(
        <DashboardElementDiv 
            onClick={() => history.push(`/${props.notebook._id}`)}
        >
            <FlexBox theme={TOP_FLEXBOX_THEME} style={{ fontSize: '1.5em', borderBottom: '1px solid navy' }}>
                {props.notebook.title}
            </FlexBox>
            <FlexBox theme={MID_FLEXBOX_THEME}>
                {props.notebook.description}
            </FlexBox>
            <FlexBox theme={BOTTOM_FLEXBOX_THEME}>
                <PrimaryButton theme={BUTTON_THEME}>
                    Open
                </PrimaryButton>
            </FlexBox>
        </DashboardElementDiv>
    );
}

export default NotebookComponent;