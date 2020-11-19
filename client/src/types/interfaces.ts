export interface AuthenticateUser {
    username: string,
    password: string
}

export interface AuthenticationError {
    errorCode: number,
    message: string
}

export interface RegistrationError {
    errorCode: number,
    message: string
}

export interface User {
    _id: string
}

export interface Notebook {
    title: string,
    description: string,
    _id: string,
    closedStatus: boolean,
    owner: string
}

export interface Task {
    subject: string,
    _id: string,
    isDone: boolean,
    notebook: string,
    index: Number
}

export interface RegisterUser {
    username: string,
    password: string,
    confirmPassword: string
}

export interface PasswordsValidation {
    password: string,
    confirmPassword: string
}

export interface NewNotebook {
    title: string,
    description?: string,
    owner: string
}

export interface NewTask {
    subject: string,
    notebookId: string
}

export interface AppError {
    code: number,
    message: string
}