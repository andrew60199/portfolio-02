import React from 'react';

export default function Project(props) {
  return (
    <figure>
        <a className="image-link" href={props.imageLink} target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="" />
        </a>
        <figcaption>
            <h3>{props.name}</h3>
            {props.content.map((paragragh, index) => {
                return <p key={index}>{paragragh}</p>
            })}
        </figcaption>
    </figure>
  );
}