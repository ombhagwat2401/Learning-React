
import { useState } from 'react';
import './App.css';
import User from './components/User';
import FoodDish from './components/FoodDish';

function App() {

  const data = [
    {
      id: 1,
      image: './images/img1.jpg',
      name: 'Chicken Biryani',
      price: 120
    },
    {
      id: 2,
      image: './images/img2.jpg',
      name: 'Fried Rice',
      price: 90
    },
    {
      id: 3,
      image: './images/img3.jpg',
      name: 'Upma',
      price: 80
    },
    {
      id: 4,
      image: './images/img4.jpg',
      name: 'Idly Sambar',
      price: 70
    },

    {
      id: 5,
      image: './images/img5.jpg',
      name: 'Paratha',
      price: 100
    },
    {
      id: 6,
      image: './images/img6.jpg',
      name: 'Cheese Paratha',
      price: 190
    },
    {
      id: 7,
      image: './images/img7.jpg',
      name: 'Sandwhich',
      price: 190
    },
    {
      id: 8,
      image: './images/img8.jpg',
      name: 'Soyabean Chilly',
      price: 60
    },
    {
      id: 9,
      image: './images/img9.jpg',
      name: 'Paneer Chilli',
      price: 90
    },
    {
      id: 10,
      image: './images/img10.jpg',
      name: 'Dal Khichadi',
      price: 40
    }

  ]



  const [foodData, setFoodData] = useState(data)

  const searchFoodItem = (e) => {

    const tempData = data.filter((f) => {
      return (f.name.toString().toLowerCase().includes(e.target.value.toLowerCase()))
    })

    setFoodData(tempData)
  }

  return (
    <div className='foodapp'>
      <h1>Omie FoodApp</h1>
      <input type="text" placeholder='Search Food Dish...' onChange={searchFoodItem} />
      <div className='foodItem__container'>


        {
          foodData.map((foodDish) => {
            return (
              <FoodDish foodImg={foodDish.image} foodName={foodDish.name} foodPrice={foodDish.price} />
            )
          })
        }










      </div>
    </div>
  );
}


export default App;



