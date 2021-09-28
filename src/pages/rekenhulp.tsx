import { useState, useEffect, ChangeEvent } from 'react'
import { Layout } from '../components'
import { presentPrice } from '../utils'
import config from '../config'

const { price, bankAccount } = config
const minNights = 2
const maxNights = 21
const maxPersons = 6
const defaultAdults = 2
const defaultKids = 0
const maxOccupation = 6
const minAdults = 1

const Rekenhulp = () => {
  const [adults, setAdults] = useState<number>(defaultAdults)
  const [kids, setKids] = useState<number>(defaultKids)
  const [tax, setTax] = useState<number>(0)
  const [rent, setRent] = useState<number>(0)
  const [parkCosts, setParkCosts] = useState<number>(0)
  const [nights, setNights] = useState<number>(minNights)
  const [ok, setOk] = useState<boolean>(true)
  useEffect(() => {
    const _total = kids + adults
    const _nights = nights >= minNights ? nights : minNights
    setTax(_nights * (_total * price.tax))
    setParkCosts(_nights * (kids * price.kid + adults * price.adult))
    setRent(_nights * price.rent)
    setOk(
      adults >= minAdults &&
        nights >= minNights &&
        nights <= maxNights &&
        adults + kids <= maxOccupation
    )
  }, [nights, kids, adults])
  const changeValue = (event: ChangeEvent, setter: Function) => {
    // @ts-ignore
    const { value: svalue } = event.target
    const value = Number(svalue)
    if (isNaN(value)) {
      setter(0)
    } else {
      setter(value)
    }
  }
  return (
    <Layout title="Rekenhulp">
      <form noValidate autoComplete="off">
        <section className="flex flex-col w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5">
          <div className="flex flex-row justify-between">
            <label htmlFor="nights">Aantal nachten</label>
            <input
              id="nights"
              type="number"
              value={nights}
              // max={maxNights}
              min={0}
              onChange={event => changeValue(event, setNights)}
              className="text-black w-16 h-8"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="adults">Aantal volwassen</label>
            <input
              id="adults"
              type="number"
              value={adults}
              min={0}
              // max={maxOccupation}
              onChange={event => changeValue(event, setAdults)}
              className="text-black w-16 h-8"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="kids">Aantal kinderen</label>
            <input
              id="kids"
              type="number"
              value={kids}
              // max={maxOccupation - adults}
              min={0}
              onChange={event => changeValue(event, setKids)}
              className="text-black w-16 h-8"
            />
          </div>
        </section>
        <section>
          {nights < minNights && (
            <div className="alert alert-error">
              Minimum verblijf: {minNights} nachten
            </div>
          )}
          {nights > maxNights && (
            <div className="alert alert-error">
              Maximum verblijf: {maxNights} nachten
            </div>
          )}
          {kids + adults > maxPersons && (
            <div className="alert alert-error">
              Maximum aantal personen: {maxPersons}
            </div>
          )}
          {adults === 0 && kids === 0 && (
            <div className="alert alert-error">
              Er moeten een bepaald aantal personen verblijven.
            </div>
          )}
          {adults === 0 && kids > 0 && (
            <div className="alert alert-error">
              Een verblijf met alleen kinderen is niet heel erg handig
            </div>
          )}
        </section>
        {ok && (
          <section>
            <table className="mt-4 border-t-2 border-black dark:border-white w-full md:w-3/5">
              <caption className="align-middle text-left">Offerte</caption>
              <tbody>
                <tr>
                  <td>
                    Toeristenbelasting ({presentPrice(price.tax)} p.p.p.n.)
                  </td>
                  <td>{presentPrice(tax)}</td>
                </tr>
                <tr>
                  <td>Parkkosten ({presentPrice(price.adult)} p.v.p.n)</td>
                  <td>{presentPrice(parkCosts)}</td>
                </tr>
                <tr>
                  <td>Huur ({presentPrice(price.rent)} per nacht)</td>
                  <td>{presentPrice(price.rent * nights)}</td>
                </tr>
                <tr>
                  <td>Borg (per verblijf)</td>
                  <td>{presentPrice(price.deposit)}</td>
                </tr>
                <tr>
                  <td>Totaal ({nights} nachten)</td>
                  <td>
                    {presentPrice(rent + tax + parkCosts + price.deposit)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        <section>
          <div className="alert alert-info">
            De huur ({presentPrice(rent)}) en de borg (
            {presentPrice(price.deposit)}) dienen vooraf betaald te worden. Dat
            komt neer op {presentPrice(rent + price.deposit)} op rekeningnummer{' '}
            {bankAccount}.
          </div>
        </section>
      </form>
    </Layout>
  )
}

export default Rekenhulp
