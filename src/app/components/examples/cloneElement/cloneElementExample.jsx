import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email"/>;
    const handleChange = (target) => {
        console.log("Change: ", target);
    };
    const cloneField = React.cloneElement(field, { onChange: handleChange, label: "cloneEmail" });
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {cloneField}
        </CardWrapper>
    );
};

export { CloneElementExample };
