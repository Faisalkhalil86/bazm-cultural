import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: -10 },
};

const scaleIn = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1.05 },
};

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 max-w-[1920px] mx-auto scroll-smooth">
      <div className=" space-y-24">
        {/* PROGRAM */}
        <div id="program" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">PROGRAM</h2>
            <p className="text-gray-300 text-justify">
              Oppdag våre kommende arrangementer, kulturelle samlinger og
              verksteder som viser frem den rike arven fra Sør-Asia. Fra livlige
              danseopptredener og sjelfull musikk til fortellerstunder og
              matfestivaler – hvert program er utformet for å feire mangfold og
              fellesskap. Våre verksteder gir en mulighet til å lære
              tradisjonell kunst, håndverk og kulturelle praksiser, samtidig som
              man knytter bånd med mennesker som deler samme lidenskap for
              kultur og arv.
            </p>
            <a
              href="#program"
              className="text-red-500 font-semibold hover:underline"
            >
              See program →
            </a>
          </div>
          {/* Image */}
          <div>
            <motion.img
              src="/program.webp"
              alt="Program"
              className="w-full h-80 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* ARTISTS */}
        <div id="artists" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div>
            <motion.img
              src="/artist.webp"
              alt="Artists"
              className="w-full h-80 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Text Right */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">ARTISTER</h2>
            <p className="text-gray-300 text-justify">
              Utforsk tradisjonelle og moderne forestillinger fra talentfulle
              lokale og internasjonale artister. Opplev skjønnheten i fusjon når
              moderne stiler blandes med eldgamle tradisjoner og skaper
              uforglemmelige kulturelle øyeblikk på scenen. Fra sjelfull musikk
              og grasiøse danser til eksperimentelle kunstformer og
              samarbeidsopptredener, fremhever hver forestilling mangfoldet og
              rikdommen i den sørasiatiske arven. Disse artistene underholder
              ikke bare, men inspirerer også ved å dele historier, følelser og
              tradisjoner som knytter generasjoner og lokalsamfunn over hele
              verden.
            </p>
            <a
              href="#artists"
              className="text-red-500 font-semibold hover:underline"
            >
              See artists →
            </a>
          </div>
        </div>

        {/* TICKETS */}
        <div id="tickets" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">BILLETTER</h2>
            <p className="text-gray-300 text-justify">
              Kjøp billetter til våre festivaler og kulturarrangementer med
              letthet. Sikre deg en plass på forhånd og bli en del av en
              uforglemmelig kulturell reise. Enten det er livlige
              danseopptredener, sjelfulle konserter, fortellerkvelder eller
              matfestivaler, åpner billetten din døren til unike kulturelle
              opplevelser. Tidlig bestilling sikrer at du ikke går glipp av de
              mest etterlengtede programmene, og gir deg muligheten til å nyte
              tradisjoner, kreativitet og fellesskap på sitt beste.
            </p>
            <a
              href="#tickets"
              className="text-red-500 font-semibold hover:underline"
            >
              Buy tickets →
            </a>
          </div>
          {/* Image */}
          <div>
            <motion.img
              src="/tickets.webp"
              alt="Tickets"
              className="w-full h-72 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* MELA FESTIVAL */}
        <div
          id="mela-festival"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Left */}
          <div>
            <motion.img
              src="/mela.webp"
              alt="Volunteer"
              className="w-full h-80 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Text Right */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">MELA FESTIVAL</h2>
            <p className="text-gray-300 text-justify">
              Mela-festivalen er en livlig feiring av sørasiatisk kultur som
              samler mennesker fra alle bakgrunner for å oppleve rikdommen av
              tradisjoner, kunst og fellesskap. Fra fargerike dekorasjoner og
              livlig musikk til tradisjonell dans, mat og håndverk, skaper
              festivalen en atmosfære fylt med glede og samhold. Det er mer enn
              bare et arrangement – det er en kulturell reise som knytter
              generasjoner sammen og viser frem mangfoldet i Sør-Asia.
            </p>
            <a
              href="#mela-festival"
              className="text-red-500 font-semibold hover:underline"
            >
              Mela Festival →
            </a>
          </div>
        </div>

        {/* MUSIC */}
        <div id="music" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">MUSIKK</h2>
            <p className="text-gray-300 text-justify">
              Musikk ligger i hjertet av våre kulturelle feiringer. Fra
              klassiske ragas og religiøse sanger til energiske folkeslag og
              moderne fusjon, viser arrangementene våre den sjelfulle essensen
              av sørasiatisk musikk. Hver opptreden bringer en rytme som
              overskrider grenser og skaper en atmosfære av harmoni og glede.
              Opplev melodier som knytter tradisjoner med innovasjon, og stemmer
              som gjenspeiler historier om arv og fellesskap.
            </p>
            <a
              href="#music"
              className="text-red-500 font-semibold hover:underline"
            >
              Explore music →
            </a>
          </div>
          {/* Image */}
          <div>
            <motion.img
              src="/music.webp"
              alt="Music"
              className="w-full h-92 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">OM</h2>
            <p className="text-gray-300 text-justify">
              Bazm Cultural Festival fremmer sørasiatisk kultur i Bergen gjennom
              tradisjoner, verdier og fellesskapsaktiviteter. Vårt oppdrag er å
              fremme harmoni og gjensidig respekt gjennom kulturell utveksling
              og delte opplevelser som bringer mennesker sammen. Festivalen
              fungerer som en bro mellom kulturer, og tilbyr en plattform der
              mangfold blir feiret og fellesskap knyttes sammen. Ved å fremheve
              musikk, dans, kunst, mat og fortelling skaper vi et miljø der folk
              kan verdsette rikdommen i sørasiatisk arv, samtidig som de
              omfavner enhet i mangfold.
            </p>
          </div>
          {/* Image */}
          <div>
            <motion.img
              src="/about.webp"
              alt="About"
              className="w-full h-80 object-contain rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
