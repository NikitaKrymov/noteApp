"use strict";
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[0], { 46: function (e, t, n) { e.exports = n(74); }, 74: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0), o = n.n(r), a = n(21), c = n.n(a), i = n(11), l = n(14), s = n(45), u = n(6), d = n.n(u), m = n(2), f = n(41), b = n.n(f).a.create({ baseURL: "/api/webPlanner", headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST" }, withCredentials: !0 }), p = function (e) { return { type: "AUTH_USER_SUCCESS", payload: e }; }, g = function (e) { return { type: "AUTH_USER_FAILED", payload: e }; }, h = function (e) { return { type: "REG_USER_FAILED", payload: e }; }, E = function (e) { return { type: "FETCH_NOTEBOOKS_REQUEST", payload: e }; }, y = d.a.mark(C), v = d.a.mark(S), k = d.a.mark(T), x = d.a.mark(w), j = d.a.mark(_), O = d.a.mark(I);
            function C(e) { var t; return d.a.wrap((function (n) { for (;;)
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
                } }), y); }
            function S(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0:
                        if (e.payload.password === e.payload.confirmPassword) {
                            n.next = 4;
                            break;
                        }
                        return t = { errorCode: 801, message: "Passwords do not match" }, n.next = 4, Object(m.b)(h(t));
                    case 4:
                    case "end": return n.stop();
                } }), v); }
            function T(e) { var t, n, r; return d.a.wrap((function (o) { for (;;)
                switch (o.prev = o.next) {
                    case 0:
                        if (e.payload.username && e.payload.password) {
                            o.next = 6;
                            break;
                        }
                        return t = { errorCode: 802, message: "Fill all fields" }, o.next = 4, Object(m.b)(g(t));
                    case 4:
                        o.next = 22;
                        break;
                    case 6: return o.next = 8, Object(m.a)((function () { return b.post("/authenticateUser", { credentials: e.payload }); }));
                    case 8:
                        if (!(n = o.sent).data.errorCode) {
                            o.next = 14;
                            break;
                        }
                        return o.next = 12, Object(m.b)(g(n.data));
                    case 12:
                        o.next = 22;
                        break;
                    case 14:
                        if (1e3 !== n.data.code) {
                            o.next = 22;
                            break;
                        }
                        return o.next = 17, Object(m.b)(p(n.data.userData));
                    case 17: return o.next = 19, Object(m.c)();
                    case 19: return r = o.sent, o.next = 22, Object(m.b)(E(r.app.userId));
                    case 22:
                    case "end": return o.stop();
                } }), k); }
            function w(e) { var t, n; return d.a.wrap((function (r) { for (;;)
                switch (r.prev = r.next) {
                    case 0:
                        if (e.payload.username && e.payload.password && e.payload.confirmPassword) {
                            r.next = 6;
                            break;
                        }
                        return t = { errorCode: 802, message: "Fill all fields" }, r.next = 4, Object(m.b)(h(t));
                    case 4:
                        r.next = 18;
                        break;
                    case 6: return r.next = 8, Object(m.a)((function () { return b.post("/createUser", { credentials: e.payload }); }));
                    case 8:
                        if (n = r.sent, console.log(n.data), 900 !== n.data.code) {
                            r.next = 16;
                            break;
                        }
                        return r.next = 13, Object(m.b)({ type: "REG_USER_SUCCESS", payload: "User has been successfully registered" });
                    case 13:
                        window.location.reload(), r.next = 18;
                        break;
                    case 16: return r.next = 18, Object(m.b)(h(n.data.message));
                    case 18:
                    case "end": return r.stop();
                } }), x); }
            function _(e) { var t; return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.a)((function () { return b.get("/current_user"); }));
                    case 2:
                        if (t = e.sent, console.log(t), t.data.code) {
                            e.next = 12;
                            break;
                        }
                        return console.log(t), e.next = 8, Object(m.b)(p(t.data));
                    case 8: return e.next = 10, Object(m.b)(E(t.data._id));
                    case 10:
                        e.next = 14;
                        break;
                    case 12: return e.next = 14, Object(m.b)({ type: "FETCH_USER_FAILED", payload: t.data });
                    case 14:
                    case "end": return e.stop();
                } }), j); }
            function I(e) { var t; return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.a)((function () { return b.get("/logout"); }));
                    case 2:
                        if (t = e.sent, console.log(t), 1e3 !== t.data.status) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 7, Object(m.b)({ type: "LOG_OUT_USER_SUCCESS" });
                    case 7:
                        e.next = 11;
                        break;
                    case 9: return e.next = 11, Object(m.b)({ type: "LOG_OUT_USER_FAILED", payload: t.data });
                    case 11:
                    case "end": return e.stop();
                } }), O); }
            var R = n(17), U = Object(R.a)(), D = d.a.mark(N), A = d.a.mark(B), L = d.a.mark(F);
            function N(e) { var t, n; return d.a.wrap((function (r) { for (;;)
                switch (r.prev = r.next) {
                    case 0: return console.log(e.payload.title), r.next = 3, Object(m.a)((function () { return b.post("/createNotebook", { newNotebook: e.payload }); }));
                    case 3:
                        if (910 !== (t = r.sent).data.code) {
                            r.next = 13;
                            break;
                        }
                        return console.log("Created successfully"), r.next = 8, Object(m.c)();
                    case 8: return n = r.sent, r.next = 11, Object(m.b)(E(n.app.userId));
                    case 11:
                        r.next = 15;
                        break;
                    case 13: return r.next = 15, Object(m.b)({ type: "CREATE_NOTEBOOK_FAILED", payload: t.data.message });
                    case 15:
                    case "end": return r.stop();
                } }), D); }
            function B(e) { var t; return d.a.wrap((function (n) { for (;;)
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
                } }), A); }
            function F(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return console.log("sending", e.payload), n.next = 3, Object(m.a)((function () { return b.post("/deleteNotebook", { notebookId: e.payload }); }));
                    case 3:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 12;
                            break;
                        }
                        return n.next = 7, Object(m.b)({ type: "DELETE_NOTEBOOK_SUCCESS" });
                    case 7: return n.next = 9, Object(m.b)(E(t.data.userId));
                    case 9:
                        U.push("/"), n.next = 14;
                        break;
                    case 12: return n.next = 14, Object(m.b)({ type: "DELETE_NOTEBOOK_FAILED", payload: t.data });
                    case 14:
                    case "end": return n.stop();
                } }), L); }
            var K = function (e) { return { type: "FETCH_TASKS_REQUEST", payload: e }; }, Q = function (e, t) { return { type: "OPEN_TASK_REQUEST", payload: { taskId: e, notebookId: t } }; }, H = d.a.mark(W), z = d.a.mark(J), M = d.a.mark(X), P = d.a.mark(q), G = d.a.mark(Y), V = d.a.mark(Z);
            function W(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.get("/fetchTasks/".concat(e.payload)); }));
                    case 2:
                        if (1100 !== (t = n.sent).data.status) {
                            n.next = 9;
                            break;
                        }
                        return console.log(t.data.payload), n.next = 7, Object(m.b)({ type: "FETCH_TASKS_SUCCESS", payload: t.data.payload });
                    case 7:
                        n.next = 11;
                        break;
                    case 9: return n.next = 11, Object(m.b)({ type: "FETCH_TASKS_FAILED", payload: t.data });
                    case 11:
                    case "end": return n.stop();
                } }), H); }
            function J(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.post("/createTask", { task: e.payload }); }));
                    case 2:
                        if (1500 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)(K(e.payload.notebookId));
                    case 6:
                        n.next = 9;
                        break;
                    case 8: console.log(t);
                    case 9:
                    case "end": return n.stop();
                } }), z); }
            function X(e) { return d.a.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return console.log("Finishing task", e.payload), console.log(e.payload), t.next = 4, Object(m.a)((function () { return b.post("/finishTask", { taskId: e.payload.taskId }); }));
                    case 4:
                        if (2e3 !== t.sent.data.status) {
                            t.next = 9;
                            break;
                        }
                        return console.log(e.payload.notebookId), t.next = 9, Object(m.b)(K(e.payload.notebookId));
                    case 9:
                    case "end": return t.stop();
                } }), M); }
            function q(e) { return d.a.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return console.log("Opening task", e.payload), t.next = 3, Object(m.a)((function () { return b.post("/openTask", { taskId: e.payload.taskId }); }));
                    case 3:
                        if (2100 !== t.sent.data.status) {
                            t.next = 7;
                            break;
                        }
                        return t.next = 7, Object(m.b)(K(e.payload.notebookId));
                    case 7:
                    case "end": return t.stop();
                } }), P); }
            function Y(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return n.next = 2, Object(m.a)((function () { return b.post("/saveTask", { editedTask: e.payload }); }));
                    case 2:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 8;
                            break;
                        }
                        return n.next = 6, Object(m.b)(K(t.data.notebookId));
                    case 6:
                        n.next = 10;
                        break;
                    case 8: return n.next = 10, Object(m.b)({ type: "SAVE_TASK_FAILED", payload: t.data });
                    case 10:
                    case "end": return n.stop();
                } }), G); }
            function Z(e) { var t; return d.a.wrap((function (n) { for (;;)
                switch (n.prev = n.next) {
                    case 0: return console.log(e.payload), n.next = 3, Object(m.a)((function () { return b.post("/deleteTask", { taskId: e.payload }); }));
                    case 3:
                        if (1e3 !== (t = n.sent).data.status) {
                            n.next = 12;
                            break;
                        }
                        return console.log(t.data), n.next = 8, Object(m.b)({ type: "DELETE_TASK_SUCCESS" });
                    case 8: return n.next = 10, Object(m.b)(K(e.payload.notebook));
                    case 10:
                        n.next = 14;
                        break;
                    case 12: return n.next = 14, Object(m.b)({ type: "DELETE_TASK_FAILED", payload: t.data });
                    case 14:
                    case "end": return n.stop();
                } }), V); }
            var $ = d.a.mark(ee);
            function ee() { return d.a.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, Object(m.d)("FETCH_USER_REQUEST", _);
                    case 2: return e.next = 4, Object(m.d)("USERNAME_VALIDATION_REQUEST", C);
                    case 4: return e.next = 6, Object(m.d)("AUTH_USER_REQUEST", T);
                    case 6: return e.next = 8, Object(m.d)("REG_USER_REQUEST", w);
                    case 8: return e.next = 10, Object(m.d)("PASSWORDS_VALIDATION_REQUEST", S);
                    case 10: return e.next = 12, Object(m.d)("CREATE_NOTEBOOK_REQUEST", N);
                    case 12: return e.next = 14, Object(m.d)("FETCH_NOTEBOOKS_REQUEST", B);
                    case 14: return e.next = 16, Object(m.d)("CREATE_TASK_REQUEST", J);
                    case 16: return e.next = 18, Object(m.d)("FETCH_TASKS_REQUEST", W);
                    case 18: return e.next = 20, Object(m.d)("FINISH_TASK_REQUEST", X);
                    case 20: return e.next = 22, Object(m.d)("OPEN_TASK_REQUEST", q);
                    case 22: return e.next = 24, Object(m.d)("LOG_OUT_USER_REQUEST", I);
                    case 24: return e.next = 26, Object(m.d)("SAVE_TASK_REQUEST", Y);
                    case 26: return e.next = 28, Object(m.d)("DELETE_TASK_REQUEST", Z);
                    case 28: return e.next = 30, Object(m.d)("DELETE_NOTEBOOK_REQUEST", F);
                    case 30:
                    case "end": return e.stop();
                } }), $); }
            var te = n(10), ne = n(25), re = n.n(ne), oe = { userId: "", authStatus: !1, userNotebooks: [], notebookTasks: [], isTaskLoading: !0, isNotebookLoading: !0, isUserLoading: !0 }, ae = { authError: "", appError: "" }, ce = Object(l.c)({ app: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "AUTH_USER_SUCCESS": return Object(te.a)(Object(te.a)({}, e), {}, { authStatus: !0, userId: t.payload._id, isUserLoading: !1 });
                    case "FETCH_NOTEBOOKS_SUCCESS": return Object(te.a)(Object(te.a)({}, e), {}, { userNotebooks: re.a.mapKeys(t.payload, "_id"), isNotebookLoading: !1 });
                    case "FETCH_TASKS_SUCCESS": return Object(te.a)(Object(te.a)({}, e), {}, { notebookTasks: re.a.mapKeys(t.payload, "index"), isTaskLoading: !1 });
                    case "LOG_OUT_USER_SUCCESS": return Object(te.a)(Object(te.a)({}, e), {}, { authStatus: !1 });
                    case "FETCH_USER_FAILED": return Object(te.a)(Object(te.a)({}, e), {}, { isUserLoading: !1 });
                    case "DELETE_NOTEBOOK_SUCCESS": return Object(te.a)(Object(te.a)({}, e), {}, { isNotebookLoading: !0 });
                    default: return e;
                } }, errors: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "AUTH_USER_FAILED":
                    case "REG_USER_FAILED":
                    case "USERNAME_VALIDATION_FAILED": return Object(te.a)(Object(te.a)({}, e), {}, { authError: t.payload.message });
                    case "FETCH_TASKS_FAILED":
                    case "FETCH_USER_FAILED":
                    case "DELETE_NOTEBOOK_FAILED": return Object(te.a)(Object(te.a)({}, e), {}, { appError: t.payload.message });
                    default: return ae;
                } } }), ie = Object(s.a)(), le = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || l.d, se = Object(l.e)(ce, le(Object(l.a)(ie)));
            ie.run(ee);
            var ue = n(4), de = n(5);
            function me() { var e = Object(ue.a)(["\n    body{\n        margin: 0;\n        padding: 0;\n    };\n"]); return me = function () { return e; }, e; }
            var fe = Object(de.a)(me());
            function be() { var e = Object(ue.a)(["\n    display: grid;\n    grid-template-columns: ", ";\n    grid-auto-flow: ", ";\n    grid-template-rows: ", ";\n    position: ", ";\n    height: 100%;\n    width: 100%;\n"]); return be = function () { return e; }, e; }
            var pe = de.b.div(be(), (function (e) { return e.theme.gridTemplateColumns; }), (function (e) { return e.theme.gridAutoFlow; }), (function (e) { return e.theme.gridTemplateRows; }), (function (e) { return e.theme.position; })), ge = n(76), he = n(9), Ee = { colors: { navy: "navy", lightblue: "lightblue", lightgrey: "#DADADA", grey: "grey", white: "white", black: "black" }, flexDirection: { row: "row", column: "column" }, justifyContent: { sa: "space-around", sb: "space-between", se: "space-evenly", center: "center", flexStart: "flex-start", flexEnd: "flex-end" }, gridTemplateColumns: { auto: "auto", two: "1fr 1fr", three: "1fr 1fr 1fr", four: "1fr 1fr 1fr 1fr", five: "1fr 1fr 1fr 1fr 1fr" }, textAlign: { center: "center", left: "left", right: "right" }, alignItems: { center: "center", flexStart: "flex-start", flexEnd: "flex-end" }, fontSize: { one: "1em", two: "2em", three: "3em", four: "4em" }, position: { absolute: "absolute", fixed: "fixed", relative: "relative" }, gridAutoFlow: { column: "column", row: "row" }, flexWrap: { wrap: "wrap" } };
            function ye() { var e = Object(ue.a)(["\n    text-decoration: none;\n    width: 80%;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    border: none;\n    outline: none;\n    padding: 1em;\n    font-size: 1.1em;\n    border-bottom: 1px solid lightgrey;\n    :focus {\n        border-bottom: 1px solid navy;\n    }\n"]); return ye = function () { return e; }, e; }
            var ve = de.b.input(ye());
            function ke() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: ", ";\n    flex-direction: ", ";\n    text-align: ", ";\n    align-items: ", ";\n    margin: ", ";\n    padding-right: ", ";\n    padding-top: ", ";\n    padding-left: ", ";\n    padding-bottom: ", ";\n    position: ", ";\n    font-size: ", ";\n    flex-wrap: ", ";\n"]); return ke = function () { return e; }, e; }
            var xe = de.b.div(ke(), (function (e) { return e.theme.justifyContent; }), (function (e) { return e.theme.flexDirection; }), (function (e) { return e.theme.textAlign; }), (function (e) { return e.theme.alignItems; }), (function (e) { return e.theme.margin; }), (function (e) { return e.theme.paddingRight; }), (function (e) { return e.theme.paddingTop; }), (function (e) { return e.theme.paddingLeft; }), (function (e) { return e.theme.paddingBottom; }), (function (e) { return e.theme.position; }), (function (e) { return e.theme.fontSize; }), (function (e) { return e.theme.flexWrap; }));
            function je() { var e = Object(ue.a)(["\n    position: absolute;\n    background: white;\n    border-radius: 1em;\n    box-shadow: 0 0 3px black;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    text-align: center;\n    width: 40em;\n    height: 25em;\n    display: grid;\n    z-index: 100;\n"]); return je = function () { return e; }, e; }
            var Oe = de.b.div(je());
            function Ce() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em 2em 0.5em 2em;\n    color: ", ";\n    border: ", ";\n    border-radius: ", ";\n    background: ", ";\n    box-shadow: ", ";\n    font-size: 1.2em;\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n    margin-bottom: ", ";\n    :hover {\n        color: ", ";\n        border: ", ";\n        background: ", ";\n        box-shadow: ", ";\n        border-radius: ", ";\n        cursor: pointer;\n    }\n"]); return Ce = function () { return e; }, e; }
            var Se = de.b.div(Ce(), (function (e) { return e.theme.color; }), (function (e) { return e.theme.border; }), (function (e) { return e.theme.borderRadius; }), (function (e) { return e.theme.backgroundColor; }), (function (e) { return e.theme.boxShadow; }), (function (e) { return e.theme.marginTop; }), (function (e) { return e.theme.marginRight; }), (function (e) { return e.theme.marginLeft; }), (function (e) { return e.theme.marginBottom; }), (function (e) { return e.theme.hoverColor; }), (function (e) { return e.theme.hoverBorder; }), (function (e) { return e.theme.hoverBackgroundColor; }), (function (e) { return e.theme.hoverBoxShadow; }), (function (e) { return e.theme.hoverBorderRadius; })), Te = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, we = { justifyContent: Ee.justifyContent.flexStart, alignItems: Ee.alignItems.center, flexDirection: Ee.flexDirection.column }, _e = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems, flexDirection: Ee.flexDirection.row }, Ie = [{ label: "Title", id: 1, type: "text" }, { label: "Description", id: 2, type: "text" }], Re = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, Ue = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, De = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, Ae = function (e) { var t = Object(r.useState)(e.title), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = Object(r.useState)(e.description), l = Object(he.a)(i, 2), s = l[0], u = l[1], d = Object(r.useState)(!1), m = Object(he.a)(d, 2), f = m[0], b = m[1], p = e.notebookId, g = e.userId; return o.a.createElement(Oe, { style: { top: "20%", gridTemplateRows: "2fr 2fr 8fr 1fr" } }, o.a.createElement(xe, { theme: Te, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, e.modalMame), o.a.createElement(xe, { theme: De, style: { opacity: f ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Title field can not be empty!"), o.a.createElement(xe, { theme: we }, o.a.createElement(ve, { type: Ie[0].type, placeholder: Ie[0].label, value: a, onChange: function (e) { return c(e.target.value); } }), o.a.createElement(ve, { type: Ie[1].type, placeholder: Ie[1].label, value: s, onChange: function (e) { return u(e.target.value); } })), o.a.createElement(xe, { theme: _e }, o.a.createElement(Se, { theme: Re, onClick: function () { return e.closeModal(!1); } }, "Cancel"), o.a.createElement(Se, { theme: Ue, onClick: function () { e.closeModal(!1), a.length > 0 ? e.saveNotebook(p, { title: a, description: s, owner: g }) : b(!0); } }, "Save"))); };
            function Le() { var e = Object(ue.a)(["\n    width: 70%;\n    display: grid;\n    grid-template-rows: 2fr 20fr;\n    height: 85%;\n    position: fixed;\n    box-shadow: 0 0 3px black;\n    margin: 2em;\n    margin-bottom: 1em;\n    border-radius: 1em;\n"]); return Le = function () { return e; }, e; }
            var Ne = de.b.div(Le());
            function Be() { var e = Object(ue.a)(["\n    padding: 0.5em;\n    border-radius: 5%;\n    :hover {\n        color: navy;\n        cursor: pointer;\n    }\n"]); return Be = function () { return e; }, e; }
            var Fe = de.b.div(Be());
            function Ke() { var e = Object(ue.a)(["\n    width: 100%;\n    background: grey;\n    height: 60%;\n    transition: 0.2s;\n"]); return Ke = function () { return e; }, e; }
            var Qe = de.b.div(Ke());
            function He() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: center;\n    width: 2em;\n    height: 2em;\n    box-shadow: 0 0 3px navy;\n    border-radius: 50%;\n    color: white;\n    background-color: navy;\n    margin-right: 1em;\n    :hover {\n        background-color: white;\n        color: navy;\n        box-shadow: 0 0 3px navy;\n        cursor: pointer;\n    }\n"]); return He = function () { return e; }, e; }
            var ze = de.b.div(He());
            function Me() { var e = Object(ue.a)(["\n    padding: 0.5em;\n    border-radius: 5%;\n    :hover {\n        padding: 0.5em;\n        color: red;\n        cursor: pointer;\n    }\n"]); return Me = function () { return e; }, e; }
            var Pe = de.b.div(Me());
            function Ge() { var e = Object(ue.a)(["\n    text-decoration: none;\n    margin-left: 1em;\n    width: 100%;\n    border: none;\n    outline: none;\n    padding: 1em;\n    font-size: 1.1em;\n    border-bottom: 1px solid lightgrey;\n    :focus {\n        border-bottom: 1px solid navy;\n    }\n"]); return Ge = function () { return e; }, e; }
            var Ve = de.b.input(Ge());
            function We() { var e = Object(ue.a)(["\n    text-decoration: none;\n    background-color: none;\n    font-size: 1.5em;\n    width: 0.8em;\n    height: 0.8em;\n    :hover {\n        cursor: pointer;\n        border: '1px solid navy';\n    }\n"]); return We = function () { return e; }, e; }
            var Je = de.b.input(We());
            function Xe() { var e = Object(ue.a)(["\n    display: grid;\n    grid-template-columns: 1fr 20fr 1fr 1fr;\n    box-shadow: 0 0 2px grey;\n    margin: 1em;\n    padding-bottom: 1em;\n    padding-top: 1em;\n    border-radius: 0.5em;\n    height: 3em;\n"]); return Xe = function () { return e; }, e; }
            var qe = de.b.div(Xe());
            function Ye() { var e = Object(ue.a)(["\n    display: grid;\n    grid-template-columns: 20fr 1fr 1fr;\n    box-shadow: 0 0 2px grey;\n    margin: 1em;\n    padding-bottom: 1em;\n    padding-top: 1em;\n    border-radius: 0.5em;\n    height: 3em;\n"]); return Ye = function () { return e; }, e; }
            var Ze = de.b.div(Ye()), $e = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center, fontSize: "1.4em" }, et = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems, flexDirection: Ee.flexDirection.row }, tt = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, nt = { color: Ee.colors.black, backgroundColor: "red", hoverColor: "red", hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px red", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, rt = function (e) { return o.a.createElement(Oe, { style: { top: "8em", height: "10em", gridTemplateRows: "1fr 1fr" } }, o.a.createElement(xe, { theme: $e }, "Are you sure you want to delete this task?"), o.a.createElement(xe, { theme: et }, o.a.createElement(Se, { theme: tt, onClick: function () { return e.closeModal(!1); } }, "Cancel"), o.a.createElement(Se, { theme: nt, onClick: function () { e.action(e.object), e.closeModal(!1); } }, "Delete"))); }, ot = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, at = { justifyContent: Ee.justifyContent.flexStart, alignItems: Ee.alignItems.center }, ct = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, it = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginRight: "1em" }, lt = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginRight: "1em" }, st = Object(i.b)(null, (function (e) { return { finishTask: function (t, n) { return e(function (e, t) { return { type: "FINISH_TASK_REQUEST", payload: { taskId: e, notebookId: t } }; }(t, n)); }, openTask: function (t, n) { return e(Q(t, n)); }, deleteTask: function (t) { return e(function (e) { return { type: "DELETE_TASK_REQUEST", payload: e }; }(t)); }, saveTask: function (t, n) { return e(Q(t, n)); } }; }))((function (e) { var t = o.a.useState(!1), n = Object(he.a)(t, 2), r = n[0], a = n[1], c = o.a.useState(e.task.subject), i = Object(he.a)(c, 2), l = i[0], s = i[1], u = o.a.useState(!1), d = Object(he.a)(u, 2), m = d[0], f = d[1]; return r ? o.a.createElement(Ze, null, o.a.createElement(xe, null, o.a.createElement(Ve, { value: l, onChange: function (e) { return s(e.target.value); } })), o.a.createElement(Se, { theme: it, onClick: function () { return a(!1); } }, "Cancel"), o.a.createElement(Se, { theme: lt, onClick: function () { e.saveTask(e.task._id, l), a(!1); } }, "Save")) : o.a.createElement("div", null, m ? o.a.createElement(rt, { closeModal: f, action: e.deleteTask, object: e.task }) : null, o.a.createElement(qe, { style: { backgroundColor: e.task.isDone ? "lightgreen" : "white" } }, o.a.createElement(xe, { theme: ot }, o.a.createElement(Je, { type: "checkbox", defaultChecked: !!e.task.isDone, onChange: function (t) { t.target.checked ? e.finishTask(e.task._id, e.task.notebook) : e.openTask(e.task._id, e.task.notebook); } })), o.a.createElement(xe, { theme: at }, e.number + 1, ".", e.task.subject), o.a.createElement(xe, { theme: ct }, o.a.createElement(Fe, { onClick: function () { return a(!0); } }, o.a.createElement("i", { className: "fas fa-pen" }))), o.a.createElement(xe, { theme: ct }, o.a.createElement(Pe, { onClick: function () { return f(!0); } }, o.a.createElement("i", { className: "fas fa-trash-alt" }))))); })), ut = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, dt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center, flexDirection: Ee.flexDirection.column }, mt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems, flexDirection: Ee.flexDirection.row }, ft = [{ label: "Subject", id: 1, type: "text" }], bt = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, pt = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, gt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, ht = function (e) { var t = Object(r.useState)(""), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = Object(r.useState)(!1), l = Object(he.a)(i, 2), s = l[0], u = l[1], d = e.notebookId; return o.a.createElement(Oe, { style: { gridTemplateRows: "2fr 2fr 8fr 1fr" } }, o.a.createElement(xe, { theme: ut, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, "Add New Task"), o.a.createElement(xe, { theme: gt, style: { opacity: s ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Subject field can not be empty!"), o.a.createElement(xe, { theme: dt }, o.a.createElement(ve, { type: ft[0].type, placeholder: ft[0].label, value: a, onChange: function (e) { return c(e.target.value); }, style: { height: "100%", border: "1px solid navy", borderRadius: "1em" } })), o.a.createElement(xe, { theme: mt }, o.a.createElement(Se, { theme: bt, onClick: function () { return e.closeCreateTask(); } }, "Cancel"), o.a.createElement(Se, { theme: pt, onClick: function () { a.length > 0 ? e.createTask({ subject: a, notebookId: d }) : u(!0), e.closeCreateTask(); } }, "Add"))); }, Et = { justifyContent: "space-around", alignItems: "center" }, yt = function (e, t) { console.log(e, t); var n = 100 / e * t; return console.log(n), { backgroundColor: "green", width: "".concat(n, "%") }; }, vt = Object(i.b)((function (e) { return { notebookTasks: Object.values(e.app.notebookTasks), isTaskLoading: e.app.isTaskLoading }; }), (function (e) { return { createTask: function (t) { return e(function (e) { return { type: "CREATE_TASK_REQUEST", payload: e }; }(t)); }, fetchTasks: function (t) { return e(K(t)); } }; }))((function (e) { var t = Object(r.useState)(!1), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = Object(r.useState)(0), l = Object(he.a)(i, 2), s = l[0], u = l[1]; return console.log(e), Object(r.useEffect)((function () { console.log(s), e.fetchTasks(e.notebookId); }), []), Object(r.useEffect)((function () { !function (e, t) { var n = 0; e.map((function (e, t) { return e.isDone ? n++ : n; })), t(n); }(e.notebookTasks, u); }), [e.notebookTasks]), e.isTaskLoading ? o.a.createElement("div", null, "Loading Data") : o.a.createElement("div", null, a ? o.a.createElement(ht, { closeCreateTask: function () { return c(!1); }, createTask: e.createTask, notebookId: e.notebookId }) : null, o.a.createElement(pe, { style: { gridTemplateColumns: "1fr 20fr 2fr", marginTop: "0.5em" } }, o.a.createElement(xe, { theme: Et }, o.a.createElement("i", { style: { fontSize: "1.5em", borderRadius: "50%", color: e.notebookTasks.length === s ? "white" : "black", border: e.notebookTasks.length === s ? "1px solid green" : "0px solid black", backgroundColor: e.notebookTasks.length === s ? "green" : "white" }, className: "far fa-check-circle" })), o.a.createElement(xe, { theme: Et }, o.a.createElement(Qe, { style: yt(e.notebookTasks.length, s) })), o.a.createElement(xe, { theme: Et }, o.a.createElement(ze, { onClick: function () { return c(!0); } }, o.a.createElement("div", { style: { display: "flex", alignItems: "center" } }, "+")))), e.notebookTasks.map((function (e, t) { return o.a.createElement("div", { key: e._id }, o.a.createElement(st, { task: e, number: t })); }))); })), kt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center, fontSize: "1.4em" }, xt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems, flexDirection: Ee.flexDirection.row }, jt = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, Ot = { color: Ee.colors.black, backgroundColor: "red", hoverColor: "red", hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px red", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, Ct = function (e) { return console.log(e.object), o.a.createElement(Oe, { style: { top: "20em", height: "10em", gridTemplateRows: "1fr 1fr" } }, o.a.createElement(xe, { theme: kt }, "Are you sure you want to delete this notebook?"), o.a.createElement(xe, { theme: xt }, o.a.createElement(Se, { theme: jt, onClick: function () { return e.closeModal(!1); } }, "Cancel"), o.a.createElement(Se, { theme: Ot, onClick: function () { e.action(e.object), e.closeModal(!1); } }, "Delete"))); }, St = { gridTemplateRows: "1fr 20fr" }, Tt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.flexStart }, wt = { justifyContent: Ee.justifyContent.sb }, _t = { borderBottom: "1px solid navy", width: "100%", marginTop: "1em", paddingBottom: "1em", fontSize: "1.5em" }, It = { justifyContent: Ee.justifyContent.flexStart, flexDirection: Ee.flexDirection.column }, Rt = { justifyContent: Ee.justifyContent.flexEnd, alignItems: Ee.alignItems.flexStart, marginRight: "1em" }, Ut = { justifyContent: Ee.justifyContent.flexStart, alignItems: Ee.alignItems.flexStart, marginTop: "1em" }, Dt = { gridTemplateRows: "1fr 1fr" }, At = { justifyContent: "center", alignItems: "center" }, Lt = { justifyContent: "center", alignItems: "flex-end" }, Nt = Object(i.b)((function (e, t) { return { notebookData: e.app.userNotebooks[t.match.params.id], isNotebookLoading: e.app.isNotebookLoading }; }), (function (e) { return { deleteNotebook: function (t) { return e(function (e) { return { type: "DELETE_NOTEBOOK_REQUEST", payload: e }; }(t)); }, editNotebook: function (t, n) { return e(function (e, t) { return { type: "EDIT_NOTEBOOK_REQUEST", payload: { notebookId: e, notebookData: t } }; }(t, n)); }, fetchNotebook: function (t) { return e(function (e) { return { type: "FETCH_NOTEBOOK_REQUEST", payload: e }; }(t)); } }; }))((function (e) { var t = o.a.useState(!1), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = o.a.useState(!1), l = Object(he.a)(i, 2), s = l[0], u = l[1]; return Object(r.useEffect)((function () { e.fetchNotebook(e.match.params.id); }), [e.match.params.id]), console.log(e), e.isNotebookLoading ? o.a.createElement("div", null, "Loading") : (console.log(e.notebookData), o.a.createElement(pe, { theme: St }, s ? o.a.createElement(Ct, { closeModal: u, action: e.deleteNotebook, object: e.notebookData }) : null, a ? o.a.createElement(Ae, { modalMame: "Edit Notebook", closeModal: c, notebookId: e.notebookData._id, title: e.notebookData.title, userId: e.notebookData.owner, description: e.notebookData.description, saveNotebook: e.editNotebook }) : null, o.a.createElement(xe, { theme: Tt }, o.a.createElement(Ne, null, o.a.createElement(xe, { theme: wt, style: _t }, o.a.createElement(xe, { onClick: function () { return U.push("/"); }, theme: Ut, style: { cursor: "pointer" } }, o.a.createElement(Fe, null, o.a.createElement("i", { style: { fontSize: "1em", marginLeft: "1em" }, className: "fas fa-arrow-left" }))), o.a.createElement(pe, { theme: Dt, style: { margin: "0 1em 0 1em" } }, o.a.createElement(xe, { theme: At }, o.a.createElement("div", null, e.notebookData.title), o.a.createElement(Fe, { onClick: function () { return c(!0); } }, o.a.createElement("i", { className: "fas fa-pen" }))), o.a.createElement(xe, { theme: Lt, style: { fontSize: "0.8em" } }, e.notebookData.description)), o.a.createElement(xe, { style: Rt, onClick: function (e) { u(!0); } }, o.a.createElement(Pe, null, o.a.createElement("i", { className: "fas fa-trash-alt" })))), o.a.createElement(xe, { theme: It, style: { height: "95%", position: "relative", overflow: "auto", borderRadius: "1em", marginTop: "1em" } }, o.a.createElement("div", null, o.a.createElement(vt, { notebookId: e.notebookData._id }))))))); }));
            function Bt() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: center;\n"]); return Bt = function () { return e; }, e; }
            var Ft = de.b.div(Bt());
            function Kt() { var e = Object(ue.a)(["\n    display: grid;\n    margin: 1em;\n    width: 20em;\n    height: 20em;\n    box-shadow: 0 0 3px black;\n    border-radius: 1em;\n    grid-template-rows: 1fr 3fr 1fr;\n    position: relative;\n    transition: 0.2s;\n    text-align: left;\n    background-color: white;\n    :hover {\n        transform: translateY(-0.5em);\n        cursor: pointer;\n        box-shadow: 0 0 3px navy;\n    }\n"]); return Kt = function () { return e; }, e; }
            var Qt = de.b.div(Kt()), Ht = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, zt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center, margin: "1em" }, Mt = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, Pt = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em" }, Gt = function (e) { return o.a.createElement(Qt, { onClick: function () { return U.push("/".concat(e.notebook._id)); } }, o.a.createElement(xe, { theme: Ht, style: { fontSize: "1.5em", borderBottom: "1px solid navy" } }, e.notebook.title), o.a.createElement(xe, { theme: zt }, e.notebook.description), o.a.createElement(xe, { theme: Mt }, o.a.createElement(Se, { theme: Pt }, "Open"))); }, Vt = Object(i.b)((function (e) { return { notebooks: Object.values(e.app.userNotebooks), isNotebookLoading: e.app.isNotebookLoading }; }))((function (e) { return e.isNotebookLoading ? (console.log("was loading"), o.a.createElement("div", null, "Loading")) : (console.log(e.notebooks), o.a.createElement(Ft, null, o.a.createElement("div", { style: { display: "flex", justifyContent: "flex-start", flexWrap: "wrap", maxWidth: "66em" } }, e.notebooks.map((function (e, t) { return o.a.createElement(Gt, { key: t, notebook: e }); }))))); }));
            function Wt() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]); return Wt = function () { return e; }, e; }
            var Jt = de.b.div(Wt());
            function Xt() { var e = Object(ue.a)(["\n    width: 50%;\n    height: 70%;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 2fr 3fr;\n    border-radius: 1em;\n    box-shadow: 0 0 4px black;\n"]); return Xt = function () { return e; }, e; }
            var qt = de.b.div(Xt());
            function Yt() { var e = Object(ue.a)(["\n    display: flex;\n    color: red;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    box-shadow: 0 0 3px red;\n    border-radius: 1em;\n    margin: 1em;\n"]); return Yt = function () { return e; }, e; }
            var Zt = de.b.div(Yt()), $t = [{ label: "Username", type: "text" }, { label: "Password", type: "password" }], en = [{ label: "Username", type: "text" }, { label: "Password", type: "password" }, { label: "Confirm Password", type: "password" }], tn = { color: "navy", textDecoration: "underline" }, nn = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, rn = { justifyContent: Ee.justifyContent.flexStart, alignItems: Ee.alignItems.center, flexDirection: Ee.flexDirection.column }, on = { gridTemplateRows: "1fr 4fr" }, an = { gridTemplateRows: "1fr 2fr" }, cn = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em" }, ln = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em" }, sn = Object(i.b)((function (e) { return { error: e.errors.authError }; }), (function (e) { return { validateUsername: function (t) { return e(function (e) { return { type: "USERNAME_VALIDATION_REQUEST", payload: e }; }(t)); }, authenticateUser: function (t) { return e({ type: "AUTH_USER_REQUEST", payload: t }); }, registerUser: function (t) { return e(function (e) { return { type: "REG_USER_REQUEST", payload: e }; }(t)); }, validatePasswords: function (t) { return e(function (e) { return { type: "PASSWORDS_VALIDATION_REQUEST", payload: e }; }(t)); } }; }))((function (e) { var t = Object(r.useState)(!0), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = Object(r.useState)(""), l = Object(he.a)(i, 2), s = l[0], u = l[1], d = Object(r.useState)(""), m = Object(he.a)(d, 2), f = m[0], b = m[1], p = Object(r.useState)(""), g = Object(he.a)(p, 2), h = g[0], E = g[1]; return Object(r.useEffect)((function () { u(""), b(""), E(""); }), [a]), a ? o.a.createElement(Jt, null, o.a.createElement(qt, null, o.a.createElement(xe, { theme: nn, style: { fontSize: "4em", color: "navy", borderRight: "2px solid navy", height: "100%" } }, "Login"), o.a.createElement(pe, { theme: an }, o.a.createElement(Zt, { style: { visibility: e.error ? "visible" : "hidden" } }, e.error), o.a.createElement(xe, { theme: rn }, o.a.createElement(ve, { type: $t[0].type, value: s, placeholder: $t[0].label, onChange: function (e) { return u(e.target.value); } }), o.a.createElement(ve, { type: $t[1].type, value: f, placeholder: $t[1].label, onChange: function (e) { return b(e.target.value); } }), o.a.createElement(xe, { theme: { flexDirection: Ee.flexDirection.row } }, o.a.createElement(Se, { theme: cn, onClick: function () { return e.authenticateUser({ username: s, password: f }); } }, "Login"), o.a.createElement(Se, { theme: ln, style: { marginLeft: "1em" }, onClick: function () { return e.authenticateUser({ username: "Guest", password: "guest" }); } }, "Login as Guest")), o.a.createElement("div", { style: { marginTop: "1em" } }, "Don't have an account? ", o.a.createElement("a", { style: tn, onClick: function () { return c(!1); } }, "SignUp"), " now!"))))) : o.a.createElement(Jt, null, o.a.createElement(qt, null, o.a.createElement(xe, { theme: nn, style: { fontSize: "4em", color: "navy", borderRight: "2px solid navy", height: "100%" } }, "Sign Up"), o.a.createElement(pe, { theme: on }, o.a.createElement(Zt, { style: { visibility: e.error ? "visible" : "hidden" } }, e.error), o.a.createElement(xe, { theme: rn }, o.a.createElement(ve, { type: en[0].type, value: s, placeholder: en[0].label, onChange: function (e) { return u(e.target.value); }, onBlur: function () { return e.validateUsername(s); } }), o.a.createElement(ve, { type: en[1].type, value: f, placeholder: en[1].label, onChange: function (e) { return b(e.target.value); } }), o.a.createElement(ve, { type: en[2].type, value: h, placeholder: en[2].label, onChange: function (e) { return E(e.target.value); }, onBlur: function () { return e.error.length > 0 ? null : e.validatePasswords({ password: f, confirmPassword: h }); } }), o.a.createElement(Se, { theme: cn, onClick: function () { return e.error.length > 0 ? null : e.registerUser({ username: s, password: f, confirmPassword: h }); } }, "SignUp"), o.a.createElement("div", { style: { marginTop: "1em" } }, "Do you have an account? ", o.a.createElement("a", { style: tn, onClick: function () { return c(!0); } }, "Log In"), " now!"))))); }));
            function un() { var e = Object(ue.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: navy;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 0.5em;\n    color: white;\n    padding-right: 1em;\n    z-index: 100;\n"]); return un = function () { return e; }, e; }
            var dn = de.b.div(un()), mn = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, fn = { justifyContent: Ee.justifyContent.flexStart, alignItems: Ee.alignItems.center, flexDirection: Ee.flexDirection.column }, bn = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems, flexDirection: Ee.flexDirection.row }, pn = [{ label: "Title", id: 1, type: "text" }, { label: "Description", id: 2, type: "text" }], gn = { color: Ee.colors.navy, backgroundColor: Ee.colors.white, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginRight: "1em", marginBottom: "1em" }, hn = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, hoverColor: Ee.colors.navy, hoverBackgroundColor: Ee.colors.white, hoverBoxShadow: "0 0 3px navy", borderRadius: "1em", marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }, En = { justifyContent: Ee.justifyContent.center, alignItems: Ee.alignItems.center }, yn = function (e) { var t = Object(r.useState)(""), n = Object(he.a)(t, 2), a = n[0], c = n[1], i = Object(r.useState)(""), l = Object(he.a)(i, 2), s = l[0], u = l[1], d = Object(r.useState)(!1), m = Object(he.a)(d, 2), f = m[0], b = m[1], p = e.userId; return console.log(p), o.a.createElement(Oe, { style: { top: "20%", gridTemplateRows: "2fr 2fr 8fr 1fr" } }, o.a.createElement(xe, { theme: mn, style: { color: "navy", fontSize: "1.5em", borderBottom: "1px solid navy" } }, "Open New Notebook"), o.a.createElement(xe, { theme: En, style: { opacity: f ? "1" : "0", color: "red", border: "1px solid red", margin: "1em", padding: "1em" } }, "Title field can not be empty!"), o.a.createElement(xe, { theme: fn }, o.a.createElement(ve, { type: pn[0].type, placeholder: pn[0].label, value: a, onChange: function (e) { return c(e.target.value); } }), o.a.createElement(ve, { type: pn[1].type, placeholder: pn[1].label, value: s, onChange: function (e) { return u(e.target.value); } })), o.a.createElement(xe, { theme: bn }, o.a.createElement(Se, { theme: gn, onClick: function () { return e.closeCreateNotebook(!1); } }, "Cancel"), o.a.createElement(Se, { theme: hn, onClick: function () { e.closeCreateNotebook(!1), a.length > 0 ? e.createNotebook({ title: a, description: s, owner: p }) : b(!0); } }, "Create"))); };
            function vn() { var e = Object(ue.a)(["\n    background: ", ";\n    border: ", ";\n    color: ", ";\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    padding: 0.5em 2em 0.5em 2em;\n    :hover {\n        background: ", ";\n        color: ", ";\n        cursor: pointer;\n        font-size: ", ";\n        text-decoration: ", ";\n        box-shadow: 0 0 3px white;\n        border-radius: 1em;\n    }\n"]); return vn = function () { return e; }, e; }
            var kn = de.b.div(vn(), (function (e) { return e.theme.backgroundColor; }), (function (e) { return e.theme.border; }), (function (e) { return e.theme.color; }), (function (e) { return e.theme.hoverBackgroundColor; }), (function (e) { return e.theme.hoverColor; }), (function (e) { return e.theme.hoverFontSize; }), (function (e) { return e.theme.hoverTextDecoration; })), xn = { color: Ee.colors.white, backgroundColor: Ee.colors.navy, border: "1px solid navy" }, jn = Object(i.b)((function (e) { return { userId: e.app.userId }; }), (function (e) { return { createNotebook: function (t) { return e(function (e) { return { type: "CREATE_NOTEBOOK_REQUEST", payload: e }; }(t)); }, logout: function () { return e({ type: "LOG_OUT_USER_REQUEST" }); } }; }))((function (e) { var t = Object(r.useState)(!1), n = Object(he.a)(t, 2), a = n[0], c = n[1]; return Object(r.useEffect)((function () { e.authStatus || U.push("/"); }), [e.authStatus]), o.a.createElement(dn, null, a ? o.a.createElement(yn, { closeCreateNotebook: c, createNotebook: e.createNotebook, userId: e.userId }) : null, o.a.createElement(kn, { theme: xn, onClick: function () { return U.push("/"); } }, "Dashboard"), o.a.createElement(kn, { theme: xn, style: { opacity: e.authStatus ? "1" : "0" }, onClick: function () { return c(!a); } }, "Open Notebook"), o.a.createElement(kn, { theme: xn, style: { marginRight: "1em" }, onClick: function () { return e.authStatus ? e.logout() : null; } }, e.authStatus ? "Log out" : "Log In")); })), On = o.a.createElement(ge.b, { history: U }, o.a.createElement(ge.a, { path: "/", exact: !0, component: Vt }), o.a.createElement(ge.a, { path: "/:id", exact: !0, component: Nt })), Cn = Object(i.b)((function (e) { return { authStatus: e.app.authStatus, isLoading: e.app.isUserLoading }; }), (function (e) { return { fetchUser: function () { return e({ type: "FETCH_USER_REQUEST" }); } }; }))((function (e) { return Object(r.useEffect)((function () { e.fetchUser(); })), e.isLoading ? o.a.createElement("div", null, "Loading") : e.authStatus ? o.a.createElement(pe, { theme: { position: "relative" } }, o.a.createElement(fe, null), o.a.createElement(jn, { authStatus: e.authStatus }), o.a.createElement("div", { style: { marginTop: "4em" } }, On)) : o.a.createElement(pe, { theme: { position: "fixed" } }, o.a.createElement(sn, null)); }));
            c.a.render(o.a.createElement(i.a, { store: se }, o.a.createElement(Cn, null)), document.querySelector("#root"));
        } }, [[46, 1, 2]]]);
//# sourceMappingURL=main.88cbba03.chunk.js.map