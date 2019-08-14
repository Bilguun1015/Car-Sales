import { bindActionCreators } from "redux";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const randomReducer = (state = initialState, action) => {
    console.log("here",state)
      switch (action.type) {
        case 'ADD_FEATURE':
          return {
            ...state,
            additionalPrice: action.price,
            car: {
              ...state.car,
              features:[
                ...state.car.features,
                { id: Date.now(), name: action.name, price: action.price }
              ]
            }
          }
          case 'REMOVE_FEATURE': 
          const removed = state.car.features.filter(each => {
            if(each.id === action.payload){
              return null
            } else{
              return each
            }
          })
          return{
            ...state,
            car: {
              ...state.car,
              features: removed
            }
          }
          default:
              return state;
      }
     
  }