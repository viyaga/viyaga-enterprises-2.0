
const countries = [
    { "id": 1, "country": "United States", "country_code": "US", "currency_prefix": "$", "currency_code": "USD", "tier": 1, "purchasing_power": 1.00 },
    { "id": 2, "country": "Canada", "country_code": "CA", "currency_prefix": "$", "currency_code": "CAD", "tier": 1, "purchasing_power": 0.75 },
    { "id": 3, "country": "United Kingdom", "country_code": "GB", "currency_prefix": "£", "currency_code": "GBP", "tier": 1, "purchasing_power": 0.73 },
    { "id": 4, "country": "Germany", "country_code": "DE", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.85 },
    { "id": 5, "country": "France", "country_code": "FR", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.78 },
    { "id": 6, "country": "Italy", "country_code": "IT", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.72 },
    { "id": 7, "country": "Spain", "country_code": "ES", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.68 },
    { "id": 8, "country": "Netherlands", "country_code": "NL", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.97 },
    { "id": 9, "country": "Belgium", "country_code": "BE", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.86 },
    { "id": 10, "country": "Switzerland", "country_code": "CH", "currency_prefix": "Fr", "currency_code": "CHF", "tier": 1, "purchasing_power": 1.15 },
    { "id": 11, "country": "Sweden", "country_code": "SE", "currency_prefix": "kr", "currency_code": "SEK", "tier": 1, "purchasing_power": 0.88 },
    { "id": 12, "country": "Norway", "country_code": "NO", "currency_prefix": "kr", "currency_code": "NOK", "tier": 1, "purchasing_power": 1.30 },
    { "id": 13, "country": "Denmark", "country_code": "DK", "currency_prefix": "kr", "currency_code": "DKK", "tier": 1, "purchasing_power": 0.95 },
    { "id": 14, "country": "Finland", "country_code": "FI", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.82 },
    { "id": 15, "country": "Austria", "country_code": "AT", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 0.91 },
    { "id": 16, "country": "Ireland", "country_code": "IE", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 1.05 },
    { "id": 17, "country": "Luxembourg", "country_code": "LU", "currency_prefix": "€", "currency_code": "EUR", "tier": 1, "purchasing_power": 1.08 },
    { "id": 18, "country": "Japan", "country_code": "JP", "currency_prefix": "¥", "currency_code": "JPY", "tier": 1, "purchasing_power": 0.62 },
    { "id": 19, "country": "South Korea", "country_code": "KR", "currency_prefix": "₩", "currency_code": "KRW", "tier": 1, "purchasing_power": 0.67 },
    { "id": 20, "country": "Singapore", "country_code": "SG", "currency_prefix": "S$", "currency_code": "SGD", "tier": 1, "purchasing_power": 1.74 },
    { "id": 21, "country": "Australia", "country_code": "AU", "currency_prefix": "A$", "currency_code": "AUD", "tier": 1, "purchasing_power": 0.85 },
    { "id": 22, "country": "New Zealand", "country_code": "NZ", "currency_prefix": "NZ$", "currency_code": "NZD", "tier": 1, "purchasing_power": 0.68 },

    { "id": 23, "country": "China", "country_code": "CN", "currency_prefix": "¥", "currency_code": "CNY", "tier": 2, "purchasing_power": 0.35 },
    { "id": 24, "country": "India", "country_code": "IN", "currency_prefix": "₹", "currency_code": "INR", "tier": 2, "purchasing_power": 0.15 },
    { "id": 25, "country": "Brazil", "country_code": "BR", "currency_prefix": "R$", "currency_code": "BRL", "tier": 2, "purchasing_power": 0.26 },
    { "id": 26, "country": "Mexico", "country_code": "MX", "currency_prefix": "$", "currency_code": "MXN", "tier": 2, "purchasing_power": 0.32 },
    { "id": 27, "country": "Russia", "country_code": "RU", "currency_prefix": "₽", "currency_code": "RUB", "tier": 2, "purchasing_power": 0.56 },
    { "id": 28, "country": "South Africa", "country_code": "ZA", "currency_prefix": "R", "currency_code": "ZAR", "tier": 2, "purchasing_power": 0.21 },
    { "id": 29, "country": "Malaysia", "country_code": "MY", "currency_prefix": "RM", "currency_code": "MYR", "tier": 2, "purchasing_power": 0.47 },
    { "id": 30, "country": "Turkey", "country_code": "TR", "currency_prefix": "₺", "currency_code": "TRY", "tier": 2, "purchasing_power": 0.52 },
    { "id": 31, "country": "Thailand", "country_code": "TH", "currency_prefix": "฿", "currency_code": "THB", "tier": 2, "purchasing_power": 0.31 },
    { "id": 32, "country": "Poland", "country_code": "PL", "currency_prefix": "zł", "currency_code": "PLN", "tier": 2, "purchasing_power": 0.63 },
    { "id": 33, "country": "Czechia", "country_code": "CZ", "currency_prefix": "Kč", "currency_code": "CZK", "tier": 2, "purchasing_power": 0.68 },
    { "id": 34, "country": "Hungary", "country_code": "HU", "currency_prefix": "Ft", "currency_code": "HUF", "tier": 2, "purchasing_power": 0.57 },
    { "id": 35, "country": "Romania", "country_code": "RO", "currency_prefix": "lei", "currency_code": "RON", "tier": 2, "purchasing_power": 0.60 },
    { "id": 36, "country": "Saudi Arabia", "country_code": "SA", "currency_prefix": "ر.س", "currency_code": "SAR", "tier": 2, "purchasing_power": 0.69 },
    { "id": 37, "country": "United Arab Emirates", "country_code": "AE", "currency_prefix": "د.إ", "currency_code": "AED", "tier": 2, "purchasing_power": 1.04 },

    { "id": 38, "country": "Nigeria", "country_code": "NG", "currency_prefix": "₦", "currency_code": "NGN", "tier": 3, "purchasing_power": 0.09 },
    { "id": 39, "country": "Kenya", "country_code": "KE", "currency_prefix": "KSh", "currency_code": "KES", "tier": 3, "purchasing_power": 0.09 },
    { "id": 40, "country": "Pakistan", "country_code": "PK", "currency_prefix": "₨", "currency_code": "PKR", "tier": 3, "purchasing_power": 0.09 },
    { "id": 41, "country": "Bangladesh", "country_code": "BD", "currency_prefix": "৳", "currency_code": "BDT", "tier": 3, "purchasing_power": 0.12 },
    { "id": 42, "country": "Vietnam", "country_code": "VN", "currency_prefix": "₫", "currency_code": "VND", "tier": 3, "purchasing_power": 0.20 },
    { "id": 43, "country": "Philippines", "country_code": "PH", "currency_prefix": "₱", "currency_code": "PHP", "tier": 3, "purchasing_power": 0.14 },
    { "id": 44, "country": "Indonesia", "country_code": "ID", "currency_prefix": "Rp", "currency_code": "IDR", "tier": 3, "purchasing_power": 0.20 },
    { "id": 45, "country": "Egypt", "country_code": "EG", "currency_prefix": "E£", "currency_code": "EGP", "tier": 3, "purchasing_power": 0.24 }
];

export default countries;
