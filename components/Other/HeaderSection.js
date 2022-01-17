import React from "react";

 const HeaderSection = props => {
    return (
        <>
            <p>Kalle</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    )
}

export default HeaderSection;