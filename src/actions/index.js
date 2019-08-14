export const addNewFeature = (name, price ) => {
    return { 
        type: 'ADD_FEATURE', name: name, price: price
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