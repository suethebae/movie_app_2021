import React from 'react';

//props가 해당 컴포넌트의 내용물?을 다들고옴 하지만 더 깔끔하게 쓰기위해서 두번째 방법을 추천
//function Food(props){
//  return <h1>I like {props.fav}</h1>
//}
function Food({ fav }) {
  return <h1>I like {fav}</h1>
}

function App() {
  return <div className="App">
    <h3>hello!</h3>
    <Food fav="kimchi" />
    <Food fav="noodle" />
    <Food fav="bread" />
    <Food fav="candy" />
    <Food fav="salt" />
  </div>;
}

export default App;
