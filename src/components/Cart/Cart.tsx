import Button from "@material-ui/core/Button";
import CartItem from '../CartItem/CartItem';
//Types
import {CartItemType} from '../../App'
//Styles
import { Wrapper } from './Cart.styles';


interface Props {
  cartItems:CartItemType[]
  addToCart:(item:CartItemType) => void
  removeFromCart:(id:number) => void
}





const Cart:React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <h1>Your shopping cart</h1>
      <p>{!cartItems.length?"No items in cart...":null}</p>
      {cartItems.map(item => {
        return <CartItem key={item.id} 
                         cartItem={item}
                         addToCart={addToCart}
                         removeFromCart={removeFromCart}/>
      })}
    </Wrapper>
  )
}

export default Cart