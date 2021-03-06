import React, { Component } from 'react';

const MoviesTable = (props) => {
   const { movies , onDelete} = props;


    return ( 

        <table className="table" >
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Delete</th>
                <th></th>
                
            </tr>
        </thead>
        
    

        <tbody>
        {movies.map(movie => (
        <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
               
                <td>
                    <button onClick={() => onDelete (movie)} 
                    className="btn btn-warning btn-sm"
                    >
                    Delete
                    </button>
                </td>
            </tr>
            ))}
         </tbody>

    </table>
    ) ;
}

export default MoviesTable ;