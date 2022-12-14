import Button from "@material-ui/core/Button";
import {CartItemType} from '../../App'
import { Wrapper } from './item.styles';



interface Props {
    item:CartItemType
    handleAddToCart:(clickedItem:CartItemType) => void
}



const Item:React.FC<Props> = ({item, handleAddToCart}) => {
  return (
    <Wrapper>
        <img src={item.image} alt=""/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  )
}

export default Item