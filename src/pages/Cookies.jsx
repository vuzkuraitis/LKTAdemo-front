import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";

const Cookies = () => {
  return (
    <>
      <RegularSection>
        <Hero title="LKTRA Gerbia jūsų privatumą" />
        <div className="cookies">
          <p>Slapukai LKTrA, prieinami www.treneriai.com</p>
          <h4>Kas yra slapukai</h4>
          <p>
            Kaip įprasta beveik visose profesionaliose svetainėse, tai svetainė
            naudoja slapukus, kurie yra maži failai, kurie atsisiunčiami į jūsų
            svetainę kompiuteriu, kad pagerintumėte savo patirtį. Šiame
            puslapyje aprašoma, kas informaciją, kurią jie renka, kaip ją
            naudojame ir kodėl kartais to reikia saugoti šiuos slapukus. Taip
            pat pasidalinsime, kaip galite to išvengti slapukai nebus saugomi,
            tačiau tai gali būti žemesnė arba „sugesti“ tam tikri svetainių
            funkcionalumo elementai.
          </p>
          <h4>Kaip naudojame slapukus</h4>
          <p>
            Slapukus naudojame dėl įvairių toliau aprašytų priežasčių. Deja,
            daugeliu atvejų nėra pramonės standartinių parinkčių už slapukų
            išjungimą visiškai neišjungus funkcionalumo ir funkcijas, kurias jie
            prideda prie šios svetainės. Rekomenduojama išeiti ant visų slapukų,
            jei nesate tikri, ar jums jų reikia, ar ne tuo atveju, jei jie
            naudojami jūsų naudojamai paslaugai teikti.
          </p>
          <h4>Slapukų nustatymai</h4>
          <p>
            Naudojame slapukus, kad galėtume suasmeninti turinį bei skelbimus,
            teikti visuomeninės medijos funkcijas ir analizuoti srautą. Be to,
            svetainės naudojimo informaciją bendriname su visuomeninės medijos,
            reklamavimo ir analizės partneriais, kurie gali ją pridėti prie
            kitos jūsų pateiktos arba naudojant paslaugas surinktos
            informacijos. Toliau naudodamiesi mūsų svetaine, jūs sutinkate su
            mūsų slapukais.
          </p>
          <h4>Būtinieji slapukai</h4>
          <p>
            Būtinieji Slapukai – tai Slapukai reikalingi tinkamam Jūsų svetainės
            veikimui. Jie įgalina naudotis tam tikromis Svetainės funkcijomis,
            pavyzdžiui, leidžia saugoti informaciją, kurią užpildė Jūsų
            lankytojas naršymo sesijos metu, o taip pat saugiai prisijungti prie
            Svetainėje susikurtos lankytojo paskyros. Be šių Slapukų dažnu
            atveju Svetainė negali tinkamai veikti.
          </p>
        </div>
      </RegularSection>
    </>
  );
};

export default Cookies;
