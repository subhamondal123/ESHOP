const InitialState = {
    
    products:[{
      
      id:1,
      tagName:'slimShirt',
      name: 'Slim shirt',
      category:'shirt',
      image:'sam.jpg',
      price:60,
      brand:'Adidas',
      rating: 4.5,
      numbers:0,
      
  },
  {
    id:2,
    tagName:'fitShirt',
    name: 'Best fit T-shirt',
    category:'shirt',
    image:'sam2.jpg',
    price:45,
    brand:'Nike',
    rating: 4.2,
    numReviews:5 ,
    numbers:0,
    inCart:false
  },
  
   {
    id:3,
    tagName:'fitPant',
    name: 'Slim fit pant',
    category:'pant',
    image:'sam3.jpg',
    price:50,
    brand:'Adidas',
    rating: 4.5,
    numReviews:10,
    numbers:0,
    inCart:false
  },
  {
  id:4,
  tagName:'trackPant',
  name: 'Slim Track Pants',
  category:'pant',
  image:'sam4.jpg',
  price:65,
  brand:'Adidas',
  rating: 4.5,
  numReviews:7,
  numbers:0,
  inCart:false
  },
  {
  id:5,
  tagName:'slimTrouser',
  name: 'Slim Trouser',
  category:'pant',
  image:'sam5.jpg',
  price:50,
  brand:'Adidas',
  rating: 4.5,
  numReviews:7,
  numbers:0,
  inCart:false
  },
  {
  id:6,
  tagName:'casualShirt',
  name: 'Slim Printed Casual shirt',
  category:'shirt',
  image:'sam6.jpeg',
  price:40,
  brand:'Adidas',
  rating: 4.5,
  numReviews:7,
  numbers:0,
  inCart:false
  },
    ],
    product:{}
}
const productReducers = (state = InitialState, action) => {
    
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default productReducers;
