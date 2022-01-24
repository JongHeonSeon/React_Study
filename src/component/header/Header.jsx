/*eslint-disable*/
import React, { useState } from "react";
import '../header/Header.scss';

function Header() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const logoReload = () =>{
        window.location.reload();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Login Complete');
        console.log(id, pw);
    }

    return(
        <div className="Header">
            <div className="Header_wrap">
                <div className="Header__logo">
                    <a href="#" className="Header__logo_txt" onClick={logoReload}>
                        React Study
                    </a>
                </div>
                <form className="Header__input" onSubmit={onSubmit}>
                    <div className="Header__input_wrap">
                        <input type="text" placeholder="ID" value={id} 
                        onChange={(e) => setId(e.target.value)} />
                        <input type="password" placeholder="PW" value={pw}
                        onChange={(e) => setPw(e.target.value)} />
                    </div>
                    <button className="Header__input_btn" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Header;