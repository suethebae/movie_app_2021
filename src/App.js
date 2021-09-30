import React from 'react';

//props가 해당 컴포넌트의 내용물?을 다들고옴 하지만 더 깔끔하게 쓰기위해서 두번째 방법을 추천
//function Food(props){
//  return <h1>I like {props.fav}</h1>
//}
function Food({ name, pic }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={pic} alt={name} />
  </div>
}

const foodLike = [{
  id: 1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
},
{
  id: 2,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
}];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} pic={dish.image} />
}

function App() {
  return <div>
    {foodLike.map(renderFood)}
  </div>;
}

export default App;
