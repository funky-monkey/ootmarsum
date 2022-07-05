import Image from 'next/image'
import { Layout } from '@/components'
import { presentPrice } from '@/utils'
import config from '@/config'

const { price } = config

const Handleiding = () => (
  <Layout title="Handleiding">
    <h6 className="subtitle">Handleiding</h6>
    <p className="paragraph">
      Welkom in ons vakantiehuisje! Hier kan je lezen wat je (eventueel) moet
      doen bij aankomst, en wat je (bij voorkeur) kan doen bij het verlaten van
      het chalet. Idealiter is alles wat hieronder staat al gedaan, waardoor u
      onderstaande stappen ter referentie kan beschouwen.
    </p>
    <h6 className="subtitle">Aanmelden</h6>
    <p className="paragraph">
      U kunt u melden bij de receptie aan de ingang van de camping. Daar weet
      men van uw komst, en zij zullen de juiste sleutels aan u geven.
    </p>
    <ul className="list-disc list-inside">
      <li>
        Het vakantiehuisje is van Stegeman, de locatie is C19. Dan weten zij
        voldoende.
      </li>
      <li>
        U dient bij de receptie ook de benodigde toeristenbelasting te voldoen.
        Momenteel is dat {presentPrice(price.tax)} per persoon, per nacht
      </li>
    </ul>
    <h6 className="subtitle">Gas</h6>
    <p className="paragraph">
      De gasfles vind je aan de rechterzijde van het chalet.
    </p>
    <ul className="list-disc list-inside">
      <li>
        <strong>openen</strong>: draai de dop bovenop de gasfles met de klok
        mee, helemaal open
      </li>
      <li>
        <strong>sluiten</strong>: draai de dop bovenop de gasfles tegen de klok
        in , helemaal dicht
      </li>
      <li>
        Controleer of het gas goed aan/afgesloten is door een pitje op het
        fornuis aan te steken
      </li>
    </ul>
    <h6 className="subtitle">Vrijwel zeker niet nodig: gasfles verwisselen</h6>
    <p className="paragraph">
      Mocht de gasfles vervangen moeten worden, dan is het mogelijk dit zelf te
      doen. Eventuele kosten hiervoor worden door ons vergoed.
    </p>
    <ul className="list-disc list-inside">
      <li>
        Afkoppelen lege gasfles
        <ol className="list-decimal list-inside">
          <li>
            draai eerst de aansluiting van de gasfles helemaal{' '}
            <strong>dicht</strong>
          </li>
          <li>in de gereedschapskist in de schuur ligt een waterpomptang</li>
          <li>
            gebruik de waterpomptang om de slang van de gasfles te ontkoppelen
          </li>
          <li>
            let hierbij op dat, vanwege veiligheid, de aansluiting de{' '}
            <strong>andere</strong> kant op draait dan je zou verwachten
            (openen: rechtsom / met de klok mee)
          </li>
          <li>til de lege glasfes van de plek</li>
          <li>leg de waterpomptang terug in de schuur</li>
          <li>
            let op: vervoeren van een gasfles in een auto, zelfs in lege
            gasfles, is verboden!
          </li>
        </ol>
      </li>
      <li>
        Bij de receptie (Richard en/of Stef) is het mogelijk om de lege gasfles
        in te wisselen voor een volle.
      </li>
      <li>
        Aankoppelen volle gasfles
        <ol className="list-decimal list-inside">
          <li>let op: vervoeren van een gasfles in een autois verboden!</li>
          <li>zet de volle gasfles op de goede plek</li>
          <li>in de gereedschapskist in de schuur ligt een waterpomptang</li>
          <li>
            gebruik de waterpomptang om de slang van de gasfles aan te sluiten
          </li>
          <li>
            let hierbij op dat, vanwege veiligheid, de aansluiting de{' '}
            <strong>andere</strong> kant op draait dan je zou verwachten
            (sluiten: linksom / tegen de klok in)
          </li>
          <li>
            als de slang aangesloten is, draai eerst de aansluiting van de
            gasfles helemaal <strong>open</strong>
          </li>
          <li>volg de stappen voor het aanzetten van warm water</li>
          <li>leg de waterpomptang terug in de schuur</li>
        </ol>
      </li>
    </ul>
    <h6 className="subtitle">Warm water</h6>
    <ul className="list-disc list-inside">
      <li>Volg eerst de stappen voor het openen van de gas toevoer.</li>
      <li>
        De warm-water boiler bevindt zich bij de voordeur, bij binnenkomst
        direct rechts
      </li>
      <li>Draai de bovenste knop op &quot;ontsteking&quot;</li>
      <li>Druk de bovenste knop in</li>
      <li>Druk tegelijkertijd de onsteking knop in</li>
      <li>
        Er zal nu een ontsteking plaatsvinden, hou de knop net zolang ingedrukt
        tot dit gebeurd is
      </li>
      <li>
        Als de boiler brandt, laat de knoppen los, en draai de knop naar de
        normale stand
      </li>
      <li>Bij een warm water vraag zal de boiler &quot;aan&quot; springen</li>
    </ul>
    <h6 className="subtitle">Televisie</h6>
    <p className="paragraph">
      Het chalet heeft de beschikking over satelliet televisie. Het aanzetten
      gaat als volgt:
    </p>
    <ul className="list-disc list-inside">
      <li>
        Zet de satelliet ontvanger (het kleine kastje) aan. Hiervoor kan je de
        afstandsbediening gebruiken, of de aan/uit knop op de ontvanger zelf.
        Het opstarten kan enige minuten duren. Er verschijnt dan
        &quot;STBY&quot; in het display.
      </li>
      <li>
        Ondertussen gebruik je de andere afstandsbediening (&quot;Samsung&quot;)
        om de televisie aan te zetten.{' '}
      </li>
      <li>
        Zorg er voor dat het correcte kanaal &quot;HDMI 1&quot; is geselecteerd
      </li>
    </ul>
  </Layout>
)

export default Handleiding
