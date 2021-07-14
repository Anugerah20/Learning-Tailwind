const { colors } = required('tailwindcss/defaultTheme');
module.exports = {
    // prefix: 'nap-',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    ...colors.blue,
                    100: '#9cbdd',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};