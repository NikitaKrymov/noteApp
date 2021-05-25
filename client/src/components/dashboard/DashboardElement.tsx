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
    alignItems: theme.alignItems.flexStart,
    margin: '2em'
}

const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
}

const BUTTON_THEME = {
    color: theme.colors.white,
    //backgroundColor: 'linear-gradient(-45deg, #e73c7e, #23a6d5)',
    hoverColor: theme.colors.white,
    hoverBoxShadow: '0 0 5px black',
    borderRadius: '0.2em',
    boxShadow: '0 0 5px black',
    hoverBorderRadius: '0.5em',
}

interface Props {
    notebook: Notebook
}

const NotebookComponent: React.FC<Props> = (props) => {
    return(
        <DashboardElementDiv 
            onClick={() => history.push(`/${props.notebook._id}`)}
        >
            <FlexBox theme={TOP_FLEXBOX_THEME} style={{ fontSize: '1.2em', borderBottom: '1px solid grey', zIndex: 3 }}>
                <div style={{ margin: '0 1em 0 1em', }}>
                    {props.notebook.title}
                </div>
            </FlexBox>
            <FlexBox theme={MID_FLEXBOX_THEME} style={{ maxWidth: '18em', zIndex: 3 }}>
                {props.notebook.description}
            </FlexBox>
            <FlexBox theme={BOTTOM_FLEXBOX_THEME}>
                <PrimaryButton theme={BUTTON_THEME} className="buttonGradient" style={{ marginBottom: '1.2em'}}>
                    Open
                </PrimaryButton>
            </FlexBox>
        </DashboardElementDiv>
    );
}

export default NotebookComponent;