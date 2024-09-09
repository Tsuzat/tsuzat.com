import { fontFamily } from 'tailwindcss/defaultTheme';
import aspect_ratio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			typography(theme) {
				return {
					DEFAULT: {
						css: {
							'code::before': {
								content: 'none' // don’t generate the pseudo-element
								//                content: '""', // this is an alternative: generate pseudo element using an empty string
							},
							'code::after': {
								content: 'none'
							},
							code: {
								// color: theme('colors.white'),
								// backgroundColor: 'hsl(var(--destructive) / <alpha-value>)',
								borderRadius: theme('borderRadius.DEFAULT'),
								paddingLeft: theme('spacing.1'),
								paddingRight: theme('spacing.1'),
								paddingTop: theme('spacing.1'),
								paddingBottom: theme('spacing.1'),
								overflowWrap: 'break-word'
							},
							a: {
								color: '#3b82f6',
								textDecoration: 'none'
							},
							pre: {
								fontFamily: 'Fira Code Variable',
								fontSize: '14px'
							}
						}
					}
				};
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [aspect_ratio, typography]
};

export default config;
