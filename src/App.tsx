import React, {useState, useMemo, useCallback}  from 'react';
import { useQuery } from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Badge from '@material-ui/core/Badge'
import AddShopingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid'
import Cart from './components/Cart/Cart';
//Styles
import { Wrapper, StyledButton } from './App-styles';
import Item from './components/Item/Item';

 export type CartItemType = {
   id:number,
   category:string,
   description:string,
   image:string,
   price:number,
   title:string,
   count:number
 }




const getProducts = async ():Promise<CartItemType[]> => {
  return await(await fetch('https://fakestoreapi.com/products')).json()
}



const  App:React.FC = () =>  {

  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

  const [cartItems, setCartItems] = useState([] as CartItemType[])

const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)



const handleAddToCart = (item:CartItemType) => {
  setCartItems(prev => {
    const itemIsInCart = prev.find(itemInCart => itemInCart.id === item.id)
    if(itemIsInCart){
      return prev.map((i => (
      i.id === item.id
      ?{...i, count:i.count + 1} 
      :i
      )))
    }
    else {
      return [...prev, {...item, count:1 }]
    }
  })
}

const handleRemoveToCart = (id:number):void => {
  setCartItems(prev => 
    prev.reduce((acc, item) => {
      if(item.id === id) {
        if(item.count === 1) return acc;
        return [...acc, {...item, count:item.count -1}];
      } else {
        return [...acc, item]
      }
    }, [] as CartItemType[]))
}




const getTotalCountInCart = (cart:CartItemType[]):number => {
  console.log(cart)
 return cart.reduce((acc:number, curr) => acc + curr.count,0)
}


console.log(getTotalCountInCart(cartItems))

if(isLoading) <LinearProgress />
if(error)  <div>Something went wrong....</div>



  return (
   <Wrapper>
     <Drawer anchor='right' onClose={() => setCartIsOpen(false)} open={cartIsOpen}>
        <Cart cartItems={cartItems} 
              addToCart={handleAddToCart} 
              removeFromCart={handleRemoveToCart}/>
     </Drawer>
     <StyledButton onClick={() => setCartIsOpen(true)}>
        <Badge badgeContent={getTotalCountInCart(cartItems)} color='error'>
          <AddShopingCartIcon />
        </Badge>
     </StyledButton>
     <Grid container spacing={3}>
       {data?.map((item:CartItemType) => {
         return <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={() => handleAddToCart(item)}/>
         </Grid>})}
     </Grid>
   </Wrapper>
  );
}

export default App;
