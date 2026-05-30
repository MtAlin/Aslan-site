export interface Book {
  slug: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverImage: string;
  shortDesc: string;
  fullDesc: string;
  pages: number;
  year: number;
  language: string;
  availability: "Disponibil" | "Împrumutat" | "Rezervat";
}

export const books: Book[] = [
  {
    slug: "narnia",
    title: "Cronicile din Narnia",
    author: "C.S. Lewis",
    genre: "Ficțiune Creștină / Fantezie",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop",
    shortDesc: "O serie legendară de șapte romane fantastice, o capodoperă a literaturii care explorează teme creștine profunde într-un mod magic.",
    fullDesc: "Cronicile din Narnia este o capodoperă literară scrisă de C.S. Lewis, care a fermecat generații întregi de cititori. Prin intermediul dulapului magic, copiii pășesc în tărâmul fantastic din Narnia, o lume a animalelor vorbitoare, a făpturilor mitologice și a luptei eterne dintre bine și rău. Leul Aslan, figura centrală și salvatoare, reprezintă o alegorie profundă a credinței, a sacrificiului și a mântuirii. Această ediție adună toate cele șapte povestiri într-un volum de colecție.",
    pages: 768,
    year: 1956,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "pelerinul",
    title: "Călătoria Pelerinului",
    author: "John Bunyan",
    genre: "Clasic Creștin / Alegorie",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Cea mai faimoasă alegorie creștină din toate timpurile, descriind drumul plin de încercări al lui Creștin spre Cetatea Cerească.",
    fullDesc: "Călătoria Pelerinului este una dintre cele mai citite și traduse cărți din istoria omenirii, după Sfânta Scriptură. Scrisă de John Bunyan în timp ce se afla în închisoare pentru credința sa, cartea prezintă sub formă de alegorie călătoria spirituală a unui om numit Creștin, care își lasă în urmă orașul natal (Orașul Distrugerii) și pornește într-o călătorie anevoioasă dar plină de speranță către Cetatea Cerească. Pe drum, el se confruntă cu ispite, pericole și personaje memorabile precum Speranță, Credincios sau Uriașul Disperare.",
    pages: 320,
    year: 1678,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "ascunzisul",
    title: "Ascunzișul",
    author: "Corrie ten Boom",
    genre: "Biografie / Credință",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Povestea adevărată și cutremurătoare a unei familii olandeze care a salvat sute de evrei în timpul Holocaustului, supraviețuind lagărelor de concentrare.",
    fullDesc: "Ascunzișul este autobiografia emoționantă a lui Corrie ten Boom, o ceasornicară olandeză care, împreună cu sora ei Betsie și tatăl lor Casper, și-au transformat casa într-un adăpost pentru evreii persecutați de naziști în timpul celui de-al Doilea Război Mondial. Trădați și trimiși în lagărele morții de la Ravensbrück, credința lor nezdruncinată în Dumnezeu și în puterea iertării devine o lumină în cel mai întunecat loc de pe pământ. O lecție supremă de dragoste, credință și biruință asupra urii.",
    pages: 288,
    year: 1971,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "cunoasterea",
    title: "Cunoașterea Sfântului",
    author: "A.W. Tozer",
    genre: "Devoțional / Teologie",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop",
    shortDesc: "O scriere profundă care ne readuce în atenție măreția lui Dumnezeu și importanța restaurării conceptului nostru despre caracterul Divin.",
    fullDesc: "Cunoașterea Sfântului este una dintre cele mai influente cărți creștine ale secolului XX. Scrisă de pastorul și teologul A.W. Tozer, această lucrare clasică pledează pentru o reîntoarcere la o înțelegere corectă și profundă a atributelor lui Dumnezeu: atotputernicia, atotprezența, dragostea, sfințenia și harul Său. Tozer susține că criza spirituală a lumii moderne provine din faptul că biserica și oamenii au pierdut conceptul de măreție al lui Dumnezeu. Fiecare capitol este o invitație la închinare sinceră și reverență.",
    pages: 160,
    year: 1961,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "colind",
    title: "Colind de Crăciun",
    author: "Charles Dickens",
    genre: "Clasic / Literatură",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Celebra poveste a zgârcitului Ebenezer Scrooge, transformat de vizita spiritelor Crăciunului într-un om generos și plin de compasiune.",
    fullDesc: "Colind de Crăciun (A Christmas Carol) este una dintre cele mai îndrăgite povestiri scrise de Charles Dickens. Ea urmărește transformarea spectaculoasă a lui Ebenezer Scrooge, un bătrân bancher zgârcit, mizantrop și insensibil la suferința din jur. În noaptea de Ajun, el este vizitat de fantoma fostului său partener de afaceri, Jacob Marley, și de trei spirite ale Crăciunului (Trecut, Prezent și Viitor). Această călătorie supranaturală îi deschide ochii asupra propriei vieți și îi trezește compasiunea, generozitatea și dragostea de semeni.",
    pages: 144,
    year: 1843,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "harului",
    title: "Prețul Harului",
    author: "Dietrich Bonhoeffer",
    genre: "Teologie / Spiritualitate",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1474932430478-367db26836c1?q=80&w=600&auto=format&fit=crop",
    shortDesc: "O lucrare esențială care distinge între 'harul ieftin' - simpla justificare a păcatului, și 'harul costisitor' - adevărata ucenicie creștină.",
    fullDesc: "Prețul Harului (The Cost of Discipleship) este o carte de căpătâi a teologiei creștine contemporane, scrisă de teologul luteran german Dietrich Bonhoeffer, ucis de naziști pentru rezistența sa împotriva regimului. Bonhoeffer lansează un atac direct asupra 'harului ieftin' – acea formă de credință călduță, fără pocăință, fără disciplină și fără cost. În schimb, el apără cu fermitate 'harul costisitor', care ne cheamă să Îl urmăm pe Hristos cu întreaga noastră viață, indiferent de consecințe. O carte profund provocatoare.",
    pages: 352,
    year: 1937,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "ortodoxia",
    title: "Ortodoxia",
    author: "G.K. Chesterton",
    genre: "Apologetică / Filosofie",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=600&auto=format&fit=crop",
    shortDesc: "O pledoarie strălucitoare și plină de umor pentru credința creștină clasică, descrisă ca o aventură uluitoare a spiritului.",
    fullDesc: "Ortodoxia este una dintre cele mai cunoscutute lucrări de apologetică creștină, scrisă de faimosul scriitor englez G.K. Chesterton. Cu stilul său plin de paradoxuri, umor inteligent și argumente sclipitoare, Chesterton își descrie propria călătorie intelectuală de la scepticism la credință. El demonstrează că dogmele creștine, departe de a fi rigide sau plictisitoare, oferă singura explicație logică, vie și captivantă pentru complexitatea realității, fiind calea către adevărata libertate și bucurie.",
    pages: 224,
    year: 1908,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "femeie",
    title: "Lăsați-mă să fiu femeie",
    author: "Elisabeth Elliot",
    genre: "Misiune & Viață",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Gânduri profunde despre feminitate, dragoste, căsătorie și ucenicie creștină, adresate tinerei generații.",
    fullDesc: "În cartea Lăsați-mă să fiu femeie, Elisabeth Elliot combină experiența sa de viață, bogăția cunoașterii teologice și dragostea profundă pentru valorile biblice pentru a discuta despre semnificația feminității creștine. Adresându-se fiicei sale, autoarea explorează ce înseamnă să fii femeie în lumina creației divine, demnitatea acestui rol și modul în care o femeie își poate găsi împlinirea deplină prin dăruire, credință și slujire.",
    pages: 208,
    year: 1976,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "slava",
    title: "Totul pentru slava Lui",
    author: "Oswald Chambers",
    genre: "Devoțional / Zilnic",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Cel mai iubit devotional zilnic din lume, oferind meditații profunde și provocatoare pentru fiecare zi a anului.",
    fullDesc: "Totul pentru slava Lui (My Utmost for His Highest) este cel mai citit devoțional zilnic din istorie. Această carte adună meditațiile rostite de Oswald Chambers elevilor de la Școala de Instruire Biblică din Londra și trupelor în timpul Primului Război Mondial, notate și publicate ulterior de soția sa. Fiecare lectură zilnică oferă o perspectivă profundă, fără compromisuri, care îi provoacă pe creștini să se dăruiască în întregime lui Dumnezeu, trăind o viață de sfințenie, ascultare și credință sinceră.",
    pages: 384,
    year: 1927,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "karamazov",
    title: "Frații Karamazov",
    author: "Fyodor Dostoievsky",
    genre: "Clasic / Literatură Universală",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Capodopera literaturii ruse care explorează dramele morale, liberul arbitru, existența lui Dumnezeu și puterea iertării creștine.",
    fullDesc: "Frații Karamazov este ultimul și cel mai mare roman scris de Fyodor Dostoievsky. O dramă pasionantă ce urmărește rivalitățile dintre un tată depravat, Fyodor Pavlovici, și cei trei fii ai săi: Dmitri, Ivan și Alexei (Alioșa) — cel din urmă fiind un ucenic la mănăstire. Prin dialoguri filosofice profunde (precum legenda Marelui Inchizitor), romanul explorează în profunzime existența lui Dumnezeu, originea răului, liberul arbitru și harul mântuitor al credinței creștine autentice, întruchipată de Alioșa și părintele Zosima.",
    pages: 928,
    year: 1880,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "tolkien",
    title: "Stăpânul Inelelor",
    author: "J.R.R. Tolkien",
    genre: "Fantezie / Literatură Clasică",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Cea mai mare epopee fantastică a secolului XX, o poveste captivantă despre prietenie, loialitate și biruința luminii asupra întunericului.",
    fullDesc: "Stăpânul Inelelor este o operă monumentală creată de scriitorul și filologul J.R.R. Tolkien. Deși se desfășoară într-un tărâm complet fictiv (Pământul de Mijloc) cu propria sa istorie, limbi și creaturi, opera reflectă credința creștină profundă a lui Tolkien. Temele precum jertfa de sine, providența nevăzută, harul acordat celor slabi (ca Frodo și Sam), și speranța nestinsă în fața unui rău copleșitor fac din această aventură o alegorie simbolică de o frumusețe rară.",
    pages: 1200,
    year: 1954,
    language: "Română",
    availability: "Disponibil"
  },
  {
    slug: "ucenic",
    title: "Calea Adevăratului Ucenic",
    author: "Dietrich Bonhoeffer",
    genre: "Spiritualitate / Teologie",
    rating: 5,
    coverImage: "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=600&auto=format&fit=crop",
    shortDesc: "O chemare profundă la dedicare autentică și o trăire radicală a credinței în viața de zi cu zi, conform Scripturii.",
    fullDesc: "Calea Adevăratului Ucenic cuprinde scrieri și reflecții esențiale ale lui Dietrich Bonhoeffer din perioada funcționării seminarului clandestin de la Finkenwalde. Cartea explorează viața în comunitatea creștină adevărată, importanța rugăciunii comune, mărturisirea reciprocă și urmarea neabătută a lui Hristos. Într-o epocă a marilor compromisuri sociale și politice, Bonhoeffer arată că ucenicia autentică presupune o dăruire totală a voinței și a acțiunilor noastre în ascultare față de poruncile divine.",
    pages: 192,
    year: 1938,
    language: "Română",
    availability: "Disponibil"
  }
];

export const booksData = books.reduce((acc, book) => {
  acc[book.slug] = book;
  return acc;
}, {} as Record<string, Book>);
