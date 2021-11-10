import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => console.log("render button"));
    return <button className="btn btn-primary mx-2" onClick={onLogOut}>LogOut</button>;
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
        console.log("Log out");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initial rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut}/>
        </>
    );
};

export default MemoWithUseCallbackExample;
