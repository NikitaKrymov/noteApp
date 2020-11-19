"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = __importDefault(require("redux-saga"));
const rootSaga_1 = __importDefault(require("../reduxSaga/rootSaga"));
const rootReducer_1 = require("./rootReducer");
const sagaMiddleware = redux_saga_1.default();
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
exports.default = redux_1.createStore(rootReducer_1.rootReducer, composeEnchancers(redux_1.applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga_1.default);
//# sourceMappingURL=store.js.map