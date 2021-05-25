import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authenticateUser, registerUser, validatePasswordsRequest, validateUsername } from '../../actions/authActions';
import AuthPageDiv from '../../elements/authElements/AuthPageDiv';
import FormDiv from '../../elements/authElements/FormDiv';
import FormInput from '../../elements/authElements/FormInput';
import BlurDiv from '../../elements/BlurDiv';
import ErrorField from '../../elements/errorElements.tsx/ErrorField';
import FlexBox from '../../elements/FlexBox';
import GridBox from '../../elements/GridBox';
import PrimaryButton from '../../elements/PrimaryButton';
import { AppState } from '../../reducers/rootReducer';
import theme from '../../theme';
import { AuthenticateUser, PasswordsValidation, RegisterUser } from '../../types/interfaces';


const LOGIN_FIELDS = [
    {
        label: "Username",
        type: 'text',
    },
    {
        label: "Password",
        type: 'password',
    }
]

const SIGNUP_FIELDS = [
    {
        label: "Username",
        type: 'text',
    },
    {
        label: "Password",
        type: 'password',
    },
    {
        label: 'Confirm Password',
        type: 'password',
    }
]

const SWITCH_BUTTON_STYLE = {
    color: 'navy',
    textDecoration: 'underline',
}

const LEFT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,

}

const RIGHT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column,
}

const SIGNUP_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 4fr'
}

const LOGIN_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 2fr'
}

const BUTTON_THEME = {
    color: theme.colors.white,
    backgroundColor: theme.colors.navy,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 5px grey',
    borderRadius: '1em',
    marginTop: '1em',
}

const GUEST_BUTTON_THEME = {
    color: theme.colors.navy,
    backgroundColor: theme.colors.white,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 5px grey',
    borderRadius: '1em',
    marginTop: '1em',
}

type Props = MapDispatchToProps & MapStateToProps;

const AuthPage: React.FC<Props> = (props) => {
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }, [login])

    if (login) {
        return(
            <AuthPageDiv>
                <FormDiv>
                    <FlexBox theme={LEFT_FLEXBOX_THEME} style={{ fontSize: '4em', color: 'navy', borderRight: '2px solid navy', height: '100%', zIndex: 3 }}>
                        Login
                    </FlexBox>
                    <GridBox theme={LOGIN_RIGHT_GRIDBOX_THEME}>
                        <ErrorField style={{ visibility: props.error ? 'visible' : 'hidden'}}>{props.error}</ErrorField>
                        <FlexBox theme={RIGHT_FLEXBOX_THEME}>
                            <FormInput type={LOGIN_FIELDS[0].type} value={username} placeholder={LOGIN_FIELDS[0].label} onChange={(e) => setUsername(e.target.value)} />
                            <FormInput type={LOGIN_FIELDS[1].type} value={password} placeholder={LOGIN_FIELDS[1].label} onChange={(e) => setPassword(e.target.value)} />
                            <FlexBox theme={{ flexDirection: theme.flexDirection.row }}>
                                <PrimaryButton theme={BUTTON_THEME}  onClick={() => props.authenticateUser({ username, password })} >Login</PrimaryButton>
                                <PrimaryButton theme={GUEST_BUTTON_THEME} style={{ marginLeft: '1em' }}onClick={() => props.authenticateUser({ username: 'Guest', password: 'guest' })} >Login as Guest</PrimaryButton>
                            </FlexBox>
                            <div style={{ marginTop: '1em', zIndex: 3, cursor: 'pointer' }}>
                                Don't have an account? <a style={SWITCH_BUTTON_STYLE} onClick={() => setLogin(false)}>SignUp</a> now!
                            </div>
                        </FlexBox>
                    </GridBox>
                </FormDiv>
            </AuthPageDiv>
        );
    } else {
        return(
            <AuthPageDiv>
                <FormDiv>
                    <FlexBox theme={LEFT_FLEXBOX_THEME} style={{ fontSize: '4em', color: 'navy', borderRight: '2px solid navy', height: '100%', zIndex: 3 }}>
                        Sign Up
                    </FlexBox>
                    <GridBox theme={SIGNUP_RIGHT_GRIDBOX_THEME}>
                        <ErrorField style={{ visibility: props.error ? 'visible' : 'hidden'}}>{props.error}</ErrorField>
                        <FlexBox theme={RIGHT_FLEXBOX_THEME}>
                            <FormInput type={SIGNUP_FIELDS[0].type} value={username} placeholder={SIGNUP_FIELDS[0].label} onChange={(e) => setUsername(e.target.value)} onBlur={() => props.validateUsername(username)} />
                            <FormInput type={SIGNUP_FIELDS[1].type} value={password} placeholder={SIGNUP_FIELDS[1].label} onChange={(e) => setPassword(e.target.value)} />
                            <FormInput type={SIGNUP_FIELDS[2].type} value={confirmPassword} placeholder={SIGNUP_FIELDS[2].label} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={() => props.error.length > 0 ? null : props.validatePasswords({ password, confirmPassword })} />
                            <PrimaryButton theme={BUTTON_THEME} onClick={() => props.error.length > 0 ? null : props.registerUser({ username, password, confirmPassword }) }>SignUp</PrimaryButton>
                            <div style={{ marginTop: '1em', zIndex: 3, cursor: 'pointer' }}>
                                Do you have an account? <a style={SWITCH_BUTTON_STYLE} onClick={() => setLogin(true) }>Log In</a> now!
                            </div>
                        </FlexBox>
                    </GridBox>
                </FormDiv>
            </AuthPageDiv>
        );
    }
}

interface MapDispatchToProps {
    validateUsername: (username: string) => void,
    authenticateUser: (credentials: AuthenticateUser) => void,
    registerUser: (credentials: RegisterUser) => void,
    validatePasswords: (passwords: PasswordsValidation) => void
}

interface MapStateToProps {
    error: string
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    validateUsername: (username) => dispatch(validateUsername(username)),
    authenticateUser: (credentials) => dispatch(authenticateUser(credentials)),
    registerUser: (credentials) => dispatch(registerUser(credentials)),
    validatePasswords: (passwords) => dispatch(validatePasswordsRequest(passwords))
})

const mapStateToProps = (state: AppState): MapStateToProps => ({
    error: state.errors.authError
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);