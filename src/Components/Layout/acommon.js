// Common Ancestor Component
import React, { useState } from 'react';
import Sign from '../Layout/Profile/sign';
import Header from '../Layout/Header';

function CommonAncestorComponent() {
    const [responseStatus, setResponseStatus] = useState(null);

    const updateResponseStatus = (status) => {
        setResponseStatus(status);
    };

    return (
        <div>
            <Sign updateResponseStatus={updateResponseStatus} />
            <Header responseStatus={responseStatus} />
        </div>
    );
}

export default CommonAncestorComponent;