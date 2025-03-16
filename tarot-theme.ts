
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tarotTheme: CustomThemeConfig = {
    name: 'tarot-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Nathanos`,
		"--theme-font-family-heading": `Nathanos`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-primary-100)",
		"--on-secondary": "var(--color-primary-100)",
		"--on-tertiary": "var(--color-primary-100)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #592e42 
		"--color-primary-50": "230 224 227", // #e6e0e3
		"--color-primary-100": "222 213 217", // #ded5d9
		"--color-primary-200": "214 203 208", // #d6cbd0
		"--color-primary-300": "189 171 179", // #bdabb3
		"--color-primary-400": "139 109 123", // #8b6d7b
		"--color-primary-500": "89 46 66", // #592e42
		"--color-primary-600": "80 41 59", // #50293b
		"--color-primary-700": "67 35 50", // #432332
		"--color-primary-800": "53 28 40", // #351c28
		"--color-primary-900": "44 23 32", // #2c1720
		// secondary | #32405b 
		"--color-secondary-50": "224 226 230", // #e0e2e6
		"--color-secondary-100": "214 217 222", // #d6d9de
		"--color-secondary-200": "204 207 214", // #cccfd6
		"--color-secondary-300": "173 179 189", // #adb3bd
		"--color-secondary-400": "112 121 140", // #70798c
		"--color-secondary-500": "50 64 91", // #32405b
		"--color-secondary-600": "45 58 82", // #2d3a52
		"--color-secondary-700": "38 48 68", // #263044
		"--color-secondary-800": "30 38 55", // #1e2637
		"--color-secondary-900": "25 31 45", // #191f2d
		// tertiary | #3f4541 
		"--color-tertiary-50": "226 227 227", // #e2e3e3
		"--color-tertiary-100": "217 218 217", // #d9dad9
		"--color-tertiary-200": "207 209 208", // #cfd1d0
		"--color-tertiary-300": "178 181 179", // #b2b5b3
		"--color-tertiary-400": "121 125 122", // #797d7a
		"--color-tertiary-500": "63 69 65", // #3f4541
		"--color-tertiary-600": "57 62 59", // #393e3b
		"--color-tertiary-700": "47 52 49", // #2f3431
		"--color-tertiary-800": "38 41 39", // #262927
		"--color-tertiary-900": "31 34 32", // #1f2220
		// success | #38860e 
		"--color-success-50": "225 237 219", // #e1eddb
		"--color-success-100": "215 231 207", // #d7e7cf
		"--color-success-200": "205 225 195", // #cde1c3
		"--color-success-300": "175 207 159", // #afcf9f
		"--color-success-400": "116 170 86", // #74aa56
		"--color-success-500": "56 134 14", // #38860e
		"--color-success-600": "50 121 13", // #32790d
		"--color-success-700": "42 101 11", // #2a650b
		"--color-success-800": "34 80 8", // #225008
		"--color-success-900": "27 66 7", // #1b4207
		// warning | #82a718 
		"--color-warning-50": "236 242 220", // #ecf2dc
		"--color-warning-100": "230 237 209", // #e6edd1
		"--color-warning-200": "224 233 197", // #e0e9c5
		"--color-warning-300": "205 220 163", // #cddca3
		"--color-warning-400": "168 193 93", // #a8c15d
		"--color-warning-500": "130 167 24", // #82a718
		"--color-warning-600": "117 150 22", // #759616
		"--color-warning-700": "98 125 18", // #627d12
		"--color-warning-800": "78 100 14", // #4e640e
		"--color-warning-900": "64 82 12", // #40520c
		// error | #bbab2b 
		"--color-error-50": "245 242 223", // #f5f2df
		"--color-error-100": "241 238 213", // #f1eed5
		"--color-error-200": "238 234 202", // #eeeaca
		"--color-error-300": "228 221 170", // #e4ddaa
		"--color-error-400": "207 196 107", // #cfc46b
		"--color-error-500": "187 171 43", // #bbab2b
		"--color-error-600": "168 154 39", // #a89a27
		"--color-error-700": "140 128 32", // #8c8020
		"--color-error-800": "112 103 26", // #70671a
		"--color-error-900": "92 84 21", // #5c5415
		// surface | #2f3035 
		"--color-surface-50": "224 224 225", // #e0e0e1
		"--color-surface-100": "213 214 215", // #d5d6d7
		"--color-surface-200": "203 203 205", // #cbcbcd
		"--color-surface-300": "172 172 174", // #acacae
		"--color-surface-400": "109 110 114", // #6d6e72
		"--color-surface-500": "47 48 53", // #2f3035
		"--color-surface-600": "42 43 48", // #2a2b30
		"--color-surface-700": "35 36 40", // #232428
		"--color-surface-800": "28 29 32", // #1c1d20
		"--color-surface-900": "23 24 26", // #17181a
		
	}
}