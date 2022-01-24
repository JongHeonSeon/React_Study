import React, { useState } from "react";
import './List.scss';

function List() {

    const [list, setList] = useState('');

    return(
        <div className="List">
            <div className="List_wrap">
                <a href="#" className="List__card">

                </a>
            </div>
        </div>
    );
}

export default List;