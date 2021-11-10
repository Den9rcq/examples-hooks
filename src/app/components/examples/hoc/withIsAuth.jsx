import React from "react";
import CardWrapper from "../../common/Card";

const withIsAuth = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props}/>
        </CardWrapper>
    );
};

export default withIsAuth;
