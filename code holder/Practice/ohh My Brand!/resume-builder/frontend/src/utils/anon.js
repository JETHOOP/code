export const getAnonymousId = () => {
    let anonId = localStorage.getItem('anonymousId');
    if (!anonId) {
        anonId = crypto.randomUUID();
        localStorage.setItem('anonymousId', anonId);
    }
    return anonId;
};

export const getAnonConfig = () => {
    return {
        headers: {
            'x-anonymous-id': getAnonymousId()
        }
    };
};
