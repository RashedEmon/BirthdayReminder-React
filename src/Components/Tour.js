import React from 'react'
import {useState} from 'react';
export default function Tour(props) {
    const [seeMore,setSeeMore]=useState(true);

    const {id,heading,info,price,image}=props.data;
    const {removePlaces}=props;

    const toggleButton=()=>{
        if(seeMore)
            setSeeMore(false);
        else
            setSeeMore(true);
    }
    return (
        <section className='item'>
            <img src={image} alt={id}/>
            <div className='heading'>
                <h3>{heading}</h3>
                <div className='price'><span>$</span>{price}</div>
            </div>
            <p className='info'>{seeMore?info.length<200?info:`${info.substring(0,200)}...`:info} {info.length>=200?<button className='toogleBtn' onClick={()=>toggleButton()}>{seeMore?'See More':'See Less'}</button>:''}</p>
            
            <div><button className='btn' onClick={()=>removePlaces(props.data.id)}>Remove</button></div>
        </section>
    )
}
