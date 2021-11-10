import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState(prevState =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider/>
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;