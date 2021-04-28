import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
{id:1, name: "Kimchi", picture: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"},
{id:2, name: "bulgogi", picture: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"},
{id:3, name: "kimbap", picture: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"},
{id:4, name: "Doncasu", picture: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"}
];

function App() {
  return ( 
  <div> 
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.picture} />
    ))}
  </div>
  );
}

export default App;
