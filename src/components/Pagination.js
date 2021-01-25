import React from 'react';


import './styles.css';

const Paginations = ({ criptoPerPage, totalCripto, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCripto / criptoPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>

                <ul className="pagination">
                {pageNumbers.map(number => (
                   <li key={number}>
                        <a  onClick={()=>paginate(number)} href="!#">{number}</a>
                    </li>

                ))}
                </ul>
            
        </div>
    );
}

export default Paginations;
