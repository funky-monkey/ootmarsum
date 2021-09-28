import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../components'
import { presentPrice } from '../utils'
import config from '../config'

const { price } = config

const Home = () => (
  <Layout title="Home">
    <p className="paragraph">
      Deze vakantiewoning is een knusse, vrijstaande en volledig ingerichte
      chalet aan de rand van Camping &amp; Bungalowpark &quot;
      <a href="https://campingbijdebronnen.nl">Bij De Bronnen</a>&quot; in het
      prachtige Twente, vlabij het pittoreske kunststadje{' '}
      <Link href="/ootmarsum">
        <a className="link">Ootmarsum</a>
      </Link>
      . Deze locatie biedt een unieke combinatie tussen uitzicht op de weide
      (met paarden) en bos -{' '}
      <Link href="/springendal">
        <a className="link">Het Springendal</a>
      </Link>
      , aan de grens met Duitsland. De ligging van het park biedt een combinatie
      van recreatie, historie en kunst, maar bovenal een rustieke omgeving in de
      groene natuur. De landelijke omgeving maakt camping/bungalowpark bij de
      Bronnen een geweldig uitgangspunt voor wandel- en fietstochten.
    </p>
    <div>
      <Image src={`/media/2.webp`} width={336} height={252} alt="chalet" />
    </div>
    <p className="paragraph">
      Het chalet is geschikt voor 2 tot 6 personen. Het is comfortabel ingericht
      met een eet- en zithoek. Sateliet televisie via Canal Digital is aanwezig.
    </p>
    <p className="paragraph">
      Het chalet heeft de beschikking over:
      <ul className="list-disc list-inside">
        <li>Keuken met magnetron, 4 kookplaten, oven, Senseo en koelkast</li>
        <li>warm water, inpandige douche</li>
        <li>sateliet televisie</li>
        <li>inpanding toilet</li>
        <li>schuur op het terrein met 2e toilet</li>
        <li>gedeeltelijk overdekt ruim terras</li>
        <li>dekbedden, handdoeken</li>
        <li>
          gratis WiFi bij de receptie van de camping. De WiFi dekking op het
          park zelf is, helaas, niet toereikend
        </li>
      </ul>
    </p>
    <div>
      <Image src={`/media/3.webp`} width={336} height={252} alt="chalet" />
    </div>
    <p className="paragraph">
      Als gast kunt u vanzelfsprekend gebruik maken van alle faciliteiten van{' '}
      <a href="https://campingbijdebronnen.nl" className="link">
        Bij De Bronnen
      </a>
      , waaronder luxe sanitair, elektra, uitgebreide watervoorzieningen (warm
      en koud), fietsverhuur, het restaurant en de parkeerplaatsen. Voor de
      ondernemende mens is er een speeltuin en een tennisbaan.
    </p>
    <p className="paragraph">
      De camping rekent bijkomende parkkosten van {presentPrice(price.adult)}{' '}
      (volwassene) en {presentPrice(price.kid)} (kind) per nacht. De
      toeristenbelasting van de gemeente Dinkelland, waar Ootmarsum onder valt,
      bedraagt {presentPrice(price.tax)} per persoon, per nacht . Deze bedragen
      dienen bij aankomst voldaan te worden bij de receptie van de camping.
    </p>
    <div>
      <Image src={`/media/5.webp`} width={336} height={252} alt="chalet" />
    </div>
  </Layout>
)

export default Home
