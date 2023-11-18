import "./App.css";
import React from 'react'


function Arama({aramaMetni,onSearch}){
  
  function handleChange(event){
    setAramaMetni(event.target.value);
    props.onSearch(event);
  }
  
  return(
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
      <p>
      </p>
    </div>
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
      <span>
       <a href={url}>{baslik}</a>, 
       </span>
       <span><b>Yazar:</b> {yazar}, </span>
       <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
       <span><b>Puan:</b> {puan}</span>
    </li>
  )
}
function Liste(props){
  return(
    <ul>
        {props.yazilar.map(function(yazi){
        return(
        <Yazi key={yazi.id} {...yazi}/>
        );
      })}
    </ul>
  )
}
function App() {
  const[aramaMetni, setAramaMetni]=React.useState(localStorage.getItem("aranan")||"React");
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "	'67 Shelby GT500",
      url: "R0916",
      yazar: "Kevin Cao",
      yorum_sayisi: 1,
      puan: 52,
      id: 2,
    },
    {
      baslik: "	'09 Corvette Stingray Concept",
      url: "R0936",
      yazar: "Greg Padginton",
      yorum_sayisi: 21,
      puan: 52,
      id: 3,
    },
    {
      baslik: "'17 Pagani Huayra Roadster",
      url: "DTW86",
      yazar: "Ryu Asada",
      yorum_sayisi: 22,
      puan: 2017,
      id: 4,
    },
  ];
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());

    }
  );
  //1.aşama :callback metodu oluşturma
  function handleSearch(event){
    setAramaMetni(event.target.value);
    //localStorage.setItem("aranan",event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]
   );
  return (
    <>
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch}/>
      <hr />
      <strong>{aramaMetni} aranıyor...</strong>
      <Liste yazilar={arananYazilar}/>
</>
  );
}
export default App;