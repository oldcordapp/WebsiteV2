import { useEffect } from 'react';

const PageTitle = ({ title }) => {
    useEffect(() => {
        document.title = title;

        return () => {
            document.title = 'Oldcord';
        };
    }, [title]);

    return null;
};

export default PageTitle;