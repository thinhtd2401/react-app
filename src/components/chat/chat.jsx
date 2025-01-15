import { useEffect, useState } from "react";

function Chat() {
    const groups = [
        { id: 1, name: "Dot NET Development" },
        { id: 2, name: "Database" },
        { id: 3, name: "Javascript" }
    ];

    const [selectedGroupId, setSelectedGroupId] = useState(1);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const handleEmittedComment = (event) => {
            setComments(prevComments => [...prevComments, event.detail]);
        };

        window.addEventListener(`emmitComment-${selectedGroupId}`, handleEmittedComment);
        return () => {
            window.removeEventListener(`emmitComment-${selectedGroupId}`, handleEmittedComment);
        }
    }, [selectedGroupId]);

    function handleGroupChange(groupId) {
        setSelectedGroupId(groupId);
        setComments([]);
    }

    return (
        <>
            <h1>Take Chat</h1>
            <ul>
                {
                    groups.map(group => (
                        <li key={group.id} onClick={() => handleGroupChange(group.id)}>{group.name}
                        </li>
                    ))
                }
            </ul>

            <div>
                {
                    comments.map((comment, index) => (
                        <div key={index}>
                            <h3>{comment}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Chat;