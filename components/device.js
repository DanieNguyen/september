const size = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1600px',
    desktopL: '1900px',
};

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`
};
