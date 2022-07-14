import React from 'react';

export const styles = {
    title1: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Lato',
        marginBottom: 6,
    },
    title2: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    title3: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        marginBottom: 6,
    },
    dateText: {
        fontSize: 10,
        fontFamily: 'Lato-Italic',
    },
    bodyText: {
        fontSize: 11,
        fontFamily: 'Lato',
    },
    sectionContainer: {
        marginBottom: 12,
    },
    entryContainer: {
        marginBottom: 8,
    },
};

export const StylesContext = React.createContext(
    styles,
);
