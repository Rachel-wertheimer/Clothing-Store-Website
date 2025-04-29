import { produce } from "immer";


export const InitialState = {
    arruser: [
        { code: "1", name: "shani", pass: "123", crditcard: "4580321478964512" },
        { code: "2", name: "rachely", pass: "111", crditcard: "53261412536987465" },
        { code: "3", name: "tal", pass: "108", crditcard: "48503698452178936" },
        { code: "4", name: "main", pass: "896", crditcard: "25149851154512" },
        { code: "5", name: "bibi", pass: "895", crditcard: "215614651414" },

    ],
    currentuser: { name: "visiter", userCode: 2 }, counter: 6
    , manager: false, user: false, mone: 6
}
export const dataUser = produce((state, action) => {
    switch (action.type) {
        case "CHANG_MANGER": { state.manager = action.payload; break; }
        case "CHANG_USER": { state.user = action.payload; break; }
        case "ADD_USER": { state.arruser.push(action.payload); break; }
        case "SET_USER": {
            state.currentuser.name = action.payload.name;
            const c = state.arruser.find(x => x.pass == action.payload.pass)
            state.currentuser.userCode = c.code
            break;
        }
        default:
            break;
     }
}, InitialState)






