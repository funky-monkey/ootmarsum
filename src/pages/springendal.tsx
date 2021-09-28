import Image from 'next/image'
import { Layout } from '../components'

const Springendal = () => (
  <Layout title="Het Springendal">
    <h6 className="subtitle">
      Grenzend aan het vakantiepark vindt u natuurgebied &quot;Het
      Springendal&quot;
    </h6>
    <p className="paragraph">
      Vanaf het park wandelt of fiets u dus direct de natuur in! U krijgt op de
      camping altijd een wandelkaart van het Springendal mee zodat u de mooiste
      routes kunt wandelen. Ook zijn er bij de receptie fietskaarten beschikbaar
      met de nieuwste knooppunt routes.
    </p>
    <figure>
      <Image
        src={`/media/springendal2.webp`}
        width={480}
        height={322}
        alt="springendal"
      />
    </figure>
    <p className="paragraph">
      De tuin van Nederland’ luidt de bijnaam van dit stukje Twente.
      Schilderachtige kwelvijvers, watervalletjes en smalle beekjes midden in
      het bos.
    </p>
    <p className="paragraph">
      Heuvels, weilanden, meertjes, hooilanden, heide en historische boerderijen
      maken het plaatje compleet. Rond 1920 werd Het Springendal aangekocht door
      de Enschedese textielbaron Jannink. Hij gaf het al eeuwenoude
      landbouwgebied het aanzicht van een landgoed met veel Engelse kenmerken.
      De middeleeuwse essen (bolakkers die doorbemesting steeds hoger werden)
      zijn, vriendelijk omzoomd door bomen, opgenomen in het geheel. Ook liggen
      er een aantal fantastische Twentse boerderijen.
    </p>
    <h6 className="subtitle">Bronnen en beken</h6>
    <p className="paragraph">
      Het Springendal heeft een structuur van lanen en van water. Naast de
      monumentale Mosbeeklaan waarop een aantal zijlanen uitkomen wordt het
      karakter van het landgoed bepaald door bronnen en beken. Opborrelend water
      vormt een drietal vijvers, die op hun beurt de Springendalsebeek voeden.
    </p>
    <figure>
      <Image
        src={`/media/springendal1.webp`}
        width={480}
        height={322}
        alt="springendal"
      />
    </figure>
  </Layout>
)

export default Springendal
