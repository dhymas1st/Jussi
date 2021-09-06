import React, { useState } from 'react';
import './header.scss';
import LogoJussi from '../img/logoJussiVectorGreen.svg'
import Search from '../img/search.svg'
import Close from '../img/close.svg'
import Cart from '../img/cart.svg'
import Menu from '../img/menu.svg'


function Header({ placeholder, data }) {

    const [showLinks, setShowLinks] = useState(false);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="logojussi">
                    <img src={LogoJussi} alt="Jüssi | The Business Agency." />
                </div>
                <nav className="links" id={showLinks ? "hidden" : ""}>
                    <ul>
                        <a href="/home">Nossas soluções</a>
                        <a href="/feedback">Conheça a Jussi</a>
                    </ul>
                </nav>
                <button onClick={() => setShowLinks(!showLinks)}>
                    {" "}

                    <img src={Menu} alt="" />

                </button>
            </div>
            <div className="rightSide">
                <div className="search">
                    <div className="search-box">
                        <input
                            className="search-txt"
                            type="text"
                            placeholder={placeholder}
                            value={wordEntered}
                            onChange={handleFilter}
                        />

                        <button className="search-btn">

                            {filteredData.length === 0 ? (
                                <img src={Search} alt="" />
                            ) : (
                                <img src={Close} alt="" id="clearBtn" onClick={clearInput} />
                            )}
                        </button>

                    </div>
                    {filteredData.length !== 0 && (
                        <div className="dataResult">
                            {filteredData.slice(0, 15).map((value) => {
                                return (
                                    <a className="dataItem" href={`https://www.pokemon.com/us/pokedex/${value.name}`} target="_blank" rel="noreferrer">
                                        <p>{value.name} </p>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>


                <div className="login"><p>Login</p></div>
                <div className="cart"><img src={Cart} alt="" /></div>
            </div>

        </div>
    )
}

export default Header;
