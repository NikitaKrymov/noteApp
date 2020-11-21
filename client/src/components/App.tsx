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
import '../css/main.css';
import LoadingPage from '../elements/LoadingPage';

const routes = createRoutes();

type Props = MapStateToProps & MapDispatchToProps;

const App: React.FC<Props> = (props) => {
    useEffect(() => {
        props.fetchUser();
    })
    if(props.isLoading){
        return(
            <LoadingPage>
            <GlobalStyle />
                <div className="spinner">

                </div>
            </LoadingPage>
        );
    } else {
        if (props.authStatus){
                return(
                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <GlobalStyle />
                            <div style={{ position: 'relative', height: '3em' }}>
                                <Header authStatus={props.authStatus}/>
                            </div>
                            <div style={{ position: 'relative' }}>
                                {routes}
                            </div>
                    </div>
                );
        } else {
            return(
                <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <GlobalStyle />
                    <AuthPage />
                </div>
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