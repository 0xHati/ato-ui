import type { Shortcut, Rule } from '@unocss/core';

import { themeColorsJ, shadesJ } from '../../types/colors.d';
import { directions, directionsJ } from '../../types/directions.d';
import { sizesJ } from '../../types/types.d';

import { reg_c, reg_c_sO, reg_c_sO_oO, cs, cso, name_c_sO_oO, reg_l, reg_dO, norm_op } from '../utils/regex';

const sizes: { [key: string]: string } = {
    // 'sm': 'py-1 px-2 text-sm font-medium',
    // 'md': 'py-1 px-3 font-medium',
    // 'lg': 'py-2 px-4 text-lg font-semibold',
    // 'xl': 'py-3 px-6 text-xl font-bold'
    'sm': 'text-sm py-[--btn-sm-p-y] px-[--btn-sm-p-x] font-weight-[--btn-sm-font-weight]',
    'md': 'py-[--btn-md-p-y] px-[--btn-md-p-x] font-weight-[--btn-md-font-weight]',
    'lg': 'text-lg py-[--btn-lg-p-y] px-[--btn-lg-p-x] font-weight-[--btn-lg-font-weight]',
    'xl': 'text-xl py-[--btn-xl-p-y] px-[--btn-xl-p-x] font-weight-[--btn-xl-font-weight]'
};

const disabledStyles = 'opacity-70 cursor-not-allowed scale-100';

const baseStyles = `${sizes.md} active:scale-95 inline-flex justify-center items-center space-x-1 rounded-btn disabled:(${disabledStyles})`;

const baseStylesIcon = `${sizes.md} active:scale-95 inline-flex justify-center items-center space-x-1 rounded-btn-icon disabled:(opacity-80 cursor-not-allowed scale-100)`;

const glassStyles = 'border-1 backdrop-blur-sm';
const glassOp = '70';

const outlineOp = '25';

const borderBaseOp = '0.8';

const default_dir = 'r';

const gradientStyles = 'brightness-95 hover:(brightness-115)';

export const buttonRules: Rule[] = [
    // Gradient border
    [
        new RegExp(`^border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2, c3, s3]: string[]) => ({
            "background": `linear-gradient(to right, rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : borderBaseOp}), rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : borderBaseOp})), linear-gradient(to ${d ? directions[d] : 'right'}, rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})), rgb(var(--color-${cs(c3, s3)})))`,
            "background-clip": `padding-box, border-box`,
            "background-origin": `padding-box, border-box`,
            "border": "2px solid transparent",
        }),
        {
            autocomplete: [
                `border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
    [
        new RegExp(`^border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2]: string[]) => ({
            "background": `linear-gradient(to right, rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : borderBaseOp}), rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : borderBaseOp})), linear-gradient(to ${d ? directions[d] : 'right'}, rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})))`,
            "background-clip": `padding-box, border-box`,
            "background-origin": `padding-box, border-box`,
            "border": "2px solid transparent",
        }),
        {
            autocomplete: [
                `border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
];

export const buttonSCs: Shortcut[] = [
    // Button size
    [
        new RegExp(`^btn-${reg_l}$`),
        ([, l]: string[]) => `${sizes[l]}`,
        {
            autocomplete: `btn-(${sizesJ})`
        }
    ],

    // Icon button
    [
        'btn-icon', `${baseStylesIcon} aspect-square`
    ],

    // Button regular
    [
        new RegExp(`^btn-${reg_c}$`), 
        ([, c]: string[]) => `${baseStyles} bg-${c}-500 text-on-${cs(c, '500')} hover:(bg-${c}-600 text-on-${c}-600) disabled:hover:(bg-${c}-500 text-on-${c}-500)`, 
        {
            autocomplete: [`btn-(${themeColorsJ})`, 'btn-primary', 'btn-secondary', 'btn-tertiary']
        }
    ],
    
    // Button glass
    [
        new RegExp(`^btn-glass-${reg_c_sO_oO}$`), 
        ([, c, s, o]: string[]) => `${baseStyles} ${glassStyles} bg-${cso(c, s, `${o ?? glassOp}`)} text-on-${cs(c, s)} border-${cs(c, s)} hover:(bg-${cs(c, s)} text-on-${cs(c, s)}) disabled:hover:(bg-${cso(c, s, `${o ?? glassOp}`)} text-on-${cs(c, s)})`, 
        {
            autocomplete: [`btn-glass-(${themeColorsJ})`, `btn-glass-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]: string[]) => 
            `${baseStyles} ${glassStyles} bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, `${o1 ?? glassOp}`)} to-${cso(c2, s2, `${o2 ?? glassOp}`)} 
            text-on-${cs(c1, s1)} border-${cs(c1, s1)} 
            hover:(from-${cs(c1, s1)} to-${cs(c2, s2)} text-on-${cs(c1, s1)}) 
            disabled:hover:(from-${cso(c1, s1, `${o1 ?? glassOp}`)} to-${cso(c2, s2, `${o2 ?? glassOp}`)})`, 
        {
            autocomplete: [`btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`, `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]: string[]) => 
            `${baseStyles} ${glassStyles} bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, `${o1 ?? glassOp}`)} via-${cso(c2, s2, `${o2 ?? glassOp}`)} to-${cso(c3, s3, `${o3 ?? glassOp}`)}
            text-on-${cs(c1, s1)} border-${cs(c1, s1)} 
            hover:(from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)}) 
            disabled:hover:(from-${cso(c1, s1, `${o1 ?? glassOp}`)} via-${cso(c2, s2, `${o2 ?? glassOp}`)} to-${cso(c3, s3, `${o3 ?? glassOp}`)})`, 
        {
            autocomplete: [
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ}-(${themeColorsJ}))`, 
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradients
    [
        new RegExp(`^btn${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]: string[]) => `${baseStyles} ${gradientStyles} bg-gradient-to-${d ?? default_dir} text-on-${cs(c1, s1)} from-${cso(c1, s1, o1)} via-${cso(c2, s2, o2)} to-${cso(c3, s3, o3)}`, 
        {
            autocomplete: [`btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^btn${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]: string[]) => `${baseStyles} ${gradientStyles} bg-gradient-to-${d ?? default_dir} text-on-${cs(c1, s1)} from-${cso(c1, s1, o1)} to-${cso(c2, s2, o2)}`, 
        {
            autocomplete: [
                `btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-(${directionsJ})-${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradient border
    [
        new RegExp(`^btn-border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2]: string[]) => `
            ${baseStyles} 
            text-on-${cs(bc, bs)} 
            border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)} 
            hover:(bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} to-${cs(c2, s2)} text-on-${cs(c1, s1)}) 
            disabled:hover:(text-on-${cs(bc, bs)} border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)}!)`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
    [
        new RegExp(`^btn-border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2, c3, s3]: string[]) => 
        `${baseStyles} 
        text-on-${cs(bc, bs)} 
        border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)}-${cs(c3, s3)} 
        hover:(bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)} text-on-${cs(c1, s1)})
        disabled:hover:(border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)}-${cs(c3, s3)}!)`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],

    // Button group horizontal & vertical & outline
    [
        new RegExp(`btn-group(?:-(vertical))?(?:-(outline))?-${reg_c_sO}`),
        ([_, vert, out, c, s]: string[]) => `
            inline-flex ${vert ? 'flex-col' : ''} rounded-btn cursor-pointer
            [&>button,&>a]:(px-4 py-2 inline-flex gap-1 justify-center items-center transition-all border-1 border-${cs(c, s)} bg-${cso(c, s, out ? '55' : '100')} text-on-${cs(c, s)} text-sm font-bold)
            [&>button:disabled,&>a:disabled]:(cursor-not-allowed text-on-${cs(c, s)} opacity-25)
            [&>button:disabled:hover,&>a:disabled:hover]:(bg-${cs(c, s)} text-on-${cs(c, s)})
            [&>button:hover,&>a:hover]:(bg-${cso(c, s, out ? '100' : '65')})
            [&>button:active,&>a:active]:(translate-${vert ? 'x' : 'y'}-1)
            [&>button:focus,&>a:focus]:(ring-2)
            [&>button:first-child,&>a:first-child]:(rounded-${vert ? 't' : 'l'}-[var(--btn-radius)])
            [&>button:last-child,&>a:last-child]:(rounded-${vert ? 'b' : 'r'}-[var(--btn-radius)])
        `
    ],
];