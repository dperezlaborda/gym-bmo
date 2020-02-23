import React from 'react';
import './Card.scss';
import AddBttn from '../Actions/AddBttn';

const Card = (props) =>{
    return(
        <div className="card middle">
            <div className="front image" style={{
                backgroundImage: `url(${props.img})`
            }}>
            </div>
            <div className="back">
                <table className="table-container">
                    <thead>
                        <h1 className="table-title">LUNES</h1>
                        <tbody>
                            <th>
                                <h2>aerobico</h2>
                                <td>
                                    {props.wrkt}
                                </td>
                                <td>
                                    <AddBttn></AddBttn>
                                </td>
                            </th>
                            <th>
                                <h2>localizada</h2>
                                <td>
                                    {props.wrkt2}
                                </td>
                                <td>
                                    <AddBttn></AddBttn>
                                </td>
                            </th>
                        </tbody>
                    </thead>
                </table>
            </div> 
        </div>
    )
}

export default Card;