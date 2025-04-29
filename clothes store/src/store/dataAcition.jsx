export const change_manager = (manager) => {
    return { type: "CHANG_MANGER", payload: manager }
}
export const change_user = (user) => {
    return { type: "CHANG_USER", payload: user }
}
export const change_list = (y) => {//משנה את הרשימה הנוכחית
    return { type: "CHANG_LIST", payload: y }
}
export const change_list_catagury = (y) => {//משנה את הרשימה הנוכחית
    return { type: "CHANG_LIST_CATAGURY", payload: y }
}
export const edit_ctagor = (code,catagor) => {
    return { type: "EDIT_CATAGOR", payload: {code,catagor} }
}
export const add_ctagor = (catagor) => {
    return { type: "ADD_CATAGOR", payload:catagor }
}
export const edit_clothes = (object) => {
    return { type: "EDIT_CLOTHES", payload:object}
}
export const add_clothes = (object) => {
    return { type: "ADD_CLOTHES", payload:object }
}
export const currrent_user = (c) => {
    return { type: "SET-CURRUSER", payload: c }
}
export const plus = (c, x) => {
    return { type: "PLUS", payload: c, x }
}
export const minus = (c, x) => {
    return { type: "MINUS", payload: c, x }
}
export const addToCart = (x) => {
    return { type: "ADD", payload: x }
}
export const set_mone = (x) => {
    return { type: "SET_MONE", payload: x }
}
export const add = (x) => {
    return { type: "ADD_USER", payload: x }
}
export const now_user = (x) => {
    return { type: "SET_USER", payload: x }
}
export const removeItems = (userCode) => {
    return { type: "REMOVE", payload: userCode }
}
export const set_moneS = (x) => {
    return { type: "SET_MONES", payload: x }
}

export const setCartToShopping = (x) => {
    return { type: "ADD_CART_TO_BUYS", payload: x }
}
