import { produce } from "immer";
export const InitialState = {
    arrCart: [
        // { code: 0, shoppingCode: 0, itemCode: 0, name: "defualt", amount: 5, price: 5 },
        // { code: 0, shoppingCode: 0, itemCode: 5, name: "defualt", amount: 5, price: 5 }
    ]

}


export const dataCartReducer = produce((state, action) => {
    switch (action.type) {
        case "PLUS": {
            let line = state.arrCart.find((o) => o.itemCode == action.x)
            line.amount = action.payload;
            break;
        }
        case "MINUS": {
            if (action.payload < 0) {
                break;
            }
            else {
                let line = state.arrCart.find((o) => o.itemCode == action.x)
                line.amount = action.payload;
                break;
            }
        }
        case "ADD": {
            let i = state.arrCart.find((o) => o.itemCode == action.payload.itemCode)
            if (i == undefined)
                state.arrCart.push(action.payload);
            else
                i.amount = i.amount + 1
            break;
        }
        case "REMOVE": {
            let y = [...state.arrCart.filter(o => o.code != action.payload)]
            state.arrCart = y; break;
        }
        default:
            break;
    }
}, InitialState)







