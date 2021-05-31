import './App.css';
import Tour from './Components/Tour';
import {useState} from 'react';
let data=[
  {
    id: 1,
    heading: "Church of the Holy Wisdom",
    info: "The Hagia Sophia was built in the remarkably short time of about six years.",
    price: 555,
    image: 'https://www.planetware.com/photos-large/TR/turkey-aya-sofya-exterior.jpg'
  },
  {
    id: 2,
    heading: "Not a piece of architecture, as other buildings are, but the proud passions of an emperor’s love wrought in living stones.",
    info: "Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631, having been the emperor’s inseparable companion since their marriage in 1612. India’s most famous and widely recognized building, it is situated in the eastern part of the city on the southern (right) bank of the Yamuna (Jumna) River. Agra Fort (Red Fort), also on the right bank of the Yamuna, is about 1 mile (1.6 km) west of the Taj Mahal.",
    price: 377,
    image: 'https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=451&fit=crop&dpr=1'
  },
  {
    id: 3,
    heading: "Island of Hawaii",
    info: "The island of Hawaii is the youngest and largest island in the Hawaiian chain. Nearly twice as big as all of the other Hawaiian Islands combined (hence, its nickname, “Big Island”), its sheer size is awe-inspiring. You can travel through all but four of the world's different climate zones here, ranging from Wet Tropical to Polar Tundra, a result of the shielding effect and elevations of the massive volcanoes Maunakea and Maunaloa. From the many geological features at Hawaii Volcanoes National Park to the snow-capped heights of Maunakea; from the lush valleys of the Hilo and Hamakua Coasts to the jet-black sands of Punaluu Beach, the island of Hawaii is an unrivaled expression of the power of nature. However you decide to experience the island, it is sure to leave you humbled! Check out the island of Hawaii's regions to explore this vast island.",
    price: 790,
    image: 'https://media.dertouristik.com/exports/KuoniUK/ImageGalleryLightboxLarge/362629_ImageGalleryLightboxLarge.jpg'
  },
  {
    id: 4,
    heading: "Tubbataha Reef, Palawan",
    info: "Tubbataha Reef is regarded as one of the top diving spots in the Philippines, and perhaps, the world. Located at the heart of the Sulu Sea, it is considered a center of marine biodiversity and a haven not just for divers but marine conservationists as well. The only way to get to this marine sanctuary is through a liveaboard vessel from Puerto Princesa, Palawan.",
    price: 690,
    image: 'https://gttp.imgix.net/222328/x/0/top-15-must-visit-tourist-spots-in-the-philippines-4.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883'
  },
  {
    id: 5,
    heading: "Beach of Miami",
    info: "The island of Hawaii is the youngest and largest island in the Hawaiian chain. Nearly twice as big as all of the other Hawaiian Islands combined (hence, its nickname, “Big Island”), its sheer size is awe-inspiring. You can travel through all but four of the world's different climate zones here, ranging from Wet Tropical to Polar Tundra, a result of the shielding effect and elevations of the massive volcanoes Maunakea and Maunaloa. From the many geological features at Hawaii Volcanoes National Park to the snow-capped heights of Maunakea; from the lush valleys of the Hilo and Hamakua Coasts to the jet-black sands of Punaluu Beach, the island of Hawaii is an unrivaled expression of the power of nature. However you decide to experience the island, it is sure to leave you humbled! Check out the island of Hawaii's regions to explore this vast island.",
    price: 890,
    image: 'https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/1456586749671-HT3YKSR3IU5G4AB60HRI/ke17ZwdGBToddI8pDm48kP7qZo9B42Tf82gjeFo3qcJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeVrK2ek6KxRMxWn8E8KYrgT-nkYqKvCTmEyv_fiP4_Bmnsx-1B3p9qlOeOPgJhlSg/Best+Miami+Hotels+with+a+View+1.jpg?format=2500w'
  }
]
function App() {
  const [places,setPlaces]=useState(data);
  let temp;
  const removePlaces=(id)=>{
      temp=places.filter((item)=>item.id!==id);
      setPlaces(temp);
  };
  const refresh =()=>{
    setPlaces(data);
  }
  if(places.length===0){
    return (
      
        <main className='Container'>
          <div className='msg'>
            <h3>No item left</h3>
            <button className='btn' onClick={refresh}>Refresh</button>
          </div>
        </main>
      
      
    )
  }
  return (
    
      <main className="Container">
      {places.map((place)=>{
          return <Tour removePlaces={removePlaces} data={place} key={place.id}/>
      })}
      </main>
    
  ); 

}

export default App;
