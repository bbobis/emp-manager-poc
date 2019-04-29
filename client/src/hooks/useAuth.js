import { useState, useEffect } from 'react';

export const  useToken = (({ getAccessToken}) => {
    const [accessToken, setAccessToken] = useState(null);
    useEffect(() => {
        const checkForAuthentication = async () => {
            const val = await getAccessToken();
            if (accessToken !== val) {
                setAccessToken(val);
            }
        };

        checkForAuthentication().catch(() => console.error('User not authenticated'));
    });

    return accessToken;
});

export const useIsAuthenticated = ({ isAuthenticated }) => {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const checkForAuthentication = async () => {
            const val = await isAuthenticated();
            if (authenticated !== val) {
                setAuthenticated(val);
            }
        };

        checkForAuthentication().catch(() => console.error('User not authenticated'));
    });

    return authenticated;
};
