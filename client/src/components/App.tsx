import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchUserRequest } from '../actions/authActions';
import GlobalStyle from '../elements/GlobalStyle';
import GridBox from '../elements/GridBox';
import { AppState } from '../reducers/rootReducer';
import { createRoutes } from '../routes';
import AuthPage from './authComponents/AuthPage';
import Header from './Header';

const routes = createRoutes();

type Props = MapStateToProps & MapDispatchToProps;

const App: React.FC<Props> = (props) => {
    useEffect(() => {
        props.fetchUser();
    })
    if(props.isLoading){
        return(
            <div>
                Loading
            </div>
        );
    } else {
        if (props.authStatus){
                return(
                    <GridBox theme={{ position: 'relative' }}>
                        <GlobalStyle />
                        <Header authStatus={props.authStatus}/>
                        <div style={{ marginTop: '4em' }}>
                            {routes}
                        </div>
                    </GridBox>
                );
        } else {
            return(
                <GridBox theme={{ position: 'fixed' }}>
                    <AuthPage />
                </GridBox>
            );
        }
    }
}

interface MapDispatchToProps {
    fetchUser: () => void
}

interface MapStateToProps {
    authStatus: boolean,
    isLoading: boolean
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    authStatus: state.app.authStatus,
    isLoading: state.app.isUserLoading
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchUser: () => dispatch(fetchUserRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);