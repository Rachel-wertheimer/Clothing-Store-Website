import { produce } from "immer";

export const InitialState = {
    arrcategory: [
        { code: "1", catagor: "women" },
        { code: "2", catagor: "men" },
        { code: "3", catagor: "girl" },
        { code: "4", catagor: "boy" },
        { code: "5", catagor: "baby" },
    ], counter: 6
}

export const dataCategory = produce((state, action) => {
    switch (action.type) {
        case "CHANG_LIST_CATAGURY": {state.arrcategory = action.payload;break;}
        case "CHANG_COUNTER_CATAGURY": { state.counter = action.payload; break; }
        case "EDIT_CATAGOR": {
            let c = state.arrcategory.filter(o => o.code == action.payload.code)
           c.find(t => t.code == action.payload.code).catagor = action.payload.catagor
            break;}

        case "ADD_CATAGOR": {
            let a = state.arrcategory.push(action.payload)
            state.counter += 1;
            break;
        }
        default:
            break;
    }
}, InitialState)