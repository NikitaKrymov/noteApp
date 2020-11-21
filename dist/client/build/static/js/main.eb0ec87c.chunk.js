"use strict";
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[0], { 20: function (e, t, n) { }, 47: function (e, t, n) { e.exports = n(75); }, 75: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0), a = n.n(r), o = n(22), c = n.n(o), i = n(11), s = n(14), l = n(46), u = n(6), d = n.n(u), m = n(2), f = n(42), b = n.n(f).a.create({ baseURL: "/api/webPlanner", headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST" }, withCredentials: !0 }), p = function (e) { return { type: "AUTH_USER_SUCCESS", payload: e }; }, h = function (e) { return { type: "AUTH_USER_FAILED", payload: e }; }, g = function (e) { return { type: "REG_USER_FAILED", payload: e }; }, E = function (e) { return { type: "FETCH_NOTEBOOKS_REQUEST", payload: e }; }, y = function (e) { return { type: "FETCH_NOTEBOOK_REQUEST", payload: e }; }, v = n(17), x = Object(v.a)(), k = d.a.mark(w), O = d.a.mark(_), j = d.a.mark(I), C = d.a.mark(R), S = d.a.mark(U), T = d.a.mark(D);
            function w(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.get("/validateUsername?username=".concat(e.payload)); }));
                    case 2:
                        if (!(t = n.sent).data.errorCode) {
                            n.next = 6;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "USERNAME_VALIDATION_FAILED", payload: t.data });
                    case 6:
                    case "end": return n.stop();
                } }), k); }
            function _(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0:
                        if (e.payload.password === e.payload.confirmPassword) {
                            n.next = 4;
                            break;
                        }
                        return t = { errorCode: 801, message: "Passwords do not match" }, n.next = 4, Object(m.b)(g(t));
                    case 4:
                    case "end": return n.stop();
                } }), O); }
            function I(e) { var t, n, r; return d.a.wrap((function (a) { for (;;)
                switch (a.prev = a.next) {
                    case 0:
                        if (e.payload.username && e.payload.password) {
                            a.next = 6;
                            break;
                        }
                        return t = { errorCode: 802, message: "Fill all fields" }, a.next = 4, Object(m.b)(h(t));
                    case 4:
                        a.next = 23;
                        break;
                    case 6: return a.next = 8, Object(m.a)((function () { return b.post("/authenticateUser", { credentials: e.payload }); }));
                    case 8:
                        if (!(n = a.sent).data.errorCode) {
                            a.next = 14;
                            break;
                        }
                        return a.next = 12, Object(m.b)(h(n.data));
                    case 12:
                        a.next = 23;
                        break;
                    case 14:
                        if (1e3 !== n.data.code) {
                            a.next = 23;
                            break;
                        }
                        return a.next = 17, Object(m.b)(p(n.data.userData));
                    case 17: return x.push("/"), a.next = 20, Object(m.c)();
                    case 20: return r = a.sent, a.next = 23, Object(m.b)(E(r.app.userId));
                    case 23:
                    case "end": return a.stop();
                } }), j); }
            function R(e) { var t, n; return d.a.wrap((function (r) { for (;;)
                switch (r.prev = r.next) {
                    case 0:
                        if (e.payload.username && e.payload.password && e.payload.confirmPassword) {
                            r.next = 6;
                            break;
                        }
                        return t = { errorCode: 802, message: "Fill all fields" }, r.next = 4, Object(m.b)(g(t));
                    case 4:
                        r.next = 17;
                        break;
                    case 6: return r.next = 8, Object(m.a)((function () { return b.post("/createUser", { credentials: e.payload }); }));
                    case 8:
                        if (900 !== (n = r.sent).data.code) {
                            r.next = 15;
                            break;
                        }
                        return r.next = 12, Object(m.b)({ type: "REG_USER_SUCCESS", payload: "User has been successfully registered" });
                    case 12:
                        window.location.reload(), r.next = 17;
                        break;
                    case 15: return r.next = 17, Object(m.b)(g(n.data.message));
                    case 17:
                    case "end": return r.stop();
                } }), C); }
            function U(e) { var t; return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.a)((function () { return b.get("/current_user"); }));
                    case 2:
                        if ((t = e.sent).data.code) {
                            e.next = 11;
                            break;
                        }
                        return console.log(t), e.next = 7, Object(m.b)(p(t.data));
                    case 7: return e.next = 9, Object(m.b)(E(t.data._id));
                    case 9:
                        e.next = 13;
                        break;
                    case 11: return e.next = 13, Object(m.b)({ type: "FETCH_USER_FAILED", payload: t.data });
                    case 13:
                    case "end": return e.stop();
                } }), S); }
            function D(e) { var t; return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.a)((function () { return b.get("/logout"); }));
                    case 2:
                        if (1e3 !== (t = e.sent).data.status) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 6, Object(m.b)({ type: "LOG_OUT_USER_SUCCESS" });
                    case 6:
                        e.next = 10;
                        break;
                    case 8: return e.next = 10, Object(m.b)({ type: "LOG_OUT_USER_FAILED", payload: t.data });
                    case 10:
                    case "end": return e.stop();
                } }), T); }
            var N = d.a.mark(K), L = d.a.mark(z), A = d.a.mark(Q), B = d.a.mark(H), F = d.a.mark(M);
            function K(e) { var t, n; return d.a.wrap((function (r) { for (;;)
                switch (r.prev = r.next) {
                    case 0: return r.next = 2, Object(m.a)((function () { return b.post("/createNotebook", { newNotebook: e.payload }); }));
                    case 2:
                        if (910 !== (t = r.sent).data.code) {
                            r.next = 12;
                            break;
                        }
                        return r.next = 6, Object(m.c)();
                    case 6: return n = r.sent, x.push("/"), r.next = 10, Object(m.b)(E(n.app.userId));
                    case 10:
                        r.next = 14;
                        break;
                    case 12: return r.next = 14, Object(m.b)({ type: "CREATE_NOTEBOOK_FAILED", payload: t.data.message });
                    case 14:
                    case "end": return r.stop();
                } }), N); }
            function z(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.get("/fetchNotebooks?userId=".concat(e.payload)); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "FETCH_NOTEBOOKS_SUCCESS", payload: t.data.notebookList });
                    case 6:
                        n.next = 10;
                        break;
                    case 8: return n.next = 10, Object(m.b)({ type: "FETCH_NOTEBOOKS_FAILED", payload: t.data });
                    case 10:
                    case "end": return n.stop();
                } }), L); }
            function Q(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.get("/fetchNotebook?notebookId=".concat(e.payload)); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "FETCH_NOTEBOOK_SUCCESS", payload: t.data.notebookData });
                    case 6:
                        n.next = 10;
                        break;
                    case 8: return n.next = 10, Object(m.b)({ type: "FETCH_NOTEBOOK_FAILED", payload: t.data });
                    case 10:
                    case "end": return n.stop();
                } }), A); }
            function H(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.post("/deleteNotebook", { notebookId: e.payload }); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 11;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "DELETE_NOTEBOOK_SUCCESS" });
                    case 6: return n.next = 8, Object(m.b)(E(t.data.userId));
                    case 8:
                        x.push("/"), n.next = 13;
                        break;
                    case 11: return n.next = 13, Object(m.b)({ type: "DELETE_NOTEBOOK_FAILED", payload: t.data });
                    case 13:
                    case "end": return n.stop();
                } }), B); }
            function M(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.post("/editNotebook", { newTitle: e.payload.title, newDescription: e.payload.description, notebookId: e.payload.notebookId }); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 10;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "EDIT_NOTEBOOK_SUCCESS" });
                    case 6: return n.next = 8, Object(m.b)(y(e.payload.notebookId));
                    case 8:
                        n.next = 12;
                        break;
                    case 10: return n.next = 12, Object(m.b)({ type: "EDIT_NOTEBOOK_FAILED", payload: t.data });
                    case 12:
                    case "end": return n.stop();
                } }), F); }
            var P = function (e) { return { type: "FETCH_TASKS_REQUEST", payload: e }; }, G = function (e, t) { return { type: "OPEN_TASK_REQUEST", payload: { taskId: e, notebookId: t } }; }, V = d.a.mark(Z), W = d.a.mark($), J = d.a.mark(ee), X = d.a.mark(te), q = d.a.mark(ne), Y = d.a.mark(re);
            function Z(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.get("/fetchTasks/?notebookId=".concat(e.payload)); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)({ type: "FETCH_TASKS_SUCCESS", payload: t.data.payload });
                    case 6:
                        n.next = 10;
                        break;
                    case 8: return n.next = 10, Object(m.b)({ type: "FETCH_TASKS_FAILED", payload: t.data });
                    case 10:
                    case "end": return n.stop();
                } }), V); }
            function $(e) { return d.a.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return t.next = 2, Object(m.a)((function () { return b.post("/createTask", { task: e.payload }); }));
                    case 2:
                        if (1500 !== t.sent.data.status) {
                            t.next = 8;
                            break;
                        }
                        return t.next = 6, Object(m.b)(P(e.payload.notebookId));
                    case 6:
                        t.next = 8;
                        break;
                    case 8:
                    case "end": return t.stop();
                } }), W); }
            function ee(e) { return d.a.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return t.next = 2, Object(m.a)((function () { return b.post("/finishTask", { taskId: e.payload.taskId }); }));
                    case 2:
                        if (2e3 !== t.sent.data.status) {
                            t.next = 7;
                            break;
                        }
                        return console.log(e.payload.notebookId), t.next = 7, Object(m.b)(P(e.payload.notebookId));
                    case 7:
                    case "end": return t.stop();
                } }), J); }
            function te(e) { return d.a.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return t.next = 2, Object(m.a)((function () { return b.post("/openTask", { taskId: e.payload.taskId }); }));
                    case 2:
                        if (2100 !== t.sent.data.status) {
                            t.next = 6;
                            break;
                        }
                        return t.next = 6, Object(m.b)(P(e.payload.notebookId));
                    case 6:
                    case "end": return t.stop();
                } }), X); }
            function ne(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.post("/saveTask", { editedTask: e.payload }); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)(P(t.data.notebookId));
                    case 6:
                        n.next = 10;
                        break;
                    case 8: return n.next = 10, Object(m.b)({ type: "SAVE_TASK_FAILED", payload: t.data });
                    case 10:
                    case "end": return n.stop();
                } }), q); }
            function re(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return console.log(e.payload), n.next = 3, Object(m.a)((function () { return b.post("/deleteTask", { taskId: e.payload }); }));
                    case 3:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 11;
                            break;
                        }
                        return n.next = 7, Object(m.b)({ type: "DELETE_TASK_SUCCESS" });
                    case 7: return n.next = 9, Object(m.b)(P(e.payload.notebook));
                    case 9:
                        n.next = 13;
                        break;
                    case 11: return n.next = 13, Object(m.b)({ type: "DELETE_TASK_FAILED", payload: t.data });
                    case 13:
                    case "end": return n.stop();
                } }), Y); }
            var ae = d.a.mark(oe);
            function oe() { return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.d)("FETCH_USER_REQUEST", U);
                    case 2: return e.next = 4, Object(m.d)("USERNAME_VALIDATION_REQUEST", w);
                    case 4: return e.next = 6, Object(m.d)("AUTH_USER_REQUEST", I);
                    case 6: return e.next = 8, Object(m.d)("REG_USER_REQUEST", R);
                    case 8: return e.next = 10, Object(m.d)("PASSWORDS_VALIDATION_REQUEST", _);
                    case 10: return e.next = 12, Object(m.d)("CREATE_NOTEBOOK_REQUEST", K);
                    case 12: return e.next = 14, Object(m.d)("FETCH_NOTEBOOKS_REQUEST", z);
                    case 14: return e.next = 16, Object(m.d)("CREATE_TASK_REQUEST", $);
                    case 16: return e.next = 18, Object(m.d)("FETCH_TASKS_REQUEST", Z);
                    case 18: return e.next = 20, Object(m.d)("FINISH_TASK_REQUEST", ee);
                    case 20: return e.next = 22, Object(m.d)("OPEN_TASK_REQUEST", te);
                    case 22: return e.next = 24, Object(m.d)("LOG_OUT_USER_REQUEST", D);
                    case 24: return e.next = 26, Object(m.d)("SAVE_TASK_REQUEST", ne);
                    case 26: return e.next = 28, Object(m.d)("DELETE_TASK_REQUEST", re);
                    case 28: return e.next = 30, Object(m.d)("DELETE_NOTEBOOK_REQUEST", H);
                    case 30: return e.next = 32, Object(m.d)("FETCH_NOTEBOOK_REQUEST", Q);
                    case 32: return e.next = 34, Object(m.d)("EDIT_NOTEBOOK_REQUEST", M);
                    case 34:
                    case "end": return e.stop();
                } }), ae); }
            var ce = n(8), ie = n(26), se = n.n(ie), le = { userId: "", authStatus: !1, userNotebooks: [], notebookTasks: [], isTaskLoading: !0, isNotebookLoading: !0, isUserLoading: !0, currentNotebook: { title: "", description: "", _id: "", closedStatus: !1, owner: "" } }, ue = { authError: "", appError: "" }, de = Object(s.c)({ app: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "AUTH_USER_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { authStatus: !0, userId: t.payload._id, isUserLoading: !1 });
                    case "FETCH_NOTEBOOKS_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { userNotebooks: se.a.mapKeys(t.payload, "_id"), isNotebookLoading: !1 });
                    case "FETCH_TASKS_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { notebookTasks: se.a.mapKeys(t.payload, "index"), isTaskLoading: !1 });
                    case "LOG_OUT_USER_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { authStatus: !1, isTaskLoading: !0, isNotebookLoading: !0, isUserLoading: !0, isInitialTaskLoading: !0 });
                    case "FETCH_USER_FAILED": return Object(ce.a)(Object(ce.a)({}, e), {}, { isUserLoading: !1 });
                    case "DELETE_NOTEBOOK_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { isNotebookLoading: !0 });
                    case "FETCH_TASKS_REQUEST": return Object(ce.a)(Object(ce.a)({}, e), {}, { isTaskLoading: !0 });
                    case "FETCH_NOTEBOOKS_REQUEST": return Object(ce.a)(Object(ce.a)({}, e), {}, { isNotebookLoading: !0 });
                    case "FETCH_NOTEBOOK_REQUEST": return Object(ce.a)(Object(ce.a)({}, e), {}, { isNotebookLoading: !0, notebookTasks: [] });
                    case "FETCH_NOTEBOOK_SUCCESS": return Object(ce.a)(Object(ce.a)({}, e), {}, { currentNotebook: { _id: t.payload._id, title: t.payload.title, description: t.payload.description, owner: t.payload.owner, closedStatus: t.payload.closedStatus }, isNotebookLoading: !1 });
                    default: return e;
                } }, errors: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "AUTH_USER_FAILED":
                    case "REG_USER_FAILED":
                    case "USERNAME_VALIDATION_FAILED": return Object(ce.a)(Object(ce.a)({}, e), {}, { authError: t.payload.message });
                    case "FETCH_TASKS_FAILED":
                    case "FETCH_USER_FAILED":
                    case "DELETE_NOTEBOOK_FAILED": return Object(ce.a)(Object(ce.a)({}, e), {}, { appError: t.payload.message });
                    default: return ue;
                } } }), me = Object(l.a)(), fe = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d, be = Object(s.e)(de, fe(Object(s.a)(me)));
            me.run(oe);
            var pe = n(4), he = n(5);
            function ge() { var e = Object(pe.a)(["\n    body{\n        margin: 0;\n        padding: 0;\n    };\n"]); return ge = function () { return e; }, e; }
            var Ee = Object(he.a)(ge()), ye = n(77), ve = n(10), xe = { colors: { navy: "navy", lightblue: "lightblue", lightgrey: "#DADADA", grey: "grey", white: "white", black: "black" }, flexDirection: { row: "row", column: "column" }, justifyContent: { sa: "space-around", sb: "space-between", se: "space-evenly", center: "center", flexStart: "flex-start", flexEnd: "flex-end" }, gridTemplateColumns: { auto: "auto", two: "1fr 1fr", three: "1fr 1fr 1fr", four: "1fr 1fr 1fr 1fr", five: "1fr 1fr 1fr 1fr 1fr" }, textAlign: { center: "center", left: "left", right: "right" }, alignItems: { center: "center", flexStart: "flex-start", flexEnd: "flex-end" }, fontSize: { one: "1em", two: "2em", three: "3em", four: "4em" }, position: { absolute: "absolute", fixed: "fixed", relative: "relative" }, gridAutoFlow: { column: "column", row: "row" }, flexWrap: { wrap: "wrap" } };
            function ke() { var e = Object(pe.a)(["\n    display: grid;\n    grid-template-columns: ", ";\n    grid-auto-flow: ", ";\n    grid-template-rows: ", ";\n    position: ", ";\n"]); return ke = function () { return e; }, e; }
            var Oe = he.b.div(ke(), (function (e) { return e.theme.gridTemplateColumns; }), (function (e) { return e.theme.gridAutoFlow; }), (function (e) { return e.theme.gridTemplateRows; }), (function (e) { return e.theme.position; }));
            function je() { var e = Object(pe.a)(["\n    text-decoration: none;\n    width: 20em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    border: none;\n    outline: none;\n    padding: 1em;\n    font-size: 1.1em;\n    border-bottom: 1px solid navy;\n    background: none;\n    color: navy;\n    z-index:3;\n    :focus {\n        border-bottom: 1px solid navy;\n    }\n    ::placeholder{\n        color: navy;\n    }\n"]); return je = function () { return e; }, e; }
            var Ce = he.b.input(je());
            function Se() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: ", ";\n    flex-direction: ", ";\n    text-align: ", ";\n    align-items: ", ";\n    margin: ", ";\n    padding-right: ", ";\n    padding-top: ", ";\n    padding-left: ", ";\n    padding-bottom: ", ";\n    position: ", ";\n    font-size: ", ";\n    flex-wrap: ", ";\n"]); return Se = function () { return e; }, e; }
            var Te = he.b.div(Se(), (function (e) { return e.theme.justifyContent; }), (function (e) { return e.theme.flexDirection; }), (function (e) { return e.theme.textAlign; }), (function (e) { return e.theme.alignItems; }), (function (e) { return e.theme.margin; }), (function (e) { return e.theme.paddingRight; }), (function (e) { return e.theme.paddingTop; }), (function (e) { return e.theme.paddingLeft; }), (function (e) { return e.theme.paddingBottom; }), (function (e) { return e.theme.position; }), (function (e) { return e.theme.fontSize; }), (function (e) { return e.theme.flexWrap; }));
            function we() { var e = Object(pe.a)(["\n    position: fixed;\n    background: white;\n    border-radius: 1em;\n    box-shadow: 0 0 10px black;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    text-align: center;\n    width: 40em;\n    height: 25em;\n    display: grid;\n    z-index: 100;\n    margin-top: 15em;\n"]); return we = function () { return e; }, e; }
            var _e = he.b.div(we());
            function Ie() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em 2em 0.5em 2em;\n    color: ", ";\n    border: ", ";\n    border-radius: 0.8em;\n    background: ", ";\n    box-shadow: ", ";\n    font-size: 1.2em;\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n    margin-bottom: ", ";\n    z-index: 3;\n    :hover {\n        color: ", ";\n        border: ", ";\n        background: ", ";\n        box-shadow: ", ";\n        border-radius: ", ";\n        cursor: pointer;\n    }\n"]); return Ie = function () { return e; }, e; }
            var Re = he.b.div(Ie(), (function (e) { return e.theme.color; }), (function (e) { return e.theme.border; }), (function (e) { return e.theme.backgroundColor; }), (function (e) { return e.theme.boxShadow; }), (function (e) { return e.theme.marginTop; }), (function (e) { return e.theme.marginRight; }), (function (e) { return e.theme.marginLeft; }), (function (e) { return e.theme.marginBottom; }), (function (e) { return e.theme.hoverColor; }), (function (e) { return e.theme.hoverBorder; }), (function (e) { return e.theme.hoverBackgroundColor; }), (function (e) { return e.theme.hoverBoxShadow; }), (function (e) { return e.theme.hoverBorderRadius; })), Ue = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, De = { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.center, flexDirection: xe.flexDirection.column }, Ne = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems, flexDirection: xe.flexDirection.row }, Le = [{ label: "Title", id: 1, type: "text" }, { label: "Description", id: 2, type: "text" }], Ae = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, Be = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, Fe = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, Ke = function (e) { var t = Object(r.useState)(e.title), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = Object(r.useState)(e.description), s = Object(ve.a)(i, 2), l = s[0], u = s[1], d = Object(r.useState)(!1), m = Object(ve.a)(d, 2), f = m[0], b = m[1], p = e.notebookId; return console.log(p), a.a.createElement(_e, { style: { gridTemplateRows: "2fr 2fr 8fr 1fr" } }, a.a.createElement(Te, { theme: Ue, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, e.modalMame), a.a.createElement(Te, { theme: Fe, style: { opacity: f ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Title field can not be empty!"), a.a.createElement(Te, { theme: De }, a.a.createElement(Ce, { type: Le[0].type, placeholder: Le[0].label, value: o, onChange: function (e) { return c(e.target.value); } }), a.a.createElement(Ce, { type: Le[1].type, placeholder: Le[1].label, value: l, onChange: function (e) { return u(e.target.value); } })), a.a.createElement(Te, { theme: Ne }, a.a.createElement(Re, { theme: Ae, onClick: function () { return e.closeModal(!1); } }, "Cancel"), a.a.createElement(Re, { theme: Be, onClick: function () { e.closeModal(!1), o.length > 0 ? e.saveNotebook(o, l, p) : b(!0); } }, "Save"))); };
            function ze() { var e = Object(pe.a)(["\n    margin-top: 3em;\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    width: 60em;\n    height: 45em;\n    box-shadow: 0 0 10px black;\n    border-radius: 0.5em;\n    background: white;\n    overflow-y: 'hidden';\n"]); return ze = function () { return e; }, e; }
            var Qe = he.b.div(ze());
            function He() { var e = Object(pe.a)(["\n    padding: 0.5em;\n    border-radius: 5%;\n    :hover {\n        color: navy;\n        cursor: pointer;\n    }\n"]); return He = function () { return e; }, e; }
            var Me = he.b.div(He());
            function Pe() { var e = Object(pe.a)(["\n    width: 100%;\n    background: grey;\n    height: 60%;\n    transition: 0.2s;\n    box-shadow: 1px 1px 3px black;\n"]); return Pe = function () { return e; }, e; }
            var Ge = he.b.div(Pe());
            function Ve() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: center;\n    width: 2em;\n    height: 2em;\n    box-shadow: 0 0 3px navy;\n    border-radius: 50%;\n    color: white;\n    background-color: navy;\n    margin-right: 1em;\n    :hover {\n        background-color: white;\n        color: navy;\n        box-shadow: 0 0 3px navy;\n        cursor: pointer;\n    }\n"]); return Ve = function () { return e; }, e; }
            var We = he.b.div(Ve());
            function Je() { var e = Object(pe.a)(["\n    padding: 0.5em;\n    border-radius: 5%;\n    :hover {\n        padding: 0.5em;\n        color: red;\n        cursor: pointer;\n    }\n"]); return Je = function () { return e; }, e; }
            var Xe = he.b.div(Je());
            function qe() { var e = Object(pe.a)(["\n    text-decoration: none;\n    background-color: none;\n    font-size: 1.5em;\n    width: 0.8em;\n    height: 0.8em;\n    :hover {\n        cursor: pointer;\n        border: '1px solid navy';\n    }\n"]); return qe = function () { return e; }, e; }
            var Ye = he.b.input(qe());
            function Ze() { var e = Object(pe.a)(["\n    box-shadow: 0 0 4px black;\n    position: relative;\n    width: 100%;\n    padding-bottom: 1em;\n    padding-top: 1em;\n    margin-top: 1em;\n    border-radius: 0.5em;\n"]); return Ze = function () { return e; }, e; }
            var $e = he.b.div(Ze());
            function et() { var e = Object(pe.a)(["\n    box-shadow: 0 0 3px navy;\n    padding-bottom: 1em;\n    padding-top: 1em;\n    border-radius: 0.5em;\n    position: relative;\n    width: 100%;\n"]); return et = function () { return e; }, e; }
            var tt = he.b.div(et());
            function nt() { var e = Object(pe.a)(["\n    word-wrap: break word;\n    color: black;\n    max-width: 100%;\n    padding: 0.5em;\n    position: relative;\n    text-decoration: none;\n    z-index: 3;\n"]); return nt = function () { return e; }, e; }
            var rt = he.b.div(nt());
            function at() { var e = Object(pe.a)(["\n    width: 90%;\n    position: relative;\n    text-decoration: none;\n    outline: none;\n    color: navy;\n    padding: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n"]); return at = function () { return e; }, e; }
            var ot = he.b.textarea(at()), ct = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center, fontSize: "1.4em" }, it = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems, flexDirection: xe.flexDirection.row }, st = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, lt = { color: xe.colors.black, backgroundColor: "red", hoverColor: "red", hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px red", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, ut = function (e) { return a.a.createElement(_e, { style: { height: "10em", gridTemplateRows: "1fr 1fr" } }, a.a.createElement(Te, { theme: ct }, "Are you sure you want to delete this task?"), a.a.createElement(Te, { theme: it }, a.a.createElement(Re, { theme: st, onClick: function () { return e.closeModal(!1); } }, "Cancel"), a.a.createElement(Re, { theme: lt, onClick: function () { e.action(e.object), e.closeModal(!1); } }, "Delete"))); }, dt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, mt = { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.center }, ft = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, bt = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginRight: "1em" }, pt = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginRight: "1em" }, ht = Object(i.b)(null, (function (e) { return { finishTask: function (t, n) { return e(function (e, t) { return { type: "FINISH_TASK_REQUEST", payload: { taskId: e, notebookId: t } }; }(t, n)); }, openTask: function (t, n) { return e(G(t, n)); }, deleteTask: function (t) { return e(function (e) { return { type: "DELETE_TASK_REQUEST", payload: e }; }(t)); }, saveTask: function (t, n) { return e(G(t, n)); } }; }))((function (e) { var t = a.a.useState(!1), n = Object(ve.a)(t, 2), r = n[0], o = n[1], c = a.a.useState(e.task.subject), i = Object(ve.a)(c, 2), s = i[0], l = i[1], u = a.a.useState(!1), d = Object(ve.a)(u, 2), m = d[0], f = d[1]; return r ? a.a.createElement(tt, null, a.a.createElement(Oe, { style: { display: "grid", gridTemplateColumns: "20fr 1fr 1fr", position: "relative" } }, a.a.createElement(ot, { value: s, onChange: function (e) { return l(e.target.value); } }), a.a.createElement(Re, { theme: bt, onClick: function () { return o(!1); } }, "Cancel"), a.a.createElement(Re, { theme: pt, onClick: function () { e.saveTask(e.task._id, s), o(!1); } }, "Save"))) : a.a.createElement("div", { style: { position: "relative" } }, m ? a.a.createElement(ut, { closeModal: f, action: e.deleteTask, object: e.task }) : null, a.a.createElement($e, { style: { backgroundColor: e.task.isDone ? "lightgreen" : "white" } }, a.a.createElement(Oe, { style: { position: "relative", gridTemplateColumns: "1fr 1fr 19fr 1fr 1fr" } }, a.a.createElement(Te, { theme: dt }, a.a.createElement(Ye, { type: "checkbox", defaultChecked: !!e.task.isDone, onChange: function (t) { t.target.checked ? e.finishTask(e.task._id, e.task.notebook) : e.openTask(e.task._id, e.task.notebook); } })), a.a.createElement(Te, { theme: mt }, e.number + 1, "."), a.a.createElement(rt, null, e.task.subject), a.a.createElement(Te, { theme: ft }, a.a.createElement(Me, { onClick: function () { return o(!0); } }, a.a.createElement("i", { className: "fas fa-pen" }))), a.a.createElement(Te, { theme: ft }, a.a.createElement(Xe, { onClick: function () { return f(!0); } }, a.a.createElement("i", { className: "fas fa-trash-alt" })))))); })), gt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, Et = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center, flexDirection: xe.flexDirection.column }, yt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems, flexDirection: xe.flexDirection.row }, vt = [{ label: "Subject", id: 1, type: "text" }], xt = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, kt = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, Ot = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, jt = function (e) { var t = Object(r.useState)(""), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = Object(r.useState)(!1), s = Object(ve.a)(i, 2), l = s[0], u = s[1], d = e.notebookId; return a.a.createElement(_e, { style: { gridTemplateRows: "2fr 2fr 8fr 1fr" } }, a.a.createElement(Te, { theme: gt, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, "Add New Task"), a.a.createElement(Te, { theme: Ot, style: { opacity: l ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Subject field can not be empty!"), a.a.createElement(Te, { theme: Et }, a.a.createElement(ot, { placeholder: vt[0].label, value: o, onChange: function (e) { return c(e.target.value); }, style: { height: "100%", border: "1px solid navy", borderRadius: "1em" } })), a.a.createElement(Te, { theme: yt }, a.a.createElement(Re, { theme: xt, onClick: function () { return e.closeCreateTask(); } }, "Cancel"), a.a.createElement(Re, { theme: kt, onClick: function () { o.length > 0 ? e.createTask({ subject: o, notebookId: d }) : u(!0), e.closeCreateTask(); } }, "Add"))); }, Ct = (n(20), { justifyContent: "space-around", alignItems: "center" }), St = function (e, t) { console.log(e, t); var n = 100 / e * t; return console.log(n), { backgroundColor: "green", width: "".concat(n, "%") }; }, Tt = Object(i.b)((function (e) { return { notebookTasks: Object.values(e.app.notebookTasks), isTaskLoading: e.app.isTaskLoading }; }), (function (e) { return { createTask: function (t) { return e(function (e) { return { type: "CREATE_TASK_REQUEST", payload: e }; }(t)); }, fetchTasks: function (t) { return e(P(t)); } }; }))((function (e) { var t = Object(r.useState)(!1), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = Object(r.useState)(0), s = Object(ve.a)(i, 2), l = s[0], u = s[1]; return Object(r.useEffect)((function () { e.fetchTasks(e.notebookId); }), []), Object(r.useEffect)((function () { !function (e, t) { var n = 0; e.map((function (e, t) { return e.isDone ? n++ : n; })), t(n); }(e.notebookTasks, u); }), [e.notebookTasks]), a.a.createElement("div", null, e.isTaskLoading ? a.a.createElement("div", { className: "spinner", style: { position: "fixed", top: "calc(50% - 15px)", left: "calc(50% - 15px)" } }) : null, o ? a.a.createElement(jt, { closeCreateTask: function () { return c(!1); }, createTask: e.createTask, notebookId: e.notebookId }) : null, a.a.createElement(Oe, { style: { gridTemplateColumns: "1fr 20fr 2fr", marginTop: "0.5em" } }, a.a.createElement(Te, { theme: Ct }, a.a.createElement("i", { style: { fontSize: "1.5em", borderRadius: "50%", color: e.notebookTasks.length === l ? "white" : "black", border: e.notebookTasks.length === l ? "1px solid green" : "0px solid black", backgroundColor: e.notebookTasks.length === l ? "green" : "white" }, className: "far fa-check-circle" })), a.a.createElement(Te, { theme: Ct }, e.isTaskLoading ? null : a.a.createElement(Ge, { style: St(e.notebookTasks.length, l) })), a.a.createElement(Te, { theme: Ct }, a.a.createElement(We, { onClick: function () { return c(!0); } }, a.a.createElement("div", { style: { display: "flex", alignItems: "center" } }, "+")))), a.a.createElement(Te, { theme: { justifyContent: xe.justifyContent.center, flexDirection: xe.flexDirection.column }, style: { position: "relative", margin: "1em" } }, e.notebookTasks.map((function (e, t) { return a.a.createElement("div", { key: e._id, style: { position: "relative" } }, a.a.createElement(ht, { task: e, number: t })); })))); })), wt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center, fontSize: "1.4em" }, _t = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems, flexDirection: xe.flexDirection.row }, It = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, Rt = { color: xe.colors.black, backgroundColor: "red", hoverColor: "red", hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 5px red", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, Ut = function (e) { return console.log(e.object), a.a.createElement(_e, { style: { height: "10em", gridTemplateRows: "1fr 1fr" } }, a.a.createElement(Te, { theme: wt }, "Are you sure you want to delete this notebook?"), a.a.createElement(Te, { theme: _t }, a.a.createElement(Re, { theme: It, onClick: function () { return e.closeModal(!1); } }, "Cancel"), a.a.createElement(Re, { theme: Rt, onClick: function () { e.action(e.object), e.closeModal(!1); } }, "Delete"))); };
            function Dt() { var e = Object(pe.a)(["\n    position: relative;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    font-size: 3em;\n    z-index: 16;\n    color: black;\n"]); return Dt = function () { return e; }, e; }
            var Nt = he.b.div(Dt()), Lt = { justifyContent: xe.justifyContent.sb }, At = { borderBottom: "1px solid navy", width: "100%", marginTop: "1em", paddingBottom: "1em", fontSize: "1.5em", zIndex: 3 }, Bt = { justifyContent: xe.justifyContent.flexStart, flexDirection: xe.flexDirection.column }, Ft = { justifyContent: xe.justifyContent.flexEnd, alignItems: xe.alignItems.flexStart, marginRight: "1em" }, Kt = { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.flexStart, marginTop: "1em" }, zt = { gridTemplateRows: "1fr 1fr" }, Qt = { justifyContent: "center", alignItems: "center" }, Ht = { justifyContent: "center", alignItems: "flex-end" }, Mt = Object(i.b)((function (e, t) { return { notebookData: e.app.currentNotebook, isNotebookLoading: e.app.isNotebookLoading }; }), (function (e) { return { deleteNotebook: function (t) { return e(function (e) { return { type: "DELETE_NOTEBOOK_REQUEST", payload: e }; }(t)); }, editNotebook: function (t, n, r) { return e(function (e, t, n) { return { type: "EDIT_NOTEBOOK_REQUEST", payload: { title: e, description: t, notebookId: n } }; }(t, n, r)); }, fetchNotebook: function (t) { return e(y(t)); } }; }))((function (e) { var t = a.a.useState(!1), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = a.a.useState(!1), s = Object(ve.a)(i, 2), l = s[0], u = s[1]; return Object(r.useEffect)((function () { e.fetchNotebook(e.match.params.id); }), [e.match.params.id]), console.log(e), e.isNotebookLoading ? a.a.createElement(Nt, null, a.a.createElement("div", { className: "spinner" })) : (console.log(e.notebookData), a.a.createElement(Te, { style: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }, className: "noScroll" }, l ? a.a.createElement(Ut, { closeModal: u, action: e.deleteNotebook, object: e.notebookData }) : null, o ? a.a.createElement(Ke, { modalMame: "Edit Notebook", closeModal: c, notebookId: e.notebookData._id, title: e.notebookData.title, userId: e.notebookData.owner, description: e.notebookData.description, saveNotebook: e.editNotebook }) : null, a.a.createElement(Te, { theme: { justifyContent: xe.justifyContent.center } }, a.a.createElement(Qe, null, a.a.createElement(Te, { theme: Lt, style: At }, a.a.createElement(Te, { onClick: function () { return x.push("/"); }, theme: Kt, style: { cursor: "pointer" } }, a.a.createElement(Me, null, a.a.createElement("i", { style: { fontSize: "1em", marginLeft: "1em" }, className: "fas fa-arrow-left" }))), a.a.createElement(Oe, { theme: zt, style: { margin: "0 1em 0 1em" } }, a.a.createElement(Te, { theme: Qt }, a.a.createElement("div", null, e.notebookData.title), a.a.createElement(Me, { onClick: function () { return c(!0); } }, a.a.createElement("i", { className: "fas fa-pen" }))), a.a.createElement(Te, { theme: Ht, style: { fontSize: "0.8em" } }, e.notebookData.description)), a.a.createElement(Te, { style: Ft, onClick: function (e) { u(!0); } }, a.a.createElement(Xe, null, a.a.createElement("i", { className: "fas fa-trash-alt" })))), a.a.createElement(Te, { theme: Bt, style: { padding: "1em", height: "85%", position: "relative", overflow: "scroll", borderRadius: "1em", marginTop: "1em" } }, a.a.createElement(Tt, { notebookId: e.notebookData._id })))))); }));
            function Pt() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-top: 5em;\n"]); return Pt = function () { return e; }, e; }
            var Gt = he.b.div(Pt());
            function Vt() { var e = Object(pe.a)(["\n    display: grid;\n    width: 20em;\n    margin: 1em;\n    height: 20em;\n    box-shadow: 0 0 5px black;\n    border-radius: 0.5em;\n    grid-template-rows: 1fr 3fr 1fr;\n    position: relative;\n    transition: 0.2s;\n    :hover {\n        transform: translateY(-0.2em);\n        cursor: pointer;\n        box-shadow: 0 0 10px navy;\n    }\n    background: inherit;\n    :after{\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: white;\n        opacity: 0.5;\n        position: absolute;\n        border-radius: 0.5em;\n        z-index: 2;\n    }\n"]); return Vt = function () { return e; }, e; }
            var Wt = he.b.div(Vt()), Jt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, Xt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center, margin: "1em" }, qt = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, Yt = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 10px navy", borderRadius: "1em" }, Zt = function (e) { return a.a.createElement(Wt, { onClick: function () { return x.push("/".concat(e.notebook._id)); } }, a.a.createElement(Te, { theme: Jt, style: { fontSize: "1.5em", borderBottom: "1px solid navy", zIndex: 3 } }, e.notebook.title), a.a.createElement(Te, { theme: Xt, style: { zIndex: 3 } }, e.notebook.description), a.a.createElement(Te, { theme: qt }, a.a.createElement(Re, { theme: Yt }, "Open"))); }, $t = { justifyContent: xe.justifyContent.center, flexDirection: xe.flexDirection.row, alignItems: xe.alignItems.flexStart, flexWrap: xe.flexWrap.wrap }, en = Object(i.b)((function (e) { return { notebooks: Object.values(e.app.userNotebooks), isNotebookLoading: e.app.isNotebookLoading }; }))((function (e) { return e.isNotebookLoading ? a.a.createElement(Nt, null, a.a.createElement("div", { className: "spinner" })) : a.a.createElement(Gt, null, a.a.createElement(Te, { theme: $t, style: { width: "66em" } }, e.notebooks.map((function (e, t) { return a.a.createElement(Zt, { key: t, notebook: e }); })))); }));
            function tn() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]); return tn = function () { return e; }, e; }
            var nn = he.b.div(tn());
            function rn() { var e = Object(pe.a)(["\n    width: 50em;\n    height: 40em;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 2fr 3fr;\n    border-radius: 0.5em;\n    box-shadow: 2px 2px 10px black;\n    position: relative;\n    background: inherit;\n    :after{\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: white;\n        opacity: 0.2;\n        position: absolute;\n        border-radius: 0.5em;\n        z-index: 2;\n    }\n"]); return rn = function () { return e; }, e; }
            var an = he.b.div(rn());
            function on() { var e = Object(pe.a)(["\n    display: flex;\n    color: red;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    box-shadow: 0 0 3px red;\n    border-radius: 1em;\n    margin: 1em;\n"]); return on = function () { return e; }, e; }
            var cn = he.b.div(on()), sn = [{ label: "Username", type: "text" }, { label: "Password", type: "password" }], ln = [{ label: "Username", type: "text" }, { label: "Password", type: "password" }, { label: "Confirm Password", type: "password" }], un = { color: "navy", textDecoration: "underline" }, dn = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, mn = { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.center, flexDirection: xe.flexDirection.column }, fn = { gridTemplateRows: "1fr 4fr" }, bn = { gridTemplateRows: "1fr 2fr" }, pn = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 10px navy", borderRadius: "1em", marginTop: "1em", boxShadow: "1px 1px 5px black" }, hn = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 10px navy", borderRadius: "1em", marginTop: "1em", boxShadow: "1px 1px 5px black" }, gn = Object(i.b)((function (e) { return { error: e.errors.authError }; }), (function (e) { return { validateUsername: function (t) { return e(function (e) { return { type: "USERNAME_VALIDATION_REQUEST", payload: e }; }(t)); }, authenticateUser: function (t) { return e({ type: "AUTH_USER_REQUEST", payload: t }); }, registerUser: function (t) { return e(function (e) { return { type: "REG_USER_REQUEST", payload: e }; }(t)); }, validatePasswords: function (t) { return e(function (e) { return { type: "PASSWORDS_VALIDATION_REQUEST", payload: e }; }(t)); } }; }))((function (e) { var t = Object(r.useState)(!0), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = Object(r.useState)(""), s = Object(ve.a)(i, 2), l = s[0], u = s[1], d = Object(r.useState)(""), m = Object(ve.a)(d, 2), f = m[0], b = m[1], p = Object(r.useState)(""), h = Object(ve.a)(p, 2), g = h[0], E = h[1]; return Object(r.useEffect)((function () { u(""), b(""), E(""); }), [o]), o ? a.a.createElement(nn, null, a.a.createElement(an, null, a.a.createElement(Te, { theme: dn, style: { fontSize: "4em", color: "navy", borderRight: "2px solid navy", height: "100%", zIndex: 3 } }, "Login"), a.a.createElement(Oe, { theme: bn }, a.a.createElement(cn, { style: { visibility: e.error ? "visible" : "hidden" } }, e.error), a.a.createElement(Te, { theme: mn }, a.a.createElement(Ce, { type: sn[0].type, value: l, placeholder: sn[0].label, onChange: function (e) { return u(e.target.value); } }), a.a.createElement(Ce, { type: sn[1].type, value: f, placeholder: sn[1].label, onChange: function (e) { return b(e.target.value); } }), a.a.createElement(Te, { theme: { flexDirection: xe.flexDirection.row } }, a.a.createElement(Re, { theme: pn, onClick: function () { return e.authenticateUser({ username: l, password: f }); } }, "Login"), a.a.createElement(Re, { theme: hn, style: { marginLeft: "1em" }, onClick: function () { return e.authenticateUser({ username: "Guest", password: "guest" }); } }, "Login as Guest")), a.a.createElement("div", { style: { marginTop: "1em", zIndex: 3, cursor: "pointer" } }, "Don't have an account? ", a.a.createElement("a", { style: un, onClick: function () { return c(!1); } }, "SignUp"), " now!"))))) : a.a.createElement(nn, null, a.a.createElement(an, null, a.a.createElement(Te, { theme: dn, style: { fontSize: "4em", color: "navy", borderRight: "2px solid navy", height: "100%", zIndex: 3 } }, "Sign Up"), a.a.createElement(Oe, { theme: fn }, a.a.createElement(cn, { style: { visibility: e.error ? "visible" : "hidden" } }, e.error), a.a.createElement(Te, { theme: mn }, a.a.createElement(Ce, { type: ln[0].type, value: l, placeholder: ln[0].label, onChange: function (e) { return u(e.target.value); }, onBlur: function () { return e.validateUsername(l); } }), a.a.createElement(Ce, { type: ln[1].type, value: f, placeholder: ln[1].label, onChange: function (e) { return b(e.target.value); } }), a.a.createElement(Ce, { type: ln[2].type, value: g, placeholder: ln[2].label, onChange: function (e) { return E(e.target.value); }, onBlur: function () { return e.error.length > 0 ? null : e.validatePasswords({ password: f, confirmPassword: g }); } }), a.a.createElement(Re, { theme: pn, onClick: function () { return e.error.length > 0 ? null : e.registerUser({ username: l, password: f, confirmPassword: g }); } }, "SignUp"), a.a.createElement("div", { style: { marginTop: "1em", zIndex: 3, cursor: "pointer" } }, "Do you have an account? ", a.a.createElement("a", { style: un, onClick: function () { return c(!0); } }, "Log In"), " now!"))))); }));
            function En() { var e = Object(pe.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 0.5em;\n    color: white;\n    padding-right: 1em;\n    z-index: 15;\n    box-shadow: 0 0 10px black;\n"]); return En = function () { return e; }, e; }
            var yn = he.b.div(En()), vn = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, xn = { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.center, flexDirection: xe.flexDirection.column }, kn = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems, flexDirection: xe.flexDirection.row }, On = [{ label: "Title", id: 1, type: "text" }, { label: "Description", id: 2, type: "text" }], jn = { color: xe.colors.navy, backgroundColor: xe.colors.white, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, Cn = { color: xe.colors.white, backgroundColor: xe.colors.navy, hoverColor: xe.colors.navy, hoverBackgroundColor: xe.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, Sn = { justifyContent: xe.justifyContent.center, alignItems: xe.alignItems.center }, Tn = function (e) { var t = Object(r.useState)(""), n = Object(ve.a)(t, 2), o = n[0], c = n[1], i = Object(r.useState)(""), s = Object(ve.a)(i, 2), l = s[0], u = s[1], d = Object(r.useState)(!1), m = Object(ve.a)(d, 2), f = m[0], b = m[1], p = e.userId; return console.log(p), a.a.createElement(_e, { style: { gridTemplateRows: "2fr 2fr 8fr 1fr" } }, a.a.createElement(Te, { theme: vn, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, "Open New Notebook"), a.a.createElement(Te, { theme: Sn, style: { opacity: f ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Title field can not be empty!"), a.a.createElement(Te, { theme: xn }, a.a.createElement(Ce, { type: On[0].type, placeholder: On[0].label, value: o, onChange: function (e) { return c(e.target.value); } }), a.a.createElement(Ce, { type: On[1].type, placeholder: On[1].label, value: l, onChange: function (e) { return u(e.target.value); } })), a.a.createElement(Te, { theme: kn }, a.a.createElement(Re, { theme: jn, onClick: function () { return e.closeCreateNotebook(!1); } }, "Cancel"), a.a.createElement(Re, { theme: Cn, onClick: function () { e.closeCreateNotebook(!1), o.length > 0 ? e.createNotebook({ title: o, description: l, owner: p }) : b(!0); } }, "Create"))); };
            function wn() { var e = Object(pe.a)(["\n    background: ", ";\n    border: ", ";\n    color: ", ";\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    font-size: 1.5em;\n    padding: 0.5em 2em 0.5em 2em;\n    transition: 0.1s;\n    :hover {\n        color: white;\n        cursor: pointer;\n        font-size: ", ";\n        text-decoration: ", ";\n        box-shadow: 0 0 5px black;\n        border-radius: 0.5em;\n        transition: 0.1s;\n    }\n"]); return wn = function () { return e; }, e; }
            var _n = he.b.div(wn(), (function (e) { return e.theme.backgroundColor; }), (function (e) { return e.theme.border; }), (function (e) { return e.theme.color; }), (function (e) { return e.theme.hoverFontSize; }), (function (e) { return e.theme.hoverTextDecoration; })), In = Object(i.b)((function (e) { return { userId: e.app.userId }; }), (function (e) { return { createNotebook: function (t) { return e(function (e) { return { type: "CREATE_NOTEBOOK_REQUEST", payload: e }; }(t)); }, logout: function () { return e({ type: "LOG_OUT_USER_REQUEST" }); } }; }))((function (e) { var t = Object(r.useState)(!1), n = Object(ve.a)(t, 2), o = n[0], c = n[1]; return Object(r.useEffect)((function () { e.authStatus || x.push("/"); }), [e.authStatus]), a.a.createElement(yn, { className: "appDiv" }, o ? a.a.createElement(Tn, { closeCreateNotebook: c, createNotebook: e.createNotebook, userId: e.userId }) : null, a.a.createElement(_n, { onClick: function () { return x.push("/"); } }, a.a.createElement(Te, { theme: { flexDirection: xe.flexDirection.row } }, a.a.createElement(Te, { theme: { justifyContent: xe.justifyContent.flexStart, alignItems: xe.alignItems.center } }, "Dashboard"))), a.a.createElement(_n, { style: { opacity: e.authStatus ? "1" : "0" }, onClick: function () { return c(!o); } }, "Open Notebook"), a.a.createElement(_n, { style: { marginRight: "1em" }, onClick: function () { return e.authStatus ? e.logout() : null; } }, e.authStatus ? "Log out" : "Log In")); })), Rn = a.a.createElement(ye.b, { history: x }, a.a.createElement(ye.a, { path: "/", exact: !0, component: en }), a.a.createElement(ye.a, { path: "/:id", exact: !0, component: Mt })), Un = Object(i.b)((function (e) { return { authStatus: e.app.authStatus, isLoading: e.app.isUserLoading }; }), (function (e) { return { fetchUser: function () { return e({ type: "FETCH_USER_REQUEST" }); } }; }))((function (e) { return Object(r.useEffect)((function () { e.fetchUser(); })), e.isLoading ? a.a.createElement(Nt, null, a.a.createElement(Ee, null), a.a.createElement("div", { className: "spinner" })) : e.authStatus ? a.a.createElement("div", { style: { position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" } }, a.a.createElement(Ee, null), a.a.createElement("div", { style: { position: "relative", height: "3em" } }, a.a.createElement(In, { authStatus: e.authStatus })), a.a.createElement("div", { style: { position: "relative", minHeight: "100vh" } }, Rn)) : a.a.createElement("div", { style: { position: "relative", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" } }, a.a.createElement(Ee, null), a.a.createElement(gn, null)); }));
            c.a.render(a.a.createElement(i.a, { store: be }, a.a.createElement(Un, null)), document.querySelector("#root"));
        } }, [[47, 1, 2]]]);
//# sourceMappingURL=main.eb0ec87c.chunk.js.map