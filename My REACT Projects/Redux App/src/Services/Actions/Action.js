import ADD_TO_CART from '../Constants'

const addToCart = (data) => {
    console.log(data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export default addToCart