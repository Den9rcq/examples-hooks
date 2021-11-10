import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("Run Factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    useEffect(() => {
        console.log("render");
    });
    const colorBtn = otherState ? "btn-primary" : "btn-secondary";
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider/>
                <p>Value: {value}</p>
                <p>Result fact : {fact}</p>
                <button className="btn btn-primary mx-1"
                        onClick={() => setValue(prevState => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => setValue(prevState => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider/>
                <button
                    className={`btn ${colorBtn}`}
                    onClick={() => setOtherState(prevState => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
