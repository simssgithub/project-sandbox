import logo from './logo.svg';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AiFillSmile, 
  AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineComment
} from 'react-icons/ai'; 
import dog from "./img/dog.jpg";
import ProgressBar from './ProgressBar';

import './App.css';
import PangKulay from './projects/pangKulay';
import likeApp from './projects/likeApp';
import { icons } from 'react-icons';
import Pamagat from './components/Pamagat';

function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () =>{
    if (!like){
      setLike(true);
      setCount(count + 1);
    }else{
      setLike(false);
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
    {/* <PangKulay/>  */}
    <Pamagat text={`Likes ${count}`}/>
    <div className='card text-bg-primary mb-3 m-auto shadow-sm' style={{width:300, cursor:"pointer"}}>
      <div className='card-header fs-xl'>
        <AiFillSmile className='mr-2'/>
        <small>DogyDog</small>
      </div>
      <img src={dog} alt="img" style={{height:"fit-content"}} onDoubleClick={toggleLike}/>

      <div 
      className='card-footer fs-xl d-flex' 
      style={{justifyContent:'space-between'}}
      >
        <AiOutlineComment /> {" "}
        {like ? <AiFillHeart className='text-danger' onClick={toggleLike}/>: <AiOutlineHeart onClick={toggleLike}/>}
      </div>
    </div>
    </div>
  );
}

export default App;
