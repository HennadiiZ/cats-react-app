import classes from './App.module.scss';
import { useEffect, useState } from 'react';
import Slider from "./components/Slider/Slider";
import Layout from "./layout/Layout";

const DATA = [
  {id: '9o', url: 'https://cdn2.thecatapi.com/images/9o.gif', width: 179, height: 176},
  {id: '405', url: 'https://cdn2.thecatapi.com/images/405.jpg', width: 1095, height: 730},
  {id: '4gp', url: 'https://cdn2.thecatapi.com/images/4gp.gif', width: 350, height: 254},
  {id: '73t', url: 'https://cdn2.thecatapi.com/images/73t.jpg', width: 500, height: 375},
  {id: '90b', url: 'https://cdn2.thecatapi.com/images/90b.jpg', width: 450, height: 398},
  {id: '98i', url: 'https://cdn2.thecatapi.com/images/98i.jpg', width: 480, height: 639},
  {id: 'bm5', url: 'https://cdn2.thecatapi.com/images/bm5.jpg', width: 1024, height: 768},
  {id: 'cb3', url: 'https://cdn2.thecatapi.com/images/cb3.jpg', width: 483, height: 640},
  {id: 'MTUwNzA3Mw', url: 'https://cdn2.thecatapi.com/images/MTUwNzA3Mw.png', width: 500, height: 741},
  {id: '6vPgXY9tb', url: 'https://cdn2.thecatapi.com/images/6vPgXY9tb.jpg', width: 750, height: 936},
]

function App() {
  // const [catCards, setCatCards] = useState([]);
  const [catCards, setCatCards] = useState(DATA);

  // useEffect(() => {
  //   fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  //   // fetch('https://api.thecatapi.com/v1/images?limit=20&page=1&breed_ids=')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setCatCards(data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <Layout>
      <main>
        {/* {catCards.map(cat => (
          <div key={cat.id}>
            <img src={cat.url} alt="A cat" />
            <p>{cat.breeds}</p>
          </div>
        ))} */}
        <Slider cards={catCards} />
      </main>
    </Layout>
  );
}

export default App;