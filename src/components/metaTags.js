import { Helmet } from 'react-helmet-async';

const MetaTags = ({
    title = 'Oldcord',
    description = 'Oldcord, it is website. He is for old instant-messager. Good for use.',
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default MetaTags;