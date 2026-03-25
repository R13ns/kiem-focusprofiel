// ==========================================
// 1. DATA (V2 Content + V1 Tags Structure)
// ==========================================
const DOMAINS = [
    {
        id: 1, title: "Ontwikkeling",
        challenges: [
            { icon: "🗣️", text: "Ik word vaak aangesproken op mijn gedrag", tags: ["U"], desc: "Je doet iets — en anderen reageren daarop, soms met kritiek of frustratie. Niet omdat je kwaad in de zin hebt, maar omdat je gedrag opvalt of botst met wat er verwacht wordt. Dit is misschien zo vertrouwd dat je er bijna immuun voor bent geworden. Of net niet." },
            { icon: "🎭", text: "Wat ik bedoel is niet altijd wat ik doe — mijn intentie en mijn gedrag lopen uiteen", tags: ["U"], desc: "Vanbinnen weet je precies wat je wilde zeggen of doen. Maar wat er uitkomt, is soms iets anders — te snel, te fel, te weinig. Anderen interpreteren dat als onverschilligheid of agressie, terwijl jij gewoon jezelf was. Die kloof tussen bedoeling en effect is vermoeiend en verwarrend." },
            { icon: "🎮", text: "Ik heb het gevoel geen controle te hebben over mijn eigen gedrag", tags: ["U"], desc: "Je weet soms zelf dat je beter anders zou reageren — maar het gaat sneller dan je denkt. Alsof je toekijkt vanop afstand terwijl je lichaam en mond al bezig zijn. Die gevoel van stuurloosheid is geen zwakte, het is een herkenbaar kenmerk van hoe ADHD werkt in het brein." },
            { icon: "🧩", text: "Ik heb moeite om me aan te passen aan wat van mij verwacht wordt", tags: ["U"], desc: "Regels, routines, verwachtingen van anderen — ze voelen soms als een jasje dat gewoon niet past. Niet omdat je rebels bent, maar omdat aanpassen voor jou meer energie kost dan voor de meeste mensen. Flexibel zijn in andermans richting gaat niet vanzelf." },
            { icon: "🏫", text: "Ik heb het moeilijk op school of in gestructureerde omgevingen", tags: ["M"], desc: "Stilzitten, luisteren, plannen, deadlines — allemaal tegelijk. In omgevingen met veel structuur van buitenaf loopt je brein al snel vast of zoekt het een uitweg. Dat zegt niets over hoe slim je bent, wel over hoe jouw brein het beste werkt." },
            { icon: "⬛", text: "Anderen zien mij als radicaal, zwart-wit of impulsief", tags: ["M"], desc: "Jij ziet het helder: het is zo, of het is niet zo. Die duidelijkheid voelt voor jou logisch, maar voor anderen kan het hard of ongenuanceerd overkomen. Impulsiviteit zit niet in je karakter — het zit in hoe snel je brein schakelt tussen waarnemen en reageren." },
            { icon: "🌋", text: "Ik reageer vanuit een emotionele ontlading, niet vanuit keuze", tags: ["E"], desc: "Er is een drempel, en soms is die drempel heel laag. Iets kleins kan een grote reactie uitlokken — niet omdat je wilt overdrijven, maar omdat de emotie al volop aanwezig was. De ontlading komt vóór de gedachte. Achteraf weet je soms zelf niet goed waar het vandaan kwam." },
            { icon: "🌫️", text: "Ik vind het moeilijk om mijn emoties te uiten, te onderscheiden of te begrijpen", tags: ["E"], desc: "Je voelt wel iets — maar wat precies? En hoe leg je dat uit aan iemand anders? Soms is het gewoon een vage onrust, een spanning zonder naam. Het onderscheid maken tussen boosheid, verdriet, teleurstelling of angst is geen automatisme voor iedereen. Voor jou kost het misschien extra moeite." }
        ],
        strengths: [
            { icon: "🎨", text: "Ik voel veel — en dat is ook een kracht", tags: ["E"], desc: "Jouw gevoelsleven is rijk en diep. Waar anderen soms oppervlakkig blijven, ga jij de diepte in. Dat maakt je tot iemand die echt aanwezig is — in vreugde, in verdriet, in verbinding met anderen. Het is niet altijd makkelijk, maar het is een gave." },
            { icon: "🔥", text: "Ik beleef dingen met grote emotionele intensiteit", tags: ["E"], desc: "Een film, een gesprek, een muzieknummer — jij voelt het voluit. Die intensiteit maakt ervaringen echt en betekenisvol. Anderen zijn soms jaloers op hoe levendig jij de wereld beleeft, ook al weet jij hoe zwaar die intensiteit soms kan wegen." },
            { icon: "💫", text: "Ik heb vurige passies waar ik volledig voor ga", tags: ["E"], desc: "Als iets je raakt, ga je er helemaal voor. Die gedrevenheid is aanstekelijk en krachtig. Mensen om je heen voelen dat — jouw enthousiasme sleept anderen mee. Passie is jouw motor, en die brandt heter dan bij de meesten." },
            { icon: "🦋", text: "Ik ben authentiek — ik doe niet alsof", tags: ["M"], desc: "Wat je ziet is wat je krijgt. Jij speelt geen rol, past je niet aan om aardig gevonden te worden. Dat is zeldzaam en waardevol. Mensen die jou kennen, weten dat ze op je kunnen vertrouwen — je bent echt." },
            { icon: "👁️", text: "Ik ben sterk visueel ingesteld en vang veel op zonder woorden", tags: ["M"], desc: "Je leest lichaamstaal, sfeer, details die anderen missen. Je brein verwerkt de wereld beeldend en associatief — dat geeft je een scherp gevoel voor situaties, mensen en patronen. Een kracht die je misschien zelf onderschat." },
            { icon: "🌱", text: "Ik ben veerkrachtig en geef niet snel op", tags: ["M"], desc: "Je hebt al veel overwonnen — en je staat er nog. Tegenslagen verwerken kost je misschien veel, maar je staat telkens opnieuw op. Die taaiheid is niet vanzelfsprekend. Het is iets om trots op te zijn." }
        ]
    },
    {
        id: 2, title: "Relaties en sociale aspecten",
        challenges: [
            { icon: "🫥", text: "Ik voel me vaak niet begrepen door anderen", tags: ["E"], desc: "Je legt iets uit, en de ander kijkt je aan alsof je een vreemde taal spreekt. Of je zegt niets, omdat je op voorhand weet dat het toch niet landt. Dat gevoel van alleen zijn terwijl je omringd bent door mensen is een van de zwaarste kanten van ADHD." },
            { icon: "🌊", text: "In sociale situaties raak ik snel emotioneel overspoeld", tags: ["E"], desc: "Een drukke ruimte, een moeilijk gesprek, te veel prikkels tegelijk — en je merkt dat je dichtslaat of net uitbarst. Je zenuwstelsel verwerkt alles sterker en sneller dan gemiddeld. Dat is geen gevoeligheid om je voor te schamen, het is gewoon hoe jij bent bedraad." },
            { icon: "📏", text: "Ik zoek grenzen op — van mezelf en van anderen", tags: ["U", "E", "M"], desc: "Regels testen, kijken hoe ver je kan gaan, grenzen verleggen — dat zit in je natuur. Soms bewust, soms zonder dat je het zelf doorhebt. Dat kan spanning geven in relaties, maar het is ook de kant van jou die durft en vernieuwt." },
            { icon: "🪞", text: "Ik heb niet altijd door welk effect mijn gedrag heeft op mensen om mij heen", tags: [], desc: "Je zegt iets en gaat verder — maar de ander blijft hangen bij wat je zei. Jij bent intussen al drie gedachten verder. Die blinde vlek voor hoe jouw woorden of acties landen, is niet onverschilligheid. Het is een moeilijk te trainen vaardigheid die veel bewuste aandacht vraagt." },
            { icon: "🌀", text: "Ik kom soms egocentrisch of ongeïnteresseerd over, terwijl dat niet mijn bedoeling is", tags: ["M"], desc: "Je bent in je eigen hoofd bezig — niet omdat je de ander niet belangrijk vindt, maar omdat je brein nu eenmaal druk is. Van buitenaf kan dat koud of afstandelijk lijken. Het is een misverstand dat relaties soms stevig op de proef stelt." },
            { icon: "💨", text: "Ik raak snel uitgekeken op vriendschappen of relaties", tags: ["E", "M"], desc: "In het begin is alles nieuw en boeiend — dan vervlakt het. Niet omdat de persoon minder waard is, maar omdat jouw brein prikkels nodig heeft om betrokken te blijven. Dat maakt langdurige relaties soms een bewuste inspanning in plaats van iets dat vanzelf gaat." },
            { icon: "👂", text: "Ik hecht veel waarde aan wat anderen van mij denken", tags: ["E"], desc: "Je bent gevoelig voor oordelen van anderen — een commentaar blijft lang hangen, een afwijzing raakt diep. Dat maakt je kwetsbaar, maar ook opmerkzaam en zorgzaam voor mensen om je heen. De keerzijde is dat je soms te veel van jezelf aanpast om goedkeuring te krijgen." }
        ],
        strengths: [
            { icon: "🫀", text: "Ik ben sterk empathisch — ik voel aan hoe het met iemand gaat", tags: ["E"], desc: "Jij voelt het als iemand het moeilijk heeft, soms al vóór diegene het zelf uitspreekt. Die antenne voor de emotionele toestand van anderen is een zeldzame gave. Mensen zoeken jou op omdat ze zich gezien voelen." },
            { icon: "⚖️", text: "Ik heb een groot rechtvaardigheidsgevoel", tags: ["E"], desc: "Onrecht raakt jou. Als iets niet klopt, zeg je het — ook als het makkelijker zou zijn om te zwijgen. Dat moed om op te komen voor wat juist is, ook voor anderen, is een van jouw meest waardevolle kanten." },
            { icon: "🎯", text: "Ik ben direct en eerlijk in wat ik zeg", tags: ["U"], desc: "Geen omwegen, geen spelletjes. Jij zegt wat je denkt en bedoelt wat je zegt. Dat kan soms hard binnenkomen, maar mensen weten waar ze aan toe zijn met jou. Eerlijkheid is een van de zeldzaamste vormen van respect." },
            { icon: "🗨️", text: "Ik ben verbaal sterk en kan goed verwoorden wat ik bedoel", tags: ["U"], desc: "Als je eenmaal de woorden vindt, komen ze er krachtig en helder uit. Jij kunt complexe dingen uitleggen, mensen overtuigen, verhalen vertellen. Taal is een instrument dat jij goed hanteert." }
        ]
    },
    {
        id: 3, title: "Mentale en persoonlijke leefwereld",
        challenges: [
            { icon: "🪨", text: "Ik heb het gevoel weinig impact te hebben op mijn omgeving", tags: [], desc: "Je doet je best, je probeert, maar het lijkt alsof er niets verandert. Dat gevoel van tegen een muur praten — of erger, onzichtbaar zijn — is uitputtend. Het ondermijnt je motivatie en je zelfvertrouwen, ook al is het beeld dat je van jezelf hebt niet altijd accuraat." },
            { icon: "🔋", text: "Ik vind het moeilijk om gemotiveerd te blijven als iets me niet boeit", tags: ["M"], desc: "Wilskracht helpt niet als het brein geen beloning ziet. Voor mensen met ADHD werkt motivatie anders: niet op basis van wat 'moet', maar op basis van wat interessant, urgent of uitdagend is. Saai = stilvallen, en dat is geen luiheid." },
            { icon: "💔", text: "Mijn zelfbeeld lijdt eronder als ik faal — dat verwerk ik moeilijk", tags: ["E", "M"], desc: "Een fout, een mislukking, kritiek — het raakt jou dieper dan anderen vermoeden. Je hoofd draait het opnieuw af, zoekt wat je anders had moeten doen. Dat zelfkritische mechanisme is vermoeiend en slijt aan je zelfvertrouwen, ook al heb je objectief gezien niets ernstigs gedaan." },
            { icon: "🔍", text: "Ik ben erg zelfkritisch", tags: ["M"], desc: "De lat die jij voor jezelf legt, ligt hoog. En als je er niet aan voldoet, ben jij de eerste die dat opmerkt en benoemt. Die innerlijke criticus is luid en meedogenloos. Hij bedoelt het 'goed', maar hij helpt je zelden verder." },
            { icon: "⚡", text: "Ik heb voortdurend prikkels en stimulatie nodig", tags: ["M"], desc: "Rust voelt voor jou soms ongemakkelijker dan drukte. Je brein zoekt voortdurend naar input — iets nieuws, iets spannends, iets dat het wakker houdt. Zonder dat wordt het onrustig of zelfs somber. Dat is geen grilligheid, het is een biologische behoefte." },
            { icon: "🔄", text: "Ik merk dat ik verslavingsgevoelig ben", tags: [], desc: "Alcohol, schermen, gokken, eten, werk, sport — alles wat snel dopamine geeft, trekt jou aan. Dat is geen karakterfout. Bij ADHD is het dopaminesysteem anders ingesteld, waardoor je brein sterker reageert op directe beloningen. Begrijpen wat iets jou geeft, is de eerste stap." },
            { icon: "⏳", text: "Ik wil dingen nu — wachten of uitstellen kost mij veel moeite", tags: ["M"], desc: "De toekomst voelt vaag en ver weg. Wat nu gebeurt, is echt — de rest is abstract. Dat maakt uitgesteld genot, langetermijnplanning of gewoon 'even wachten' fysiek ongemakkelijk. Jouw brein leeft in het nu, en dat heeft zijn eigen logica." },
            { icon: "🌡️", text: "Als ik iets sterk voel, geloof ik dat het ook waar is", tags: [], desc: "Een intens gevoel voelt als bewijs. Als je je waardeloos voelt, ben je dus waardeloos. Als je je verlaten voelt, word je dus verlaten. Die gelijkstelling van gevoel aan werkelijkheid is een valkuil — en tegelijk heel begrijpelijk als emoties zo sterk binnenkomen als bij jou." }
        ],
        strengths: [
            { icon: "🧭", text: "Ik heb een sterke intuïtie — ik voel dingen aan zonder dat ik het kan uitleggen", tags: ["E"], desc: "Jij weet soms dingen gewoon. Een persoon, een situatie, een beslissing — er is een innerlijk kompas dat je leidt. Dat is geen magie, het is jouw brein dat razendsnelle verbindingen maakt op basis van patroonherkenning. Vertrouw dat meer." },
            { icon: "✨", text: "Ik heb veel energie en enthousiasme als iets mij aanspreekt", tags: ["E", "U"], desc: "Als je ergens inzit, ga je er volledig voor. Die energie is aanstekelijk — mensen raken gemotiveerd door jou. Het is misschien niet altijd consistent, maar als het er is, is het krachtig en echt." },
            { icon: "💡", text: "Ik denk out-of-the-box en ben creatief", tags: ["M"], desc: "Jouw brein maakt verbindingen die anderen niet zien. Dat maakt je waardevol in situaties waar de standaardoplossing niet werkt. Creativiteit is niet alleen kunst — het is een manier van denken die problemen oplost op onverwachte manieren." },
            { icon: "🕸️", text: "Ik maak snel associaties en verbind ideeën die anderen niet zien", tags: ["M"], desc: "Twee dingen die op het eerste gezicht niets met elkaar te maken hebben — jij ziet de link. Dat associatieve denken is een van de meest onderschatte krachten van het ADHD-brein. Ideeën genereren, verbanden leggen, creatief probleem oplossen — dat is jouw terrein." },
            { icon: "🌊", text: "Ik ben flexibel en pas me makkelijk aan nieuwe situaties aan", tags: ["M"], desc: "Verandering maakt jou minder bang dan de meeste mensen. Je schakelt snel, past je aan, vindt een weg. In een wereld die steeds sneller verandert, is die flexibiliteit een troef die lang niet iedereen heeft." },
            { icon: "🔭", text: "Als iets mij boeit, kan ik er volledig in opgaan — hyperfocus", tags: ["M"], desc: "Tijd vliegt voorbij, de wereld verdwijnt, en jij bent er volledig in. Hyperfocus is de andere kant van afleidbaarheid — hetzelfde brein dat moeilijk gefocust blijft op saaie taken, kan urenlang opgaan in iets dat het raakt. Dat is een bijzondere gave als je hem leert inzetten." }
        ]
    }
];

const REFLECT_BANK = {
    E_challenge: [
        { tag: 'E', q: "Je herkent dat emoties snel en intens aanwezig zijn. Kan je een recente situatie bedenken waar die intensiteit je in de weg stond?", hint: "Probeer het gevoel te benoemen zonder het te beoordelen." },
        { tag: 'E', q: "'Emotie = waarheid' — herken jij dat? Wanneer hielp dat, en wanneer werkte het tegen je?", hint: "Denk aan een moment waarop je iets heel zeker wist vanuit een gevoel, maar het later anders bleek." }
    ],
    E_strength: [{ tag: 'E', q: "Jouw emotionele intensiteit is ook een kracht. In welke situaties maakt jouw empathie of rechtvaardigheidsgevoel het verschil?", hint: "" }],
    M_challenge: [
        { tag: 'M', q: "Je herkent dat structuur en motivatie lastig zijn. Wanneer lukt het wél — wat is er dan anders in die situatie?", hint: "Focus op omstandigheden, niet op wilskracht." },
        { tag: 'M', q: "Zelfkritiek herken je. Wat zeg je tegen jezelf na een mislukking? En wat zou jij zeggen tegen een vriend?", hint: "Let op het verschil tussen die twee stemmen." }
    ],
    M_strength: [{ tag: 'M', q: "Creativiteit en hyperfocus zijn motoren. Beschrijf een moment waarop je volledig verzonken was. Hoe voelde dat?", hint: "" }],
    U_challenge: [{ tag: 'U', q: "Je intentie en gedrag lopen soms uiteen. Hoe reageer je doorgaans als dat gebeurt?", hint: "Wat speelt er op zo'n moment van binnen?" }],
    U_strength: [{ tag: 'U', q: "Directheid en eerlijkheid zijn sterke punten. Hoe reageren anderen meestal op jouw directheid?", hint: "" }],
    social_challenge: [{ tag: 'E', q: "Niet begrepen worden is pijnlijk. In welke relatie voel je dat het sterkst? Wat zou je willen dat die ander begrijpt?", hint: "" }],
    addiction: [{ tag: 'M', q: "Verslavingsgevoeligheid heb jij herkend. Wat geeft de stof of het gedrag jou op het moment zelf?", hint: "Dit is geen oordeel — begrijpen wat iets geeft, helpt om alternatieven te vinden." }],
    blind_spot: [{ tag: 'M', q: "Tip: Je herkende veel uitdagingen en weinig sterktes. Welke kwaliteit van jezelf negeer jij misschien?", hint: "Bij een focusprofiel worden sterktes vaak onterecht als 'gewoon' beschouwd." }],
    generic: [
        { tag: 'M', q: "Welk item raakte je het meest? Wat maakt dat dit zo herkenbaar is voor jou?", hint: "Schrijf vrijuit wat er opkomt." },
        { tag: 'E', q: "Als je dit profiel bekijkt: wat koester je, en waar zou je aan willen werken?", hint: "" }
    ]
};

// ==========================================
// 2. STATE & INITIALIZATION
// ==========================================
let activeFilter = 'all';
let recognized = new Set();
const TAG_TOTALS = { U: 0, M: 0, E: 0 };

DOMAINS.forEach(d => {
    [...d.challenges, ...d.strengths].forEach(i => {
        i.tags.forEach(t => { if (TAG_TOTALS[t] !== undefined) TAG_TOTALS[t]++; });
    });
});

function init() {
    renderDomains();
    attachEventListeners();
    updateProgress();
}

// ==========================================
// 3. RENDER PAGE 1 (BUILDER)
// ==========================================
function renderDomains() {
    const container = document.getElementById('domains-container');
    container.innerHTML = '';

    DOMAINS.forEach((domain, di) => {
        const domainEl = document.createElement('div');
        domainEl.className = 'domain-col';

        const totalItems = domain.challenges.length + domain.strengths.length;
        
        let html = `
            <div class="domain-header" onclick="toggleDomain(${di})">
                <div class="domain-num">${domain.id}</div>
                <h2 class="domain-title-text">${domain.title}</h2>
                <div class="domain-badge">${totalItems} kenmerken</div>
                <div class="domain-arrow">▾</div>
            </div>
            <div class="domain-body" id="db-${di}">
                <div class="col-inner">
                    <h3 class="section-title ch-title">Uitdagingen</h3>
                    <div class="card-list">
        `;
        
        domain.challenges.forEach((item, ii) => { html += createCardHTML(item, `c-${di}-${ii}`); });
        
        html += `</div></div><div class="col-inner"><h3 class="section-title st-title">Sterktes</h3><div class="card-list">`;
        
        domain.strengths.forEach((item, ii) => { html += createCardHTML(item, `s-${di}-${ii}`); });
        
        html += `</div></div></div>`;
        domainEl.innerHTML = html;
        container.appendChild(domainEl);
    });
}

function toggleDomain(di) {
    const b = document.getElementById(`db-${di}`);
    b.classList.toggle('open');
    b.previousElementSibling.classList.toggle('open');
}

function createCardHTML(item, key) {
    const isSelected = recognized.has(key);
    const tagData = item.tags.join(',');
    const activeClass = isSelected ? 'selected' : '';
    
    let tagsHtml = '';
    item.tags.forEach(t => { tagsHtml += `<div class="tag ${t}">${t}</div>`; });

    return `
        <div class="item-card ${activeClass}" data-key="${key}" data-tags="${tagData}" onclick="toggleItem('${key}', this)" onmouseenter="showTooltip(event, '${key}')" onmouseleave="hideTooltip()">
            <div class="card-icon">${item.icon}</div>
            <div class="card-text">${item.text}</div>
            <div class="card-meta">
                <div class="card-tags">${tagsHtml}</div>
            </div>
        </div>
    `;
}

function attachEventListeners() {
    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            toggleFilter(filter);
        });
    });
}

// ==========================================
// 4. INTERACTION LOGIC
// ==========================================
function toggleItem(key, el) {
    if (recognized.has(key)) {
        recognized.delete(key);
        el.classList.remove('selected', 'layer-U', 'layer-M', 'layer-E', 'layer-none');
        el.querySelector('.card-icon').innerHTML = ''; // Changed from card-check to card-icon
    } else {
        recognized.add(key);
        const tags = el.dataset.tags.split(',');
        const layer = tags[0] ? `layer-${tags[0]}` : 'layer-none';
        el.classList.add('selected', layer);
        el.querySelector('.card-icon').innerHTML = '✓'; // Changed from card-check to card-icon
    }
    updateProgress();
}

function toggleFilter(filter) {
    activeFilter = filter;
    const buttons = document.querySelectorAll('.filter-btn');
    const container = document.getElementById('domains-container');
    const cards = document.querySelectorAll('.item-card');

    buttons.forEach(b => {
        b.classList.remove('active', 'U', 'M', 'E');
        if (b.dataset.filter === filter) {
            b.classList.add('active');
            if (filter !== 'all') b.classList.add(filter);
        }
    });

    if (filter === 'all') {
        container.classList.remove('filtering', 'filter-U', 'filter-M', 'filter-E');
        cards.forEach(card => card.classList.remove('highlight'));
    } else {
        container.className = `domains-container filtering filter-${filter}`;
        cards.forEach(card => {
            const tags = card.dataset.tags.split(',');
            if (tags.includes(filter)) {
                card.classList.add('highlight');
            } else {
                card.classList.remove('highlight');
            }
        });
    }
}

function updateProgress() {
    const s = getStats();
    
    // Count exact tags of recognized items
    const tagRec = { U: 0, M: 0, E: 0 };
    recognized.forEach(key => {
        const p = key.split('-');
        const item = p[0] === 'c' ? DOMAINS[p[1]].challenges[p[2]] : DOMAINS[p[1]].strengths[p[2]];
        item.tags.forEach(t => { if (tagRec[t] !== undefined) tagRec[t]++; });
    });

    document.getElementById('mp-total').textContent = recognized.size;
    
    ['U', 'M', 'E'].forEach(t => {
        const pct = TAG_TOTALS[t] ? Math.round((tagRec[t] / TAG_TOTALS[t]) * 100) : 0;
        document.getElementById(`fill-${t}`).style.width = `${pct}%`;
        document.getElementById(`ct-${t}`).textContent = tagRec[t];
    });

    const btn = document.getElementById('view-profile-btn');
    const tabProfile = document.getElementById('tab-profile');
    if (recognized.size >= 3) {
        btn.disabled = false;
        btn.textContent = "Analyseer profiel →";
        tabProfile.disabled = false;
    } else {
        btn.disabled = true;
        btn.textContent = `Vink nog ${3 - recognized.size} items aan...`;
        tabProfile.disabled = true;
    }
}

function showPage(pageId, tabEl) {
    if (tabEl.disabled) return;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');

    window.scrollTo(0, 0);

    if (pageId === 'profile') {
        renderProfile();
    }
}

// ==========================================
// 6. TOOLTIP LOGIC
// ==========================================
function showTooltip(e, key) {
    const parts = key.split('-');
    const type = parts[0] === 'c' ? 'challenges' : 'strengths';
    const dIdx = parseInt(parts[1]);
    const iIdx = parseInt(parts[2]);
    const item = DOMAINS[dIdx][type][iIdx];

    const tooltip = document.getElementById('tooltip');
    
    document.getElementById('tooltip-title').textContent = item.text;
    
    const tagsContainer = document.getElementById('tooltip-tags');
    tagsContainer.innerHTML = '';
    item.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = `tag ${t}`;
        span.textContent = t;
        tagsContainer.appendChild(span);
    });

    let explanation = `<strong>Wat betekent dit in de praktijk?</strong><br><br>`;
    if (item.desc) explanation += item.desc;
    else explanation += "Dit is een specifiek kenmerk van jouw focusprofiel.";
    
    let tip = `<strong>Tip voor de begeleider of netwerk:</strong><br><br>`;
    if (item.tags.includes('U')) tip += "Wees je bewust dat gedrag vaak een onbewuste uiting is. Corrigeer niet meteen, maar vraag wat er aan de hand is.<br>";
    if (item.tags.includes('M')) tip += "Bied structuur aan, maar laat ruimte voor de eigen manier van denken. Zorg voor duidelijke afspraken.<br>";
    if (item.tags.includes('E')) tip += "Erken de intensiteit van de emotie vóór je overgaat op de feiten. Gevoel mag er zijn.<br>";
    if (item.tags.length === 0) tip += "Onderzoek samen met de cliënt openhartig en zonder oordeel wat dit precies betekent en hoe dit landt in de omgeving.<br>";

    document.getElementById('tooltip-body').innerHTML = explanation + "<br><hr style='border:0;border-top:1px solid #e2e8f0;margin:15px 0;'/>" + tip;

    tooltip.style.display = 'block';

    const cardRect = e.currentTarget.getBoundingClientRect();
    let top = cardRect.top;
    let left = cardRect.right + 15;

    // Adjust if tooltip overflows right edge
    if (left + 320 > window.innerWidth) {
        left = cardRect.left - 320 - 15;
    }
    
    // Use requestAnimationFrame to let the browser compute layout, then adjust height
    requestAnimationFrame(() => {
        let tHeight = tooltip.offsetHeight;
        if (top + tHeight > window.innerHeight) {
            top = window.innerHeight - tHeight - 15;
        }
        if (top < 15) top = 15;
        
        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
        tooltip.classList.add('show');
    });
}

let hideTimeout;
function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('show');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        if (!tooltip.classList.contains('show')) tooltip.style.display = 'none';
    }, 200);
}

// ==========================================
// 5. PROFILE GENERATION (V2 Logic)
// ==========================================
function getStats() {
    let chE = 0, chM = 0, chU = 0, stE = 0, stM = 0, stU = 0, totalCh = 0, totalSt = 0;
    let addictionRec = false, emotionTruth = false;
    const domainScores = [{ ch: 0, st: 0 }, { ch: 0, st: 0 }, { ch: 0, st: 0 }];

    recognized.forEach(key => {
        const p = key.split('-');
        const isCh = p[0] === 'c';
        const di = parseInt(p[1]);
        const item = isCh ? DOMAINS[di].challenges[p[2]] : DOMAINS[di].strengths[p[2]];
        
        if (isCh) { totalCh++; domainScores[di].ch++; }
        else { totalSt++; domainScores[di].st++; }
        
        item.tags.forEach(t => {
            if (t === 'U') { if (isCh) chU++; else stU++; }
            if (t === 'M') { if (isCh) chM++; else stM++; }
            if (t === 'E') { if (isCh) chE++; else stE++; }
        });

        if (item.text.includes('verslavingsgevoelig')) addictionRec = true;
        if (item.text.includes('sterk voel')) emotionTruth = true;
    });
    return { chE, chM, chU, stE, stM, stU, totalCh, totalSt, domainScores, addictionRec, emotionTruth };
}

function renderProfile() {
    if (recognized.size < 3) return; // Guard
    
    const stats = getStats();
    
    // 1. Radar Chart
    const radarSvg = drawRadar(stats);

    // 2. Balans (Uitdaging vs Sterkte per Domein U/M/E)
    const dimRows = ['U', 'M', 'E'].map(t => {
        const chVal = t === 'U' ? stats.chU : t === 'M' ? stats.chM : stats.chE;
        const stVal = t === 'U' ? stats.stU : t === 'M' ? stats.stM : stats.stE;
        const dTotal = chVal + stVal || 1;
        const stPct = Math.round((stVal / dTotal) * 100);
        const color = t === 'U' ? 'var(--color-u)' : t === 'M' ? 'var(--color-m)' : 'var(--color-e)';
        const label = t === 'U' ? 'Uiterlijk (Gedrag)' : t === 'M' ? 'Mentaal (Denken)' : 'Emotioneel (Voelen)';
        
        return `
            <div class="balance-row">
                <div class="balance-label"><span style="color:${color}">${t} — ${label}</span><span>${stPct}% sterktes</span></div>
                <div class="balance-bar"><div class="balance-inner" style="width:${stPct}%;background:${color}"></div><div class="balance-marker"></div></div>
            </div>`;
    }).join('');

    // Insight Box (If 0 strengths in a highly challenged dimension)
    let insightText = '';
    const minDim = ['U', 'M', 'E'].reduce((a, t) => {
        const v = t === 'U' ? stats.stU : t === 'M' ? stats.stM : stats.stE;
        return v < a.v ? { t, v } : a;
    }, { t: '', v: 999 });

    if (minDim.v === 0 && stats.totalCh >= 3) {
        const lbl = minDim.t === 'U' ? 'uiterlijke' : minDim.t === 'M' ? 'mentale' : 'emotionele';
        insightText = `<div class="insight-box"><p><strong>Let op:</strong> Je herkende geen sterktes in de <strong>${lbl}</strong> dimensie. Dat betekent niet dat ze er niet zijn — sterktes rondom een focusprofiel worden vaak als 'gewoon' beschouwd of over het hoofd gezien.</p></div>`;
    }

    // 3. Conclusies genereren
    const cBlocks = generateConclusion(stats);
    const cBlocksHtml = cBlocks.map(b => `
        <div class="c-block${b.highlight ? ' highlight' : ''}">
            <div class="c-title-row"><div class="c-block-icon">${b.icon}</div><div class="c-block-title">${b.title}</div></div>
            <div class="c-block-text">${b.text}</div>
        </div>`).join('');

    // 4. Reflectie Vragen
    const reflections = selectReflections(stats);
    const reflectHtml = reflections.map(q => `
        <div class="reflect-card">
            <div class="rc-tag ${q.tag}">${q.tag === 'U' ? 'Uiterlijk' : q.tag === 'M' ? 'Mentaal' : 'Emotioneel'} Focus</div>
            <div class="rc-q">${q.q}</div>
            ${q.hint ? `<div class="rc-hint">💡 ${q.hint}</div>` : ''}
            <textarea placeholder="Schrijf hier je gedachten..."></textarea>
        </div>`).join('');

    // Mount to DOM
    document.getElementById('profile-content').innerHTML = `
        <div class="profile-grid">
            <div class="radar-wrap">
                <h3>Jouw Focusprofiel Landschap</h3>
                <div class="sub">Verdeling van jouw eigenschappen</div>
                ${radarSvg}
            </div>
            <div class="balance-panel">
                <h3>Uitdaging vs. Sterkte</h3>
                <div class="sub">Balans binnen de drie systemen</div>
                ${dimRows}
                ${insightText}
            </div>
        </div>
        
        <div class="conclusion-container">
            <h3 class="section-title">Analyse & Handvatten</h3>
            <div class="conclusion-blocks">
                ${cBlocksHtml}
            </div>
        </div>

        <div class="reflect-section">
            <h3 class="section-title">Ruimte voor Reflectie</h3>
            <p class="sub">Neem even de tijd voor deze specifieke vragen op basis van jouw profiel.</p>
            <div class="reflect-cards">
                ${reflectHtml}
            </div>
        </div>
    `;
}

function drawRadar(stats) {
    const dims = [
        { label: 'Uitdaging Emotioneel', val: stats.chE, max: 8, color: '#ed64a6', angle: -90 },
        { label: 'Uitdaging Mentaal', val: stats.chM, max: 10, color: '#48bb78', angle: -90 + 60 },
        { label: 'Uitdaging Uiterlijk', val: stats.chU, max: 8, color: '#4299e1', angle: -90 + 120 },
        { label: 'Sterktes Uiterlijk', val: stats.stU, max: 6, color: '#4299e1', angle: -90 + 180 },
        { label: 'Sterktes Mentaal', val: stats.stM, max: 9, color: '#48bb78', angle: -90 + 240 },
        { label: 'Sterktes Emotioneel', val: stats.stE, max: 7, color: '#ed64a6', angle: -90 + 300 },
    ];

    const cx = 130, cy = 130, r = 90;
    const toRad = d => d * Math.PI / 180;
    const pt = (angle, dist) => [ cx + dist * Math.cos(toRad(angle)), cy + dist * Math.sin(toRad(angle)) ];

    let gridSvg = '';
    [0.25, 0.5, 0.75, 1].forEach(frac => {
        const pts = dims.map(d => pt(d.angle, frac * r));
        gridSvg += `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#e2e8f0" stroke-width="1"/>`;
    });

    dims.forEach(d => {
        const [x, y] = pt(d.angle, r);
        gridSvg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`;
    });

    const dataPts = dims.map(d => pt(d.angle, d.max ? Math.min(d.val / d.max, 1) * r : 0));
    const polyPts = dataPts.map(p => p.join(',')).join(' ');

    let labelSvg = '';
    dims.forEach((d, i) => {
        const [x, y] = pt(d.angle, r + 20);
        labelSvg += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="#718096">${d.label}</text>`;
        const [dx, dy] = dataPts[i];
        if (d.val > 0) labelSvg += `<circle cx="${dx}" cy="${dy}" r="4" fill="${d.color}"/>`;
    });

    return `
    <svg viewBox="0 0 260 260" width="100%" height="240" style="max-width: 300px;">
        ${gridSvg}
        <polygon class="data-poly" points="${polyPts}" fill="#4299e1" stroke="#2b6cb0" stroke-width="2"/>
        ${labelSvg}
        <circle cx="${cx}" cy="${cy}" r="3" fill="#cbd5e0"/>
    </svg>`;
}

function generateConclusion(stats) {
    const blocks = [];
    const total = stats.totalCh + stats.totalSt;
    const stRatio = total > 0 ? stats.totalSt / total : 0;

    let type = 0;
    if (stats.chE > stats.chM && stats.chE > stats.chU && stats.chE >= 3) {
        type = 1;
    } else if (stRatio > 0.45 && (stats.chM > 0 || stats.chE > 0) && stats.addictionRec) {
        type = 2;
    } else if (stats.chM > stats.chE && stats.chM > stats.chU && stats.chM >= 3 && stRatio < 0.35) {
        type = 3;
    } else if (stats.chU > stats.chM && stats.chU > stats.chE && stats.chU >= 3) {
        type = 4;
    } else {
        const maxCh = Math.max(stats.chE, Math.max(stats.chM, stats.chU));
        if (maxCh === stats.chE) type = 1;      // Favour Emotion if tied with others usually
        else if (maxCh === stats.chM) type = 3;
        else type = 4;
    }

    // Save globally for selectReflections
    window.currentProfileType = type;

    const typeConfig = {
        1: {
            name: "De Emotionele Navigator",
            desc: "Jij beleeft de wereld door een filter van intense emoties en diepgaande voelsprieten. Dingen komen bij jou vaak direct en ongefilterd binnen, waardoor je situaties sterk aanvoelt maar ook sneller overweldigd raakt.",
            focus: ["Geef prioriteit aan het erkennen van je emoties vóór je probeert oplossingen te zoeken.", "Oefen vaardigheden om hevige pieken op te vangen (zoals ademhaling of koude prikkels) zonder jezelf erin te verliezen.", "Wees zacht voor jezelf wanneer je oordeel over jezelf streng is."],
            risk: "Het is heel begrijpelijk dat middelen soms als de enige uitweg voelen om de intensiteit van uitputtende emoties te dempen of de scherpe randjes van afwijzing te verzachten.",
            growth: "Van overweldiging naar het inzetten van je diepe empathie als gids."
        },
        2: {
            name: "De Visionaire Katalysator",
            desc: "Jouw profiel toont een enorme potentie vol creativiteit, energie en out-of-the-box denken. Jouw brein functioneert als een snelle motor die weigert te rijden voor saaie klusjes, maar accelereert wanneer het iets interessants ontdekt.",
            focus: ["Zoek bewust de 'right difficult' op: uitdagingen die net moeilijk genoeg zijn om je brein vast te houden.", "Zorg dat je energie een constructieve uitweg vindt in projecten of hobby's.", "Bouw buffer-momenten in om niet op te branden na een fase van hyperfocus."],
            risk: "Middelen worden door jouw brein niet zozeer gebruikt om pijn te verdoven, maar eerder als krachtige brandstof tegen onderstimulatie of verveling om weer 'AAN' te staan.",
            growth: "Van een ongeleid projectiel naar een doelgerichte motor die zijn eigen brandstof kiest."
        },
        3: {
            name: "De Gestrande Denker",
            desc: "Jij bezit een scherp verstand en veel potentieel, maar je loopt vaak vast op de uitvoering. Het lijkt alsof er in je hoofd mist hangt of onzichtbare drempels liggen waardoor beginnen, plannen en afwerken enorm veel energie kosten.",
            focus: ["Leun tijdelijk op externe structuur: wekkers, samen werken met anderen, of hulp bij de eerste stapjes.", "Ontlast je werkgeheugen maximaal; schrijf alles van je af (cognitieve protheses).", "Verbreek de chronische schaamtecyclus over wat nog 'moest', door microscopisch kleine positieve stappen te waarderen."],
            risk: "Het is volkomen logisch dat middelen aantrekkelijk zijn wanneer ze beloven die mentale mist even te laten optrekken of de blokkade tot actie te doorbreken.",
            growth: "Van 'alles moeten doen' naar het slim omzeilen van jouw eigen blokkades met externe hulp."
        },
        4: {
            name: "De Expressieve Rebellent",
            desc: "Jij bent een doener die reageert in het moment. Vaak gaat je gedrag of waarneming sneller dan je bewuste gedachten. Dat maakt je daadkrachtig, maar zorgt er ook voor dat je vaker botst met regels of verwachtingen voordat je de kans had om te remmen.",
            focus: ["Experimenteer met het inbouwen van een 'stop-seconde' tussen externe prikkel en jouw reactie.", "Zoek omgevingen waar jouw daadkracht en vuur gewaardeerd worden in plaats van afgestraft.", "Stel directe en heldere consequenties op voor jezelf, want een beloning ver in de toekomst voelt te abstract."],
            risk: "Jouw dopaminesysteem neigt logischerwijs naar onmiddellijke actie, waardoor middelengebruik of impulsieve beslissingen snel en zonder veel remming kunnen plaatsvinden.",
            growth: "Van ongeremde actie naar de bewuste sturing van je natuurlijke vuurkracht."
        }
    };

    const cData = typeConfig[type];

    // 1. Profielnaam
    blocks.push({ icon: "🎯", title: cData.name, text: cData.desc, highlight: true });

    // 2. Hoe jouw drie dimensies samenwerken
    const dimSamenwerking = `Jouw profiel toont <strong>${stats.chU + stats.stU}</strong> uiterlijke, <strong>${stats.chM + stats.stM}</strong> mentale en <strong>${stats.chE + stats.stE}</strong> emotionele kenmerken. ` +
        (type === 1 ? `De emotionele belevingswereld deelt hier duidelijk de lakens uit: jouw overleggende denkkant en gedrag worden doorgaans sterk beïnvloed en aangestuurd door wat je op dat moment intens ervaart.` :
        (type === 2 ? `De relatief hoge mate van sterktes in jouw profiel toont aan dat jouw mentale en emotionele vuurkracht elkaar wederzijds versterken. Je systeem is uitermate flexibel en bedreven als het wordt geboeid.` :
        (type === 3 ? `Omdat de mentale uitdagingen en interne worstelingen domineren, raken je energie en focus vaak op in je hoofd vóór ze goed en wel vertaald konden worden naar de werkelijkheid.` :
        `Jouw hoge score in zichtbare dynamiek wijst erop dat jouw motorische insteek het vaak wint van gereserveerde overwegingen: actie komt vóór gedachte.`)));
    blocks.push({ icon: "⚙️", title: "Hoe alles in jouw brein samenwerkt", text: dimSamenwerking, highlight: false });

    // 3. Domeinanalyse
    let maxDomain = 0; let maxCh = -1;
    stats.domainScores.forEach((s, idx) => { if (s.ch > maxCh) { maxCh = s.ch; maxDomain = idx; } });
    let domText = "";
    if (maxDomain === 0) domText = maxCh >= 4 ? "Ontwikkeling en de basisvaardigheden in je dagelijks gestructureerd leven vormen een groot aandeel van de energie, wat betekent dat routines flink onder druk staan." : "Binnen je persoonlijke ontwikkeling en routines lijken zaken naar verhouding beheersbaarder en vallen de acute belemmeringen best mee.";
    else if (maxDomain === 1) domText = maxCh >= 4 ? "Sociale contexten, verhoudingen met anderen en de grenzen daarbinnen zorgen voor aanzienlijk frictie, wat doorwerkt in jouw energiepeil en zelfbeeld." : "In relaties en sociale wisselwerking met anderen draai je relatief makkelijk mee zonder overweldigende belemmeringen.";
    else domText = maxCh >= 4 ? "Jouw rijke interne leefwereld en uitvoerende functies botsen hard. Het managen van eigen gedachten en motivatie weegt zwaar en eist het leeuwendeel van jouw energie op." : "Je weet jezelf mentaal redelijk op koers te houden; jouw kerndynamiek zit niet in onzichtbare interne opstoppingen, maar eerder daarbuiten.";

    blocks.push({ icon: "🔍", title: "Domeinanalyse " + ["(Ontwikkeling)", "(Relaties en sociaal)", "(Mentale Leefwereld)"][maxDomain], text: domText, highlight: false });

    // 4. Begeleidingsfocus
    let focusHtml = cData.focus.map(f => `<li>${f}</li>`).join('');
    blocks.push({ icon: "🧭", title: "Wat jou vooruit helpt (Focuspunten)", text: `<ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6;">${focusHtml}</ul>`, highlight: false });

    // 5. Risicosignaal
    if (stats.addictionRec || stats.chE >= 3) {
        blocks.push({ icon: "⚠️", title: "Prikkels & Gebruik", text: cData.risk, highlight: false });
    }

    // 6. Groeivector
    blocks.push({ icon: "🌱", title: "Jouw Groeivector", text: `<strong style="color: var(--color-m);">Doel:</strong> ${cData.growth}`, highlight: false });

    return blocks;
}

function selectReflections(stats) {
    const type = window.currentProfileType || 1;
    const q = [];
    
    // Type 1: E_challenge, social_challenge, blind_spot
    if (type === 1) {
        if (REFLECT_BANK.E_challenge.length > 0) q.push(REFLECT_BANK.E_challenge[0]);
        if (REFLECT_BANK.social_challenge.length > 0) q.push(REFLECT_BANK.social_challenge[0]);
        if (REFLECT_BANK.blind_spot.length > 0) q.push(REFLECT_BANK.blind_spot[0]);
    }
    // Type 2: M_strength, addiction, generic
    else if (type === 2) {
        if (REFLECT_BANK.M_strength.length > 0) q.push(REFLECT_BANK.M_strength[0]);
        if (stats.addictionRec && REFLECT_BANK.addiction.length > 0) q.push(REFLECT_BANK.addiction[0]);
        if (REFLECT_BANK.generic.length > 0) q.push(REFLECT_BANK.generic[0]);
    }
    // Type 3: M_challenge[1] (zelfkritiek), blind_spot, M_challenge[0]
    else if (type === 3) {
        if (REFLECT_BANK.M_challenge.length > 1) q.push(REFLECT_BANK.M_challenge[1]);
        if (REFLECT_BANK.blind_spot.length > 0) q.push(REFLECT_BANK.blind_spot[0]);
        if (REFLECT_BANK.M_challenge.length > 0) q.push(REFLECT_BANK.M_challenge[0]);
    }
    // Type 4: U_challenge, social_challenge, E_challenge
    else if (type === 4) {
        if (REFLECT_BANK.U_challenge.length > 0) q.push(REFLECT_BANK.U_challenge[0]);
        if (REFLECT_BANK.social_challenge.length > 0) q.push(REFLECT_BANK.social_challenge[0]);
        if (REFLECT_BANK.E_challenge.length > 0) q.push(REFLECT_BANK.E_challenge[0]);
    }

    // Fill up to 3 with generic if missing
    let i = 0;
    while(q.length < 3 && i < REFLECT_BANK.generic.length) {
        if (!q.includes(REFLECT_BANK.generic[i])) q.push(REFLECT_BANK.generic[i]);
        i++;
    }

    return q.slice(0, 3);
}

// Start
init();
