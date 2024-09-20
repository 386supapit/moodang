import { useState } from 'react';
import './App.css';
import initialPigImage from './assets/hippo.png'; 
import selfImage from './assets/me.png'; 
import watermelonImage from './assets/watermelon.png'; 
import pumpkinImage from './assets/pumpkin.png'; 
import grassImage from './assets/grass.png'; 

function App() {
  const [level, setLevel] = useState(0);
  const [image, setImage] = useState(initialPigImage);

  const handleFoodClick = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);

    // เปลี่ยนรูปภาพเมื่อ Level เกิน 100
    if (newLevel > 100) {
      setImage(selfImage);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>เกมส์เลี้ยงหมูเด้ง</h1>
        <img 
          src={image} 
          alt="หมูเด้ง" 
          style={{ width: `${level > 100 ? 10 : Math.min(level / 10, 10)}em`, transition: 'width 0.3s' }} 
        />
        <h2>Level: {level}</h2>
        <div>
          <p>คลิกที่รูปอาหารเพื่อให้อาหารหมูเด้ง!</p>
          <div style={{ display: 'inline-block', margin: '10px' }}>
            <img 
              src={watermelonImage} 
              alt="แตงโม" 
              style={{ cursor: 'pointer', width: '100px' }} 
              onClick={() => handleFoodClick(5)} 
            />
            <p> +5</p>
          </div>
          <div style={{ display: 'inline-block', margin: '10px' }}>
            <img 
              src={pumpkinImage} 
              alt="ฟักทอง" 
              style={{ cursor: 'pointer', width: '100px' }} 
              onClick={() => handleFoodClick(10)} 
            />
            <p> +10</p>
          </div>
          <div style={{ display: 'inline-block', margin: '10px' }}>
            <img 
              src={grassImage} 
              alt="หญ้า" 
              style={{ cursor: 'pointer', width: '100px' }} 
              onClick={() => handleFoodClick(20)} 
            />
            <p> +20</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
