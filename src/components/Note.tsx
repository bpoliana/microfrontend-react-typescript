import React from 'react';

const Note = () => {
    return (
        <div>
            <input
                type="text"
                data-testid="messageText"
            />
            Hello, world
        </div>
    );
};

export default Note;