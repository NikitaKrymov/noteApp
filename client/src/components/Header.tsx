import React, { useEffect, useState } from "react";
import theme from "../theme";
import history from '../history';
import HeaderDiv from "../elements/headerElements/HeaderDiv";
import NotebookCreateModal from "./notebookComponents/NotebookCreateModal";
import HeaderButton from "../elements/headerElements/HeaderButton";
import { NewNotebook } from "../types/interfaces";
import { AppState } from "../reducers/rootReducer";
import { Dispatch } from "redux";
import { createNotebookRequest } from "../actions/notebookActions";
import { logoutUserRequest } from "../actions/authActions";
import { connect } from "react-redux";
import FlexBox from "../elements/FlexBox";
import '../css/main.css';

interface OwnProps {
    authStatus: boolean
}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const Header: React.FC<Props> = (props) => {
    const [createNotebook, setCreateNotebook] = useState(false);

    useEffect(() => {
        if (!props.authStatus){
            history.push('/');
        }
    }, [props.authStatus])
    
    return(
        <HeaderDiv className="appDiv">
            {createNotebook ? <NotebookCreateModal closeCreateNotebook={setCreateNotebook} createNotebook={props.createNotebook} userId={props.userId} /> : null}
            <HeaderButton onClick={() => history.push('/')}>
                <FlexBox theme={{ flexDirection: theme.flexDirection.row }}>
                    <FlexBox theme={{ justifyContent: theme.justifyContent.flexStart, alignItems: theme.alignItems.center}}>
                        Dashboard
                    </FlexBox>
                </FlexBox>
            </HeaderButton>
            <HeaderButton 
             
                style={{
                    opacity: props.authStatus ? '1' : '0'
                }}
                onClick={() => setCreateNotebook(!createNotebook)}
            >
                Open Notebook
            </HeaderButton>
            <HeaderButton style={{ marginRight: '1em' }} onClick={() => props.authStatus ? props.logout() : null}>
                {props.authStatus ? 'Log out' : 'Log In'}
            </HeaderButton>
        </HeaderDiv>
    );
}

interface MapStateToProps {
    userId: string
}

interface MapDispatchToProps {
    createNotebook: (newNotebook: NewNotebook) => void,
    logout: () => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    userId: state.app.userId,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    createNotebook: (newNotebook) => dispatch(createNotebookRequest(newNotebook)),
    logout: () => dispatch(logoutUserRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);