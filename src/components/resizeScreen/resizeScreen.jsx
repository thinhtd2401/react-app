import { useState, useEffect } from "react";

function ResizeScreen(){

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return(
        <div className="resizeScreen">
            <span>Resize the screen to see the effect. The current screen is: <b>{width}</b></span>
        </div>
    )
}

export default ResizeScreen;