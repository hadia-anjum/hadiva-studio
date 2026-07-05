export interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
  rate: number;
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', symbol: '$', flag: '🇺🇸', rate: 1 },
  { code: 'PK', name: 'Pakistan', currency: 'PKR', symbol: '₨', flag: '🇵🇰', rate: 278 },
  { code: 'ID', name: 'Indonesia', currency: 'IDR', symbol: 'Rp', flag: '🇮🇩', rate: 16300 },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', flag: '🇬🇧', rate: 0.78 },
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED', symbol: 'د.إ', flag: '🇦🇪', rate: 3.67 },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', symbol: 'ر.س', flag: '🇸🇦', rate: 3.75 },
  { code: 'AF', name: 'Afghanistan', currency: 'AFN', symbol: '؋', flag: '🇦🇫', rate: 71 },
  { code: 'AL', name: 'Albania', currency: 'ALL', symbol: 'L', flag: '🇦🇱', rate: 93 },
  { code: 'DZ', name: 'Algeria', currency: 'DZD', symbol: 'د.ج', flag: '🇩🇿', rate: 134 },
  { code: 'AD', name: 'Andorra', currency: 'EUR', symbol: '€', flag: '🇦🇩', rate: 0.92 },
  { code: 'AO', name: 'Angola', currency: 'AOA', symbol: 'Kz', flag: '🇦🇴', rate: 850 },
  { code: 'AR', name: 'Argentina', currency: 'ARS', symbol: '$', flag: '🇦🇷', rate: 910 },
  { code: 'AM', name: 'Armenia', currency: 'AMD', symbol: '֏', flag: '🇦🇲', rate: 388 },
  { code: 'AU', name: 'Australia', currency: 'AUD', symbol: '$', flag: '🇦🇺', rate: 1.50 },
  { code: 'AT', name: 'Austria', currency: 'EUR', symbol: '€', flag: '🇦🇹', rate: 0.92 },
  { code: 'AZ', name: 'Azerbaijan', currency: 'AZN', symbol: '₼', flag: '🇦🇿', rate: 1.70 },
  { code: 'BS', name: 'Bahamas', currency: 'BSD', symbol: '$', flag: '🇧🇸', rate: 1 },
  { code: 'BH', name: 'Bahrain', currency: 'BHD', symbol: '.د.ب', flag: '🇧🇭', rate: 0.38 },
  { code: 'BD', name: 'Bangladesh', currency: 'BDT', symbol: '৳', flag: '🇧🇩', rate: 117 },
  { code: 'BB', name: 'Barbados', currency: 'BBD', symbol: '$', flag: '🇧🇧', rate: 2 },
  { code: 'BY', name: 'Belarus', currency: 'BYN', symbol: 'Br', flag: '🇧🇾', rate: 3.27 },
  { code: 'BE', name: 'Belgium', currency: 'EUR', symbol: '€', flag: '🇧🇪', rate: 0.92 },
  { code: 'BZ', name: 'Belize', currency: 'BZD', symbol: '$', flag: '🇧🇿', rate: 2 },
  { code: 'BJ', name: 'Benin', currency: 'XOF', symbol: 'Fr', flag: '🇧🇯', rate: 605 },
  { code: 'BT', name: 'Bhutan', currency: 'BTN', symbol: 'Nu.', flag: '🇧🇹', rate: 83.5 },
  { code: 'BO', name: 'Bolivia', currency: 'BOB', symbol: 'Bs.', flag: '🇧🇴', rate: 6.91 },
  { code: 'BA', name: 'Bosnia & Herzegovina', currency: 'BAM', symbol: 'KM', flag: '🇧🇦', rate: 1.80 },
  { code: 'BW', name: 'Botswana', currency: 'BWP', symbol: 'P', flag: '🇧🇼', rate: 13.6 },
  { code: 'BR', name: 'Brazil', currency: 'BRL', symbol: 'R$', flag: '🇧🇷', rate: 5.48 },
  { code: 'BN', name: 'Brunei', currency: 'BND', symbol: '$', flag: '🇧🇳', rate: 1.35 },
  { code: 'BG', name: 'Bulgaria', currency: 'BGN', symbol: 'лв', flag: '🇧🇬', rate: 1.80 },
  { code: 'BF', name: 'Burkina Faso', currency: 'XOF', symbol: 'Fr', flag: '🇧🇫', rate: 605 },
  { code: 'BI', name: 'Burundi', currency: 'BIF', symbol: 'Fr', flag: '🇧🇮', rate: 2860 },
  { code: 'KH', name: 'Cambodia', currency: 'KHR', symbol: '៛', flag: '🇰🇭', rate: 4100 },
  { code: 'CM', name: 'Cameroon', currency: 'XAF', symbol: 'Fr', flag: '🇨🇲', rate: 605 },
  { code: 'CA', name: 'Canada', currency: 'CAD', symbol: '$', flag: '🇨🇦', rate: 1.37 },
  { code: 'CV', name: 'Cape Verde', currency: 'CVE', symbol: 'Esc', flag: '🇨🇻', rate: 102 },
  { code: 'CF', name: 'Central African Republic', currency: 'XAF', symbol: 'Fr', flag: '🇨🇫', rate: 605 },
  { code: 'TD', name: 'Chad', currency: 'XAF', symbol: 'Fr', flag: '🇹🇩', rate: 605 },
  { code: 'CL', name: 'Chile', currency: 'CLP', symbol: '$', flag: '🇨🇱', rate: 935 },
  { code: 'CN', name: 'China', currency: 'CNY', symbol: '¥', flag: '🇨🇳', rate: 7.27 },
  { code: 'CO', name: 'Colombia', currency: 'COP', symbol: '$', flag: '🇨🇴', rate: 4150 },
  { code: 'KM', name: 'Comoros', currency: 'KMF', symbol: 'Fr', flag: '🇰🇲', rate: 453 },
  { code: 'CG', name: 'Congo', currency: 'XAF', symbol: 'Fr', flag: '🇨🇬', rate: 605 },
  { code: 'CD', name: 'Congo (DRC)', currency: 'CDF', symbol: 'Fr', flag: '🇨🇩', rate: 2800 },
  { code: 'CR', name: 'Costa Rica', currency: 'CRC', symbol: '₡', flag: '🇨🇷', rate: 525 },
  { code: 'HR', name: 'Croatia', currency: 'EUR', symbol: '€', flag: '🇭🇷', rate: 0.92 },
  { code: 'CU', name: 'Cuba', currency: 'CUP', symbol: '$', flag: '🇨🇺', rate: 24 },
  { code: 'CY', name: 'Cyprus', currency: 'EUR', symbol: '€', flag: '🇨🇾', rate: 0.92 },
  { code: 'CZ', name: 'Czech Republic', currency: 'CZK', symbol: 'Kč', flag: '🇨🇿', rate: 23.2 },
  { code: 'DK', name: 'Denmark', currency: 'DKK', symbol: 'kr', flag: '🇩🇰', rate: 6.87 },
  { code: 'DJ', name: 'Djibouti', currency: 'DJF', symbol: 'Fr', flag: '🇩🇯', rate: 178 },
  { code: 'DM', name: 'Dominica', currency: 'XCD', symbol: '$', flag: '🇩🇲', rate: 2.70 },
  { code: 'DO', name: 'Dominican Republic', currency: 'DOP', symbol: '$', flag: '🇩🇴', rate: 59 },
  { code: 'EC', name: 'Ecuador', currency: 'USD', symbol: '$', flag: '🇪🇨', rate: 1 },
  { code: 'EG', name: 'Egypt', currency: 'EGP', symbol: 'E£', flag: '🇪🇬', rate: 47.9 },
  { code: 'SV', name: 'El Salvador', currency: 'USD', symbol: '$', flag: '🇸🇻', rate: 1 },
  { code: 'GQ', name: 'Equatorial Guinea', currency: 'XAF', symbol: 'Fr', flag: '🇬🇶', rate: 605 },
  { code: 'ER', name: 'Eritrea', currency: 'ERN', symbol: 'Nfk', flag: '🇪🇷', rate: 15 },
  { code: 'EE', name: 'Estonia', currency: 'EUR', symbol: '€', flag: '🇪🇪', rate: 0.92 },
  { code: 'SZ', name: 'Eswatini', currency: 'SZL', symbol: 'L', flag: '🇸🇿', rate: 18.2 },
  { code: 'ET', name: 'Ethiopia', currency: 'ETB', symbol: 'Br', flag: '🇪🇹', rate: 57 },
  { code: 'FJ', name: 'Fiji', currency: 'FJD', symbol: '$', flag: '🇫🇯', rate: 2.24 },
  { code: 'FI', name: 'Finland', currency: 'EUR', symbol: '€', flag: '🇫🇮', rate: 0.92 },
  { code: 'FR', name: 'France', currency: 'EUR', symbol: '€', flag: '🇫🇷', rate: 0.92 },
  { code: 'GA', name: 'Gabon', currency: 'XAF', symbol: 'Fr', flag: '🇬🇦', rate: 605 },
  { code: 'GM', name: 'Gambia', currency: 'GMD', symbol: 'D', flag: '🇬🇲', rate: 68 },
  { code: 'GE', name: 'Georgia', currency: 'GEL', symbol: '₾', flag: '🇬🇪', rate: 2.72 },
  { code: 'DE', name: 'Germany', currency: 'EUR', symbol: '€', flag: '🇩🇪', rate: 0.92 },
  { code: 'GH', name: 'Ghana', currency: 'GHS', symbol: '₵', flag: '🇬🇭', rate: 15.0 },
  { code: 'GR', name: 'Greece', currency: 'EUR', symbol: '€', flag: '🇬🇷', rate: 0.92 },
  { code: 'GD', name: 'Grenada', currency: 'XCD', symbol: '$', flag: '🇬🇩', rate: 2.70 },
  { code: 'GT', name: 'Guatemala', currency: 'GTQ', symbol: 'Q', flag: '🇬🇹', rate: 7.76 },
  { code: 'GN', name: 'Guinea', currency: 'GNF', symbol: 'Fr', flag: '🇬🇳', rate: 8600 },
  { code: 'GW', name: 'Guinea-Bissau', currency: 'XOF', symbol: 'Fr', flag: '🇬🇼', rate: 605 },
  { code: 'GY', name: 'Guyana', currency: 'GYD', symbol: '$', flag: '🇬🇾', rate: 209 },
  { code: 'HT', name: 'Haiti', currency: 'HTG', symbol: 'G', flag: '🇭🇹', rate: 132 },
  { code: 'HN', name: 'Honduras', currency: 'HNL', symbol: 'L', flag: '🇭🇳', rate: 24.7 },
  { code: 'HU', name: 'Hungary', currency: 'HUF', symbol: 'Ft', flag: '🇭🇺', rate: 367 },
  { code: 'IS', name: 'Iceland', currency: 'ISK', symbol: 'kr', flag: '🇮🇸', rate: 139 },
  { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', flag: '🇮🇳', rate: 83.5 },
  { code: 'IR', name: 'Iran', currency: 'IRR', symbol: '﷼', flag: '🇮🇷', rate: 42000 },
  { code: 'IQ', name: 'Iraq', currency: 'IQD', symbol: 'ع.د', flag: '🇮🇶', rate: 1310 },
  { code: 'IE', name: 'Ireland', currency: 'EUR', symbol: '€', flag: '🇮🇪', rate: 0.92 },
  { code: 'IL', name: 'Israel', currency: 'ILS', symbol: '₪', flag: '🇮🇱', rate: 3.72 },
  { code: 'IT', name: 'Italy', currency: 'EUR', symbol: '€', flag: '🇮🇹', rate: 0.92 },
  { code: 'JM', name: 'Jamaica', currency: 'JMD', symbol: '$', flag: '🇯🇲', rate: 156 },
  { code: 'JP', name: 'Japan', currency: 'JPY', symbol: '¥', flag: '🇯🇵', rate: 161 },
  { code: 'JO', name: 'Jordan', currency: 'JOD', symbol: 'د.ا', flag: '🇯🇴', rate: 0.71 },
  { code: 'KZ', name: 'Kazakhstan', currency: 'KZT', symbol: '₸', flag: '🇰🇿', rate: 462 },
  { code: 'KE', name: 'Kenya', currency: 'KES', symbol: 'KSh', flag: '🇰🇪', rate: 129 },
  { code: 'KW', name: 'Kuwait', currency: 'KWD', symbol: 'د.ك', flag: '🇰🇼', rate: 0.31 },
  { code: 'KG', name: 'Kyrgyzstan', currency: 'KGS', symbol: 'сом', flag: '🇰🇬', rate: 87 },
  { code: 'LA', name: 'Laos', currency: 'LAK', symbol: '₭', flag: '🇱🇦', rate: 22000 },
  { code: 'LV', name: 'Latvia', currency: 'EUR', symbol: '€', flag: '🇱🇻', rate: 0.92 },
  { code: 'LB', name: 'Lebanon', currency: 'LBP', symbol: 'ل.ل', flag: '🇱🇧', rate: 89500 },
  { code: 'LS', name: 'Lesotho', currency: 'LSL', symbol: 'L', flag: '🇱🇸', rate: 18.2 },
  { code: 'LR', name: 'Liberia', currency: 'LRD', symbol: '$', flag: '🇱🇷', rate: 194 },
  { code: 'LY', name: 'Libya', currency: 'LYD', symbol: 'ل.د', flag: '🇱🇾', rate: 4.85 },
  { code: 'LI', name: 'Liechtenstein', currency: 'CHF', symbol: 'CHF', flag: '🇱🇮', rate: 0.90 },
  { code: 'LT', name: 'Lithuania', currency: 'EUR', symbol: '€', flag: '🇱🇹', rate: 0.92 },
  { code: 'LU', name: 'Luxembourg', currency: 'EUR', symbol: '€', flag: '🇱🇺', rate: 0.92 },
  { code: 'MG', name: 'Madagascar', currency: 'MGA', symbol: 'Ar', flag: '🇲🇬', rate: 4500 },
  { code: 'MW', name: 'Malawi', currency: 'MWK', symbol: 'MK', flag: '🇲🇼', rate: 1730 },
  { code: 'MY', name: 'Malaysia', currency: 'MYR', symbol: 'RM', flag: '🇲🇾', rate: 4.71 },
  { code: 'MV', name: 'Maldives', currency: 'MVR', symbol: '.ރ', flag: '🇲🇻', rate: 15.4 },
  { code: 'ML', name: 'Mali', currency: 'XOF', symbol: 'Fr', flag: '🇲🇱', rate: 605 },
  { code: 'MT', name: 'Malta', currency: 'EUR', symbol: '€', flag: '🇲🇹', rate: 0.92 },
  { code: 'MR', name: 'Mauritania', currency: 'MRU', symbol: 'UM', flag: '🇲🇷', rate: 39.6 },
  { code: 'MU', name: 'Mauritius', currency: 'MUR', symbol: '₨', flag: '🇲🇺', rate: 46.5 },
  { code: 'MX', name: 'Mexico', currency: 'MXN', symbol: '$', flag: '🇲🇽', rate: 18.1 },
  { code: 'MD', name: 'Moldova', currency: 'MDL', symbol: 'L', flag: '🇲🇩', rate: 17.8 },
  { code: 'MC', name: 'Monaco', currency: 'EUR', symbol: '€', flag: '🇲🇨', rate: 0.92 },
  { code: 'MN', name: 'Mongolia', currency: 'MNT', symbol: '₮', flag: '🇲🇳', rate: 3450 },
  { code: 'ME', name: 'Montenegro', currency: 'EUR', symbol: '€', flag: '🇲🇪', rate: 0.92 },
  { code: 'MA', name: 'Morocco', currency: 'MAD', symbol: 'د.م.', flag: '🇲🇦', rate: 9.9 },
  { code: 'MZ', name: 'Mozambique', currency: 'MZN', symbol: 'MT', flag: '🇲🇿', rate: 63.9 },
  { code: 'MM', name: 'Myanmar', currency: 'MMK', symbol: 'K', flag: '🇲🇲', rate: 2100 },
  { code: 'NA', name: 'Namibia', currency: 'NAD', symbol: '$', flag: '🇳🇦', rate: 18.2 },
  { code: 'NP', name: 'Nepal', currency: 'NPR', symbol: '₨', flag: '🇳🇵', rate: 133 },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', symbol: '€', flag: '🇳🇱', rate: 0.92 },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', symbol: '$', flag: '🇳🇿', rate: 1.63 },
  { code: 'NI', name: 'Nicaragua', currency: 'NIO', symbol: 'C$', flag: '🇳🇮', rate: 36.8 },
  { code: 'NE', name: 'Niger', currency: 'XOF', symbol: 'Fr', flag: '🇳🇪', rate: 605 },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', symbol: '₦', flag: '🇳🇬', rate: 1500 },
  { code: 'NO', name: 'Norway', currency: 'NOK', symbol: 'kr', flag: '🇳🇴', rate: 10.6 },
  { code: 'OM', name: 'Oman', currency: 'OMR', symbol: 'ر.ع.', flag: '🇴🇲', rate: 0.38 },
  { code: 'PA', name: 'Panama', currency: 'PAB', symbol: 'B/.', flag: '🇵🇦', rate: 1 },
  { code: 'PG', name: 'Papua New Guinea', currency: 'PGK', symbol: 'K', flag: '🇵🇬', rate: 3.90 },
  { code: 'PY', name: 'Paraguay', currency: 'PYG', symbol: '₲', flag: '🇵🇾', rate: 7500 },
  { code: 'PE', name: 'Peru', currency: 'PEN', symbol: 'S/.', flag: '🇵🇪', rate: 3.80 },
  { code: 'PH', name: 'Philippines', currency: 'PHP', symbol: '₱', flag: '🇵🇭', rate: 58.7 },
  { code: 'PL', name: 'Poland', currency: 'PLN', symbol: 'zł', flag: '🇵🇱', rate: 4.02 },
  { code: 'PT', name: 'Portugal', currency: 'EUR', symbol: '€', flag: '🇵🇹', rate: 0.92 },
  { code: 'QA', name: 'Qatar', currency: 'QAR', symbol: 'ر.ق', flag: '🇶🇦', rate: 3.64 },
  { code: 'RO', name: 'Romania', currency: 'RON', symbol: 'lei', flag: '🇷🇴', rate: 4.60 },
  { code: 'RU', name: 'Russia', currency: 'RUB', symbol: '₽', flag: '🇷🇺', rate: 88 },
  { code: 'RW', name: 'Rwanda', currency: 'RWF', symbol: 'Fr', flag: '🇷🇼', rate: 1310 },
  { code: 'WS', name: 'Samoa', currency: 'WST', symbol: 'T', flag: '🇼🇸', rate: 2.70 },
  { code: 'SM', name: 'San Marino', currency: 'EUR', symbol: '€', flag: '🇸🇲', rate: 0.92 },
  { code: 'ST', name: 'Sao Tome & Principe', currency: 'STN', symbol: 'Db', flag: '🇸🇹', rate: 22.8 },
  { code: 'SN', name: 'Senegal', currency: 'XOF', symbol: 'Fr', flag: '🇸🇳', rate: 605 },
  { code: 'RS', name: 'Serbia', currency: 'RSD', symbol: 'дин.', flag: '🇷🇸', rate: 108 },
  { code: 'SC', name: 'Seychelles', currency: 'SCR', symbol: '₨', flag: '🇸🇨', rate: 13.5 },
  { code: 'SG', name: 'Singapore', currency: 'SGD', symbol: '$', flag: '🇸🇬', rate: 1.35 },
  { code: 'SK', name: 'Slovakia', currency: 'EUR', symbol: '€', flag: '🇸🇰', rate: 0.92 },
  { code: 'SI', name: 'Slovenia', currency: 'EUR', symbol: '€', flag: '🇸🇮', rate: 0.92 },
  { code: 'SO', name: 'Somalia', currency: 'SOS', symbol: 'Sh', flag: '🇸🇴', rate: 571 },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', symbol: 'R', flag: '🇿🇦', rate: 18.2 },
  { code: 'KR', name: 'South Korea', currency: 'KRW', symbol: '₩', flag: '🇰🇷', rate: 1380 },
  { code: 'ES', name: 'Spain', currency: 'EUR', symbol: '€', flag: '🇪🇸', rate: 0.92 },
  { code: 'LK', name: 'Sri Lanka', currency: 'LKR', symbol: '₨', flag: '🇱🇰', rate: 305 },
  { code: 'SD', name: 'Sudan', currency: 'SDG', symbol: 'ج.س.', flag: '🇸🇩', rate: 600 },
  { code: 'SR', name: 'Suriname', currency: 'SRD', symbol: '$', flag: '🇸🇷', rate: 30.5 },
  { code: 'SE', name: 'Sweden', currency: 'SEK', symbol: 'kr', flag: '🇸🇪', rate: 10.5 },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', symbol: 'CHF', flag: '🇨🇭', rate: 0.90 },
  { code: 'SY', name: 'Syria', currency: 'SYP', symbol: 'ل.س', flag: '🇸🇾', rate: 13000 },
  { code: 'TW', name: 'Taiwan', currency: 'TWD', symbol: 'NT$', flag: '🇹🇼', rate: 32.5 },
  { code: 'TJ', name: 'Tajikistan', currency: 'TJS', symbol: 'ЅМ', flag: '🇹🇯', rate: 10.7 },
  { code: 'TZ', name: 'Tanzania', currency: 'TZS', symbol: 'Sh', flag: '🇹🇿', rate: 2600 },
  { code: 'TH', name: 'Thailand', currency: 'THB', symbol: '฿', flag: '🇹🇭', rate: 36.7 },
  { code: 'TG', name: 'Togo', currency: 'XOF', symbol: 'Fr', flag: '🇹🇬', rate: 605 },
  { code: 'TT', name: 'Trinidad & Tobago', currency: 'TTD', symbol: '$', flag: '🇹🇹', rate: 6.75 },
  { code: 'TN', name: 'Tunisia', currency: 'TND', symbol: 'د.ت', flag: '🇹🇳', rate: 3.12 },
  { code: 'TR', name: 'Turkey', currency: 'TRY', symbol: '₺', flag: '🇹🇷', rate: 32.8 },
  { code: 'UA', name: 'Ukraine', currency: 'UAH', symbol: '₴', flag: '🇺🇦', rate: 40.5 },
  { code: 'UY', name: 'Uruguay', currency: 'UYU', symbol: '$', flag: '🇺🇾', rate: 39.2 },
  { code: 'UZ', name: 'Uzbekistan', currency: 'UZS', symbol: 'сўм', flag: '🇺🇿', rate: 12600 },
  { code: 'VE', name: 'Venezuela', currency: 'VES', symbol: 'Bs.S', flag: '🇻🇪', rate: 36.4 },
  { code: 'VN', name: 'Vietnam', currency: 'VND', symbol: '₫', flag: '🇻🇳', rate: 25450 },
  { code: 'YE', name: 'Yemen', currency: 'YER', symbol: '﷼', flag: '🇾🇪', rate: 250 },
  { code: 'ZM', name: 'Zambia', currency: 'ZMW', symbol: 'ZK', flag: '🇿🇲', rate: 25.5 },
  { code: 'ZW', name: 'Zimbabwe', currency: 'ZWG', symbol: 'ZiG', flag: '🇿🇼', rate: 13.5 }
];

export function getLocalPrice(planId: string, countryCode: string) {
  const c = countries.find(item => item.code === countryCode) || countries[0];
  const usdPrice = planId === 'starter' ? 19 : planId === 'premium' ? 38 : 64;
  const raw = usdPrice * c.rate;

  // Custom rounded luxury labels for Pakistan
  if (c.code === 'PK') {
    if (planId === 'starter') return { symbol: '₨', amount: '5,299' };
    if (planId === 'premium') return { symbol: '₨', amount: '10,499' };
    return { symbol: '₨', amount: '17,799' };
  }

  // Custom rounded luxury labels for Indonesia
  if (c.code === 'ID') {
    if (planId === 'starter') return { symbol: 'Rp', amount: '299K' };
    if (planId === 'premium') return { symbol: 'Rp', amount: '599K' };
    return { symbol: 'Rp', amount: '999K' };
  }

  // General rounding logic based on scale of currency
  if (raw >= 100000) {
    // Large currencies like VND
    const kVal = Math.round(raw / 1000);
    return { symbol: c.symbol, amount: `${kVal}K` };
  }

  if (raw >= 1000) {
    // Medium currencies like INR, BDT
    const rounded = Math.round(raw / 100) * 100 - 1;
    return { symbol: c.symbol, amount: rounded.toLocaleString() };
  }

  if (raw >= 100) {
    // Small currencies like AED, SAR
    const rounded = Math.round(raw / 5) * 5 - 1;
    return { symbol: c.symbol, amount: rounded.toString() };
  }

  // Low scale currencies like USD, EUR, GBP, CAD
  return { symbol: c.symbol, amount: Math.round(raw).toString() };
}
