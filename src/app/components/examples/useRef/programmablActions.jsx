import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label
                className="form-label"
                htmlFor="email"
            >
                Email
            </label>
            <input
                ref={inputRef}
                className="form-control"
                type="email"
                id="email"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={handleClick}
            >
                Фокус input
            </button>
            <button
                className="btn btn-secondary mt-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
