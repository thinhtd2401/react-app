import { useState, useEffect } from "react";
import './scrollButton.css';
function ScrollButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <button
                    className="scroll-button"
                    onClick={scrollToTop}>
                    Go To Top
                </button>
            )}
        </>
    );
}

export default ScrollButton;