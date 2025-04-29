import { produce } from "immer";


export const InitialState = {
    arrClothes: [
        { code: "1", nameitem: "shoes", codeC: "5", namecatgory: "baby", src: "1b.jpg", price: "78.9", color: "blue", size: "6-18", count: "5" },
        { code: "2", nameitem: "shoes", codeC: "5", namecatgory: "baby", src: "1_4.jpg", price: "69.9", color: "grine", size: "3-6", count: "2" },
        { code: "3", nameitem: "shoes", codeC: "5", namecatgory: "baby", src: "1a.jpg", price: "54.9", color: "black", size: "26", count: "4" },
        { code: "4", nameitem: "babygro", codeC: "5", namecatgory: "baby", src: "1_3.png", price: "39.9", color: "red", size: "18-24", count: "2" },
        { code: "5", nameitem: "babygro", codeC: "5", namecatgory: "baby", src: "1d.jpg", price: "89.9", color: "grine", size: "3-6", count: "8" },
        { code: "6", nameitem: "babygro", codeC: "5", namecatgory: "baby", src: "1e.jpg", price: "129.9", color: "reb", size: "16-18", count: "3" },
        { code: "7", nameitem: "drees", codeC: "3", namecatgory: "girl", src: "2_1.png", price: "150.9", color: "brown", size: "14", count: "5" },
        { code: "8", nameitem: "drees", codeC: "3", namecatgory: "girl", src: "2a.jpg", price: "160.9", color: "brown", size: "12", count: "2" },
        { code: "9", nameitem: "skirt", codeC: "3", namecatgory: "girl", src: "2_2.jpg", price: "78.9", color: "brown", size: "16", count: "2" },
        { code: "10", nameitem: "skirt", codeC: "3", namecatgory: "girl", src: "2_4.png", price: "59.2", color: "brown", size: "18", count: "2" },
        { code: "11", nameitem: "skirt", codeC: "4", namecatgory: "boy", src: "3_2.jpg", price: "56.9", color: "brown", size: "18", count: "2" },
        { code: "12", nameitem: "accessories", codeC: "4", namecatgory: "boy", src: "3_3.jpg", price: "49.9", color: "brown", size: "4", count: "2" },
        { code: "13", nameitem: "skirt", codeC: "4", namecatgory: "boy", src: "3_4.png", price: "89.9", color: "brown", size: "6", count: "2" },
        { code: "14", nameitem: "shoes", codeC: "4", namecatgory: "boy", src: "3_7.jpg", price: "89.9", color: "brown", size: "20", count: "2" },
        { code: "15", nameitem: "skirt_pent", codeC: "4", namecatgory: "boy", src: "3a.jpg", price: "209.8", color: "brown", size: "18", count: "2" },
        { code: "16", nameitem: "skirt", codeC: "1", namecatgory: "women", src: "4_1.png", price: "59.9", color: "brown", size: "18", count: "2" },
        { code: "17", nameitem: "dress", codeC: "1", namecatgory: "women", src: "4_7.jpg", price: "54.56", color: "brown", size: "18", count: "2" },
        { code: "18", nameitem: "dress", codeC: "1", namecatgory: "women", src: "4_6.jpg", price: "55.4", color: "brown", size: "18", count: "2" },
        { code: "19", nameitem: "shoes", codeC: "1", namecatgory: "women", src: "4_8.jpg", price: "54.98", color: "brown", size: "18", count: "2" },
        { code: "20", nameitem: "shoes", codeC: "2", namecatgory: "men", src: "a.jpg", price: "56", color: "brown", size: "18", count: "2" },
        { code: "21", nameitem: "suit", codeC: "2", namecatgory: "men", src: "5c.jpg", price: "59.5", color: "brown", size: "18", count: "2" },
        { code: "22", nameitem: "pent", codeC: "2", namecatgory: "men", src: "5b.jpg", price: "89.5", color: "brown", size: "18", count: "2" },
        { code: "23", nameitem: "shoes", codeC: "2", namecatgory: "men", src: "5a.jpg", price: "89.3", color: "brown", size: "18", count: "2" },
        { code: "24", nameitem: "suit", codeC: "2", namecatgory: "men", src: "5_2.jpg", price: "89.8", color: "brown", size: "18", count: "2" },
    ]
    ,
    counter: 24

}

export const dataClothes = produce((state, action) => {
    switch (action.type) {
        case "CHANG_LIST": { state.arrClothes = action.payload; break; }
        case "CHANG_COUNTER": { state.counter = action.payload; break; }
        case "EDIT_CLOTHES": {
            let c = state.arrClothes.filter(o => o.code == action.payload.code)
            let d = c.find(t => t.code == action.payload.code)
            console.log(d)
            d.nameitem = action.payload.nameitem
            d.codeC = action.payload.codeC
            d.namecatgory = action.payload.namecatgory
            d.price = action.payload.price
            d.color = action.payload.color
            d.size = action.payload.size
            d.count = action.payload.count
            break;
        }
        case "ADD_CLOTHES": {
            let a = state.arrClothes.push(action.payload)
            state.counter += 1;

            break;
        }

        default:
            break;
    }
}, InitialState)
