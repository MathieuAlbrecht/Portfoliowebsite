module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scanne alle relevanten React-Dateien
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Beispiel: Primärfarbe
                secondary: "#1E3A8A", // Beispiel: Sekundärfarbe
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'spin-slower': 'spin 24s linear infinite',
                'spin-slowest': 'spin 48s linear infinite',
            },
        },
    },
    plugins: [],
};
