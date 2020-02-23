import React from 'react';
import './Body.scss';
import Card from '../Components/Card';
import Bmo from './bmoback.jpg'

const Body = () =>{
    const datos = [
        {
            img:Bmo,
            wrkt:"trotar",
            wrkt2:"eliptico",
            wrkt3:"step",
            time:"",
            repeat:""
        }
    ]
    return(
        <div>
            { datos.map ( d =>{
                return(
                    <Card
                        img={d.img}
                        wrkt={d.wrkt}
                        wrkt2={d.wrkt2}
                        wrkt3={d.wrkt3}
                        time={d.time}
                        repeat={d.repeat} 
                    ></Card>
                )
            })}

        </div>
    )
}

export default Body;