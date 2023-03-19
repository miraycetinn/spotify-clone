/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        fontFamily: {
            'display': ['CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;'],
            'body': ['CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;'],
        },
        extend: {
            colors: {
                backdrop: '#121212',
                primary: '#1db954',
                active: '#282828',
                link: '#b3b3b3',
                footer: '#181818'
            }
        },
    },
    plugins: [],
}
