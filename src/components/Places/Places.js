import React from 'react'
import Img1 from '../../asset/places/beach-4865786_1280.jpg';
import Img2 from '../../asset/places/taj-mahal-3654227_1280.jpg';
import Img3 from '../../asset/places/nature-3733115_1280.jpg';
import Img4 from '../../asset/places/beach-4865786_1280.jpg';
import Img5 from '../../asset/places/lake-6476212_1280.jpg';
import Img6 from '../../asset/places/hong-kong-4046913_1280.jpg';
import { PlaceCard } from './PlaceCard';


const Places = () => {
    const PlacesData = [
        {
          img: Img1,
          title: "Boat",
          location: "USA",
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img2,
          title: "Taj Mahal",
          location: "India",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img3,
          title: "Underwater",
          location: "US",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6200,
          type: "Cultural Relax",
        },
        {
          img: Img4,
          title: "Sydney",
          location: "USA",
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img5,
          title: "Los Angeles",
          location: "United states",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img6,
          title: "Los Vegas",
          location: "California",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6200,
          type: "Cultural Relax",
        },
      ];
  return (
   <div className='bg-gary-50 py-10'>
    <div className='container'>
        <div className='border-l-8 border-primaryColor/70'>
            <h1 className='font-bold text-3xl px-3'>Best Place to Visit</h1>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {PlacesData.map((places,index)=>(
            <PlaceCard  key={index} {...places}/>
        ))}
        </div>
    </div>
   </div>
  )
}

export default Places