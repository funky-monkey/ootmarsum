type PriceType = {
  tax: number
  adult: number
  kid: number
  rent: number
  deposit: number
}
type BankAccountType = string
type AnalyticsType = {
  enabled: boolean
  id: string
}
type ContactType = {
  email: string
}
type ConfigType = {
  title: string
  description: string
  image: string
  keywords: string[]
  price: PriceType
  bankAccount: BankAccountType
  analytics: AnalyticsType
  contact: ContactType
}

const config: ConfigType = {
  title: 'Chalet in Twente',
  description: 'Chalet in Ootmarsum, Twente',
  image: 'https://ootmarsum.elidon.net/media/1.webp',
  keywords: [
    'stacaravan',
    'caravan',
    'chalet',
    'bungalow',
    'te huur',
    'vakantie',
    'twente',
    'ootmarsum',
    'bos',
    'rust',
    'rustig',
    'relax',
    'glamping',
    'kinderen',
    'springendal',
    'bronnen',
    'wolf',
  ],
  price: {
    tax: 1,
    adult: 2.4,
    kid: 1.9,
    rent: 65,
    deposit: 100,
  },
  bankAccount: 'NL68 KNAB 0406 8591 67',
  analytics: {
    enabled: true,
    id: 'G-ZKKWNQWGEK',
  },
  contact: {
    email: 'janpaul@elidon.net',
  },
}
export default config
