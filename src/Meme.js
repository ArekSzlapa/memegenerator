import { useState,useEffect } from "react";

const Meme = () => {
  const getNewMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const memeUrl = allMemeImages[randomNumber].url;
    console.log(memeUrl);
    setMeme((prevEl) => {
      return {
        ...prevEl,
        randomImage: memeUrl,
      };
    }); 
  };

    useEffect(()=>{
      fetch('https://api.imgflip.com/get_memes')
      .then (res=>res.json())
      .then(data=>setAllMemeImages(data.data.memes))
    })


  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3qqcim.png",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);  
  function handleChange(event){
    const {name, value} = event.target
    setMeme(prev=>({
      ...prev,
      [name]:value
    }))
  }
  return (
    <main>
      <div className="Meme--container">
        <input
          value={meme.topText}
          name='topText'
          onChange={handleChange}
          className="Meme--input"
          type="text"
          placeholder="And take my money!"
        />
        <input 
         className="Meme--input"
         type="text" 
         placeholder="Shut up"
         value={meme.bottomText}
        name='bottomText'
        onChange={handleChange}
         />
        <button onClick={getNewMeme}>
          Get a new meme image! <i class="fa-solid fa-image"></i>
        </button>
      </div>
      <div className="meme">
                <img src={meme.randomImage} className="Meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
};

export default Meme;
