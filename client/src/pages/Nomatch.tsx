import React from 'react';
import {Link} from "react-router-dom";

function Nomatch() {
    return (
        <div>
            <h1 className="text-3xl">404</h1>
            <h3 className="text-xl font-bold underline">
                <Link to="/ui">Go to the home page</Link>
            </h3>
        </div>
    );
}

export default Nomatch;