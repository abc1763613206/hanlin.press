/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
    },
    extend: {
        keyframes: {
            typing: {
                "0%": {
                    width: "0%",
                    visibility: "hidden"
                },
                "100%": {
                    width: "100%"
                }
            },
            blink: {
                "50%": {
                    borderColor: "transparent"
                },
                "100%": {
                    borderColor: "white"
                }
            }
        },
        animation: {
            typing: "typing 2s steps(20) alternate, blink .7s infinite"
        }
    },
  },
  plugins: [],
}

