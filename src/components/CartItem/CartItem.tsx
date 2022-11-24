
import { CartItemType } from '../../App'
import { Wrapper } from './CartItem.styles'

import { Button } from '@material-ui/core';

 

interface Props {
    cartItem:CartItemType
    addToCart:(item:CartItemType) => void
    removeFromCart: (id:number) => void

}





const CartItem:React.FC<Props> = ({cartItem, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
        <div>
            <h3>{cartItem.title}</h3>
            <div className="information">
                <p>Price: ${cartItem.price}</p>
                <p>Total: ${(cartItem.count * cartItem.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button size='small'
                        variant='contained'
                        disableElevation
                        onClick={() => addToCart(cartItem)}>
                            +
                </Button>
                {cartItem.count}
                <Button size='small'
                        variant='contained'
                        disableElevation
                        onClick={() => removeFromCart(cartItem.id)}>
                            -
                </Button>
            </div>
        </div>
       <img src={cartItem.image} alt={cartItem.title}/>
    </Wrapper>
  )
}

export default CartItem