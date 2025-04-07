const MetaTags = ({
    title = 'Oldcord',
    description = 'Oldcord, it is website. He is for old instant-messager. Good for use.',
}) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    );
};

export default MetaTags;