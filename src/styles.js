import React from 'react';

export const styles = {
    title1: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'Lato',
        marginBottom: 6,
    },
    title2: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        textTransform: 'uppercase',
        marginBottom: 6,
        '@media min-width: 800': {
            marginBottom: 0,
        },
    },
    title3: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        marginBottom: 6,
        '@media min-width: 800': {
            marginBottom: 0,
        },
    },
    dateText: {
        fontSize: 11,
        fontFamily: 'Lato-Italic',
        '@media min-width: 800': {
            fontSize: 10,
        },
    },
    bodyText: {
        fontSize: 11,
        fontFamily: 'Lato',
        '@media min-width: 800': {
            fontSize: 10,
        },
    },
    sectionContainer: {
        marginBottom: 10,
        '@media min-width: 800': {
            marginBottom: 4,
        },
    },
    entryContainer: {
        marginBottom: 6,
    },
};

export const StylesContext = React.createContext(
    styles,
);
