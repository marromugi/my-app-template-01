import type { Config } from 'tailwindcss'

const fibonacci = (count: number) => {
  let i = 0
  let n = 0
  while (i < count) {
    i++
    n += i
  }

  return n
}

const moduler = (ratio: number, base: number = 8) => {
  return base / ratio
}

/**特定の単位に基づいて最少のサイズを返却する関数 */
const minspace = (size: number, perUnit: number = 0.25) => {
  let result = perUnit
  while (result < size) {
    result += perUnit
  }
  return result
}

const popoverTranslateAmount = '0.5rem'

const transitionTimingFunction = {
  'ease-in-out-quick': 'cubic-bezier(.35,0,.37,1.05)'
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)'
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)'
        },
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)'
        },
        warning: {
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)'
        },
        error: {
          50: 'var(--color-error-50)',
          100: 'var(--color-error-100)',
          200: 'var(--color-error-200)',
          300: 'var(--color-error-300)',
          400: 'var(--color-error-400)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)',
          700: 'var(--color-error-700)',
          800: 'var(--color-error-800)',
          900: 'var(--color-error-900)'
        },
        info: {
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)'
        },
        gray: {
          50: 'var(--mg-color-primitive-gray-50)',
          100: 'var(--mg-color-primitive-gray-100)',
          200: 'var(--mg-color-primitive-gray-200)',
          300: 'var(--mg-color-primitive-gray-300)',
          400: 'var(--mg-color-primitive-gray-400)',
          500: 'var(--mg-color-primitive-gray-500)',
          600: 'var(--mg-color-primitive-gray-600)',
          700: 'var(--mg-color-primitive-gray-700)',
          800: 'var(--mg-color-primitive-gray-800)',
          900: 'var(--mg-color-primitive-gray-900)',
          '50-alpha': 'var(--mg-color-primitive-gray-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-gray-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-gray-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-gray-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-gray-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-gray-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-gray-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-gray-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-gray-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-gray-900-alpha)'
        },
        blue: {
          50: 'var(--mg-color-primitive-blue-50)',
          100: 'var(--mg-color-primitive-blue-100)',
          200: 'var(--mg-color-primitive-blue-200)',
          300: 'var(--mg-color-primitive-blue-300)',
          400: 'var(--mg-color-primitive-blue-400)',
          500: 'var(--mg-color-primitive-blue-500)',
          600: 'var(--mg-color-primitive-blue-600)',
          700: 'var(--mg-color-primitive-blue-700)',
          800: 'var(--mg-color-primitive-blue-800)',
          900: 'var(--mg-color-primitive-blue-900)',
          1000: 'var(--mg-color-primitive-blue-1000)',
          1100: 'var(--mg-color-primitive-blue-1100)',
          1200: 'var(--mg-color-primitive-blue-1200)',
          '50-alpha': 'var(--mg-color-primitive-blue-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-blue-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-blue-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-blue-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-blue-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-blue-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-blue-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-blue-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-blue-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-blue-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-blue-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-blue-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-blue-1200-alpha)'
        },
        green: {
          50: 'var(--mg-color-primitive-green-50)',
          100: 'var(--mg-color-primitive-green-100)',
          200: 'var(--mg-color-primitive-green-200)',
          300: 'var(--mg-color-primitive-green-300)',
          400: 'var(--mg-color-primitive-green-400)',
          500: 'var(--mg-color-primitive-green-500)',
          600: 'var(--mg-color-primitive-green-600)',
          700: 'var(--mg-color-primitive-green-700)',
          800: 'var(--mg-color-primitive-green-800)',
          900: 'var(--mg-color-primitive-green-900)',
          1000: 'var(--mg-color-primitive-green-1000)',
          1100: 'var(--mg-color-primitive-green-1100)',
          1200: 'var(--mg-color-primitive-green-1200)',
          '50-alpha': 'var(--mg-color-primitive-green-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-green-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-green-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-green-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-green-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-green-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-green-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-green-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-green-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-green-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-green-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-green-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-green-1200-alpha)'
        },
        red: {
          50: 'var(--mg-color-primitive-red-50)',
          100: 'var(--mg-color-primitive-red-100)',
          200: 'var(--mg-color-primitive-red-200)',
          300: 'var(--mg-color-primitive-red-300)',
          400: 'var(--mg-color-primitive-red-400)',
          500: 'var(--mg-color-primitive-red-500)',
          600: 'var(--mg-color-primitive-red-600)',
          700: 'var(--mg-color-primitive-red-700)',
          800: 'var(--mg-color-primitive-red-800)',
          900: 'var(--mg-color-primitive-red-900)',
          1000: 'var(--mg-color-primitive-red-1000)',
          1100: 'var(--mg-color-primitive-red-1100)',
          1200: 'var(--mg-color-primitive-red-1200)',
          '50-alpha': 'var(--mg-color-primitive-red-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-red-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-red-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-red-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-red-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-red-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-red-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-red-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-red-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-red-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-red-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-red-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-red-1200-alpha)'
        },
        yellow: {
          50: 'var(--mg-color-primitive-yellow-50)',
          100: 'var(--mg-color-primitive-yellow-100)',
          200: 'var(--mg-color-primitive-yellow-200)',
          300: 'var(--mg-color-primitive-yellow-300)',
          400: 'var(--mg-color-primitive-yellow-400)',
          500: 'var(--mg-color-primitive-yellow-500)',
          600: 'var(--mg-color-primitive-yellow-600)',
          700: 'var(--mg-color-primitive-yellow-700)',
          800: 'var(--mg-color-primitive-yellow-800)',
          900: 'var(--mg-color-primitive-yellow-900)',
          1000: 'var(--mg-color-primitive-yellow-1000)',
          1100: 'var(--mg-color-primitive-yellow-1100)',
          1200: 'var(--mg-color-primitive-yellow-1200)',
          '50-alpha': 'var(--mg-color-primitive-yellow-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-yellow-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-yellow-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-yellow-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-yellow-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-yellow-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-yellow-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-yellow-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-yellow-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-yellow-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-yellow-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-yellow-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-yellow-1200-alpha)'
        },
        lime: {
          50: 'var(--mg-color-primitive-lime-50)',
          100: 'var(--mg-color-primitive-lime-100)',
          200: 'var(--mg-color-primitive-lime-200)',
          300: 'var(--mg-color-primitive-lime-300)',
          400: 'var(--mg-color-primitive-lime-400)',
          500: 'var(--mg-color-primitive-lime-500)',
          600: 'var(--mg-color-primitive-lime-600)',
          700: 'var(--mg-color-primitive-lime-700)',
          800: 'var(--mg-color-primitive-lime-800)',
          900: 'var(--mg-color-primitive-lime-900)',
          1000: 'var(--mg-color-primitive-lime-1000)',
          1100: 'var(--mg-color-primitive-lime-1100)',
          1200: 'var(--mg-color-primitive-lime-1200)',
          '50-alpha': 'var(--mg-color-primitive-lime-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-lime-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-lime-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-lime-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-lime-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-lime-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-lime-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-lime-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-lime-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-lime-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-lime-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-lime-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-lime-1200-alpha)'
        },
        orange: {
          50: 'var(--mg-color-primitive-orange-50)',
          100: 'var(--mg-color-primitive-orange-100)',
          200: 'var(--mg-color-primitive-orange-200)',
          300: 'var(--mg-color-primitive-orange-300)',
          400: 'var(--mg-color-primitive-orange-400)',
          500: 'var(--mg-color-primitive-orange-500)',
          600: 'var(--mg-color-primitive-orange-600)',
          700: 'var(--mg-color-primitive-orange-700)',
          800: 'var(--mg-color-primitive-orange-800)',
          900: 'var(--mg-color-primitive-orange-900)',
          1000: 'var(--mg-color-primitive-orange-1000)',
          1100: 'var(--mg-color-primitive-orange-1100)',
          1200: 'var(--mg-color-primitive-orange-1200)',
          '50-alpha': 'var(--mg-color-primitive-orange-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-orange-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-orange-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-orange-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-orange-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-orange-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-orange-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-orange-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-orange-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-orange-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-orange-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-orange-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-orange-1200-alpha)'
        },
        purple: {
          50: 'var(--mg-color-primitive-purple-50)',
          100: 'var(--mg-color-primitive-purple-100)',
          200: 'var(--mg-color-primitive-purple-200)',
          300: 'var(--mg-color-primitive-purple-300)',
          400: 'var(--mg-color-primitive-purple-400)',
          500: 'var(--mg-color-primitive-purple-500)',
          600: 'var(--mg-color-primitive-purple-600)',
          700: 'var(--mg-color-primitive-purple-700)',
          800: 'var(--mg-color-primitive-purple-800)',
          900: 'var(--mg-color-primitive-purple-900)',
          1000: 'var(--mg-color-primitive-purple-1000)',
          1100: 'var(--mg-color-primitive-purple-1100)',
          1200: 'var(--mg-color-primitive-purple-1200)',
          '50-alpha': 'var(--mg-color-primitive-purple-50-alpha)',
          '100-alpha': 'var(--mg-color-primitive-purple-100-alpha)',
          '200-alpha': 'var(--mg-color-primitive-purple-200-alpha)',
          '300-alpha': 'var(--mg-color-primitive-purple-300-alpha)',
          '400-alpha': 'var(--mg-color-primitive-purple-400-alpha)',
          '500-alpha': 'var(--mg-color-primitive-purple-500-alpha)',
          '600-alpha': 'var(--mg-color-primitive-purple-600-alpha)',
          '700-alpha': 'var(--mg-color-primitive-purple-700-alpha)',
          '800-alpha': 'var(--mg-color-primitive-purple-800-alpha)',
          '900-alpha': 'var(--mg-color-primitive-purple-900-alpha)',
          '1000-alpha': 'var(--mg-color-primitive-purple-1000-alpha)',
          '1100-alpha': 'var(--mg-color-primitive-purple-1100-alpha)',
          '1200-alpha': 'var(--mg-color-primitive-purple-1200-alpha)'
        }
      },
      space: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
        .map((v, i) => ({ [v]: `${fibonacci(i) * 0.5}rem` }))
        .reduce((p, n) => ({ ...p, ...n }), { base: '1rem' }),
      margin: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
        .map((v, i) => ({ [v]: `${fibonacci(i) * 0.5}rem` }))
        .reduce((p, n) => ({ ...p, ...n }), { base: '1rem' }),
      padding: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
        .map((v, i) => ({ [v]: `${fibonacci(i) * 0.5}rem` }))
        .reduce((p, n) => ({ ...p, ...n }), { base: '1rem' }),
      borderRadius: {
        none: '0px',
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      boxShadow: {
        '1/2': '0px 1px 4px 0px #0000001A',
        1: '0px 2px 8px 1px #0000001A',
        2: '0px 2px 12px 2px #0000001A',
        3: '0px 4px 16px 3px #0000001A',
        4: '0px 6px 20px 4px #0000001A',
        5: '0px 8px 24px 5px #0000001A',
        6: '0px 10px 30px 6px #0000001A',
        7: '0px 12px 36px 7px #0000001A',
        8: '0px 14px 40px 8px #0000001A'
      },
      lineHeight: {
        xs: `${minspace(moduler(10, 8), 0.25) + 0.5}rem`,
        sm: `${(minspace(moduler(9, 8)), 0.25) + 1.25}rem`,
        md: `${minspace(moduler(8, 8), 0.25) + 0.75}rem`,
        lg: `${minspace(moduler(7, 8), 0.25) + 0.75}rem`,
        xl: `${minspace(moduler(6, 8), 0.25) + 0.75}rem`,
        '2xl': `${minspace(moduler(5, 8), 0.25) + 0.75}rem`,
        '3xl': `${minspace(moduler(4, 8), 0.25) + 0.75}rem`,
        '4xl': `${minspace(moduler(3, 8), 0.25) + 0.75}rem`,
        '5xl': `${minspace(moduler(2, 8), 0.25) + 0.75}rem`,
        '6xl': `${minspace(moduler(1, 8), 0.25) + 0.75}rem`
      },
      letterSpacing: {
        xs: '0.01rem',
        sm: '0.02rem',
        md: '0.04rem',
        lg: '0.05rem',
        xl: '0.06rem',
        '2xl': '0.07em',
        '3xl': '0.08em',
        '4xl': '0.09em'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.35,0,.37,1.05)'
      },
      fontSize: {
        xs: `${moduler(10, 8)}rem`,
        sm: `${moduler(9, 8)}rem`,
        md: `${moduler(8, 8)}rem`,
        lg: `${moduler(7, 8)}rem`,
        xl: `${moduler(6, 8)}rem`,
        '2xl': `${moduler(5, 8)}rem`,
        '3xl': `${moduler(4, 8)}rem`,
        '4xl': `${moduler(3, 8)}rem`,
        '5xl': `${moduler(2, 8)}rem`,
        '6xl': `${moduler(1, 8)}rem`
      },
      fontFamily: {
        sans: ['var(--font-sans)']
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        fadeInFromTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-4px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-0px)'
          }
        },
        fadeOutToTop: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-4px)'
          }
        },
        fadeInFromBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(4px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-0px)'
          }
        },
        fadeOutToBottom: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(4px)'
          }
        },
        fadeInFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-4px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        fadeOutToRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(4px)'
          }
        },
        fadeInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(4px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        fadeOutToLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-4px)'
          }
        },
        // popover
        popoverTopFadeIn: {
          '0%': {
            opacity: '0',
            transform: `translateY(${popoverTranslateAmount})`
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        popoverTopFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: `translateY(${popoverTranslateAmount})`
          }
        },
        popoverRightFadeIn: {
          '0%': {
            opacity: '0',
            transform: `translateX(-${popoverTranslateAmount})`
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        popoverRightFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: `translateX(-${popoverTranslateAmount})`
          }
        },
        popoverBottomFadeIn: {
          '0%': {
            opacity: '0',
            transform: `translateY(-${popoverTranslateAmount})`
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        popoverBottomFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: `translateY(-${popoverTranslateAmount})`
          }
        },
        popoverLeftFadeIn: {
          '0%': {
            opacity: '0',
            transform: `translateX(${popoverTranslateAmount})`
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        popoverLeftFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: `translateX(${popoverTranslateAmount})`
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-out': 'fadeOut 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-in-from-t':
          'fadeInFromTop 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-in-from-b':
          'fadeInFromBottom 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-out-to-b':
          'fadeOutToBottom 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-in-from-r':
          'fadeInFromRight 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-out-to-r':
          'fadeOutToRight 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-in-from-l':
          'fadeInFromLeft 0.3s cubic-bezier(.35,0,.37,1.05) forwards',
        'fade-out-to-l':
          'fadeOutToLeft 0.3s cubic-bezier(.35,0,.37,1.05) forwards',

        // poppver
        'popover-top-fade-in': `popoverTopFadeIn 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-top-fade-out': `popoverTopFadeOut 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-right-fade-in': `popoverRightFadeIn 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-right-fade-out': `popoverRightFadeOut 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-bottom-fade-in': `popoverBottomFadeIn 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-bottom-fade-out': `popoverBottomFadeOut 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-left-fade-in': `popoverLeftFadeIn 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`,
        'popover-left-fade-out': `popoverLeftFadeOut 0.3s ${transitionTimingFunction['ease-in-out-quick']} forwards`
      },
      zIndex: {
        header: '50',
        dialog: '100',
        popover: '300',
        tooltip: '500'
      }
    }
  },
  prefix: 'mg-'
}
export default config
