import countries from "world-countries"

export type SelectCountryType = {
    label: string,
    value: string
}

export function getCountries() {
    return countries.map(country => ({
        value: country.cca2,
        label: country.name.common
    }));
}
