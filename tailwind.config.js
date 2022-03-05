module.exports = {
    content: ["./src/**/*.{html,js}", './index.html'],
    theme: {
        screens: {
            'ipadpro': { 'max': '1024px' },
            'ipad': { 'max': '900px' },
            'miniipad': { 'max': '768px' },
            'tablet': { 'max': '600px' },
            'mobile': { 'max': '420px' },

        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                ping: {
                    '75%, 100%': {
                        transform: 'scale(1.2)',
                        opacity: .8
                    }
                }
            },
            fontSize: {
                '7xl': '5rem',
            },
            backgroundSize: {
                '110%': '110%',
            },
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0px 100px 80px rgba(0, 0, 0, 0.02)',
                    '0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)',
                    '0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)',
                    '0px 20px 13px rgba(0, 0, 0, 0.01)',
                    '0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)',
                    '0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)'
                ]
            },
            boxShadow: {
                '4xl': [
                    '0px 100px 80px rgba(0, 0, 0, 0.02)',
                    '0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)',
                    '0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)',
                    '0px 20px 13px rgba(0, 0, 0, 0.01)',
                    '0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)',
                    '0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)'
                ]
            }
        },
    },
    plugins: [],
}