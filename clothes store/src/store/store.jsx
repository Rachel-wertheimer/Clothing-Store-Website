import { combineReducers, createStore } from "redux";
import { dataCartReducer } from "./datacart";
import { dataCategory } from "./datacategoty";
import { dataClothes } from "./dataClothes";
import { datashopping } from "./datashopping";
import { dataUser } from "./datauser";

export const datareducers=combineReducers({dataCartReducer,dataCategory,dataClothes,datashopping,dataUser})
export const store=createStore(datareducers)
window.store=store;