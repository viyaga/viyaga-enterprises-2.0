// tailwind.config.ts
export default {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-start': '#0f172a',
                'bg-mid': '#1e293b',
                'bg-end': '#0f172a',
                'primary': '#2fb97d',
            },
        },
    },
    plugins: [],
};
