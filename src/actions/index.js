export const addNewFeature = (name, price, id ) => {
    return { 
        type: 'ADD_FEATURE', name: name, price: price, id: id
    };
}

export const removeAddedFeature = id => {
    return {
        type: 'REMOVE_FEATURE', payload: id
    };
}

export const addPrices = id => {
    return {
        type: 'ADD_PRICE', payload: id
    };
}