# country-list

## List of countries for internal usage

## Example

``` js
import getCountryList from '@mryuramr/country-list'

const COUNTRY_LIST = getCountryList()

const { alpha2, euMember, name } = COUNTRY_LIST[0]

console.log('alpha2', alpha2) // DE
console.log('euMember', euMember) // true
console.log('name', name) // Deutschland

```