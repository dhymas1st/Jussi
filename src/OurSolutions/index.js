import { useEffect, useState } from 'react';
import './solutions.scss';

function OurSolutions() {
    const [data, setData] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:3000/static/products.json')
            .then((response) => response.json())
            .then(setData);
    }, []);



    if (!data || !data.length) return null;

    return (
        <div className="solutions">
            <div className="container" >
                {data.map((item) => {
                    const { id, name, description, feature1, feature2, feature3, image, solution } = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info">
                                <h3>{name}</h3>
                                <p>{description}</p>

                                <ul>
                                    <li>{feature1}</li>
                                    <li>{feature2}</li>
                                    <li>{feature3}</li>
                                </ul>

                                <button className="btn-solutions">{solution}</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OurSolutions;