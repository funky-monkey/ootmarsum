import Image from 'next/image'
import { Layout } from '@/components'

const Ootmarsum = () => (
  <Layout title="Ootmarsum">
    <h6 className="subtitle">Ootmarsum</h6>
    <p className="paragraph">
      Op 2 km. afstand van het vakantiepark ligt het pittoreske{' '}
      <a href="http://www.ootmarsum-dinkelland.nl/">Ootmarsum</a>. Hier geniet u
      van kunst, gastvrijheid en cultuur. Ook kunt u lekker uitrusten op één van
      de vele terrasjes.
    </p>
    <figure>
      <Image
        src={`/media/ootmarsum1.webp`}
        width={480}
        height={322}
        alt="ootmarsum"
      />
    </figure>
    <p className="paragraph">
      Gezellige straten en smalle steegjes, authentieke vakwerkhuizen en heel
      veel leuke shopjes en kunstgalerieën. Het stadje staat bekend om de vele
      kunstenaars, galerieën en musea. In Ootmarsum leven, werken en exposeren
      vele kunstenaars. Hier valt het hele jaar door iets te beleven.
    </p>
    <p className="paragraph">
      Een van de dingen waarvoor je de toeristische regio Ootmarsum-Dinkelland
      bezoekt is ruimte. Rondzwerven door uitgestrekte bossen, eeuwenoude
      landgoederen en langs kabbelende beekjes. Hier en daar kom je zelfs over
      een heuse berg. Te midden van dit heerlijke landschap stuit je onder meer
      op het (kunst) stadje Ootmarsum en de dorpen Denekamp en Weerselo. Twente
      creëert vanzelf ruimte in je hoofd en opeens heb je tijd zat...omdat het
      leven hier net even langzamer en gemoedelijker is. Je komt helemaal tot
      jezelf.
    </p>
  </Layout>
)

export default Ootmarsum
