# Analyse & Conceptueel Voorstel: Digitaal ADHD Model (De Kiem)

## 1. Huidige Structuur & Inhoud (Analyse)

Het huidige papieren model is een matrix die de relatie toont tussen **oorzaken** (processen/kenmerken) en **gevolgen** (uitdagingen en sterktes), ingedeeld in specifieke **levensdomeinen**. Tot slot is er een overkoepelende **conclusie**.

### De Oorzaken (De "Bron")
Aan de linkerkant staan drie hoofdcategorieën met bijbehorende iconen. Deze hebben invloed op het gedrag:
- **(U) Uiterlijke kenmerken**
- **(M) Mentale processen**
- **(E) Emotionele processen**

*Elke uitdaging of sterkte in het model heeft een letter (U, M of E) die terugverwijst naar deze drie categorieën.*

### De Gevolgen & Domeinen
Deze oorzaken leiden tot zowel **Uitdagingen** als **Sterktes** over drie levensdomeinen:

#### Domein 1: Ontwikkeling
* **Uitdagingen**: Aangesproken worden op gedrag (U), Intentie ≠ gedrag (U), Geen controle over gedrag (U), Moeite met aanpassen (U), Moeilijkheden op school/structuur (M), Radicaal/zwart-wit/impulsief (M), Reageren uit emotionele onrust (E), Moeite met emoties uiten/begrijpen (E).
* **Sterktes**: Voelen veel emoties (E), Emotionele intensiteit (E), Vurige passies (E), Authenticiteit (M), Sterk visueel/non-verbaal (M), Veerkracht/doorzettingsvermogen (M).

#### Domein 2: Relaties en sociale aspecten
* **Uitdagingen**: Niet begrepen worden/voelen door anderen (E), Emotionele overspoeling in interactie (E), Grenzen opzoeken van zichzelf en anderen (U, E, M), Invloed van eigen gedrag op omgeving niet doorhebben, Egocentrisch/ongeïnteresseerd overkomen (M), Snel uitgekeken op vrienden (E, M), Grote waarde aan wat andere denken (E).
* **Sterktes**: Empathisch (E), Groot rechtvaardigheidsgevoel (E), Direct en eerlijk (U), Verbaal sterk (U).

#### Domein 3: Mentale en persoonlijke leefwereld
* **Uitdagingen**: Geen gevoel van impact op omgeving, Lastig om gemotiveerd te blijven (M), Laag zelfbeeld door falen moeilijk te kunnen verwerken (E, M), Zelfkritisch (M), Continue stimulatie nodig (M), Verslavingsgevoeligheid, Uitgestelde behoeftebevrediging (M), Emotie = waarheid.
* **Sterktes**: Sterke intuïtie (E), Energie en enthousiasme (E, U), Out-of-the-box denken, creativiteit (M), Snel associatief denken (M), Flexibiliteit (M), Doelgerichtheid, hyperfocus (M).

### De Conclusie (Actiepunten)
- Ruimte maken voor andere denkkaders, Cognities en schema's uitdagen
- Leren verwerken van emoties
- Leren werken met structuur
- Zichzelf aanvaarden en zichzelf leren zijn

---

## 2. Mogelijkheden voor Digitalisatie & Interactiviteit

Dit model is extreem geschikt voor een interactieve (web)applicatie. De kracht zit in de **verborgen verbindingen** (U, M, E) die op papier statisch zijn, maar in een app dynamisch gemaakt kunnen worden. 

Hier zijn enkele concepten om dit visueel en interactief te maken:

### Concept 1: Interactief Oplichtende Verbindingen (De "Aha!" -ervaring)
Wanneer een cliënt samen met de begeleider de app bekijkt, kunnen ze op een van de drie bronnen klikken (bijv. "Mentale processen"). Direct lichten alle uitdagingen en sterktes in het overzicht met een (M) op. 
* **Waarom?** Het maakt direct zichtbaar hoeveel impact één mentaal proces heeft over alle levensdomeinen heen. Andersom kan men op een specifiek probleem zoals "Snel uitgekeken op vrienden" klikken, waarna de app toont dat dit voortkomt uit zowel Emotionele als Mentale processen.

### Concept 2: De "Zelfscan" & Profiel Builder
Maak er een ontdekkingstocht van:
1. De cliënt krijgt een stapel "kaarten" (Tinder-stijl of gewoon een selectielijst) met alle uitdagingen en sterktes.
2. Ze selecteren wat zij in hun eigen leven herkennen.
3. Aan het einde genereert de app hun **Persoonlijke ADHD Landschap**. Dit laat visueel zien of hun vorm van ADHD zich vandaag meer uit in de uiterlijke, mentale of emotionele processen. En het belicht direct hun persoonlijke sterktes!

### Concept 3: Diepere Uitleg & Concrete Voorbeelden (Gelaagdheid)
Op papier is er geen ruimte voor uitleg. In een web-app kan elk punt een klikbare knop zijn.
Klik je op *"Intentie is niet hetzelfde als gedrag (U)"*, dan opent een pop-up (modal) met:
* **Wat betekent dit?** (Een toegankelijke uitleg)
* **Voorbeeld uit de praktijk** (Bijv: "Je wilde echt op tijd komen voor de afspraak, maar doordat je je sleutels kwijt was leek het alsof het je niets kon schelen.")
* **Tip voor de cliënt / Tip voor de begeleider**

### Concept 4: Filteren per Sessie
Tijdens een begeleidingssessie wil je soms focussen op 1 thema. 
In de app kan je filteren: "Toon vandaag alleen *Relaties en sociale aspecten*". Of "Toon vandaag alleen de *Sterktes*, want de cliënt heeft een zware week gehad."

### Concept 5: Dynamische Conclusies/Actieplan
De 4 conclusies onderaan kunnen zich aanpassen aan de geselecteerde uitdagingen. Herkent de cliënt zich vooral in de emotionele uitdagingen? Dan wordt *"Leren verwerken van emoties"* speciaal uitgelicht en vergezeld van specifieke vervolgstappen.

---

## 3. Voorstel voor Technologie / Uitvoering

We kunnen vrij snel een **prototype web-applicatie** bouwen om dit tastbaar te maken:
* **Technologie**: HTML, CSS, Javascript of React (als je het eventueel nog wil uitbreiden). Voor nu is een simpele "Single Page App" ideaal.
* **Design**: Een rustige, verfijnde interface die "clean" en modern aanvoelt. Denk aan soepele overgangen (micro-animaties), en zachte kleurcoderingen voor (U), (M) en (E). Geen drukke, overweldigende prikkels, wat past bij de doelgroep.
* **Platform**: Responsive, dus werkt perfect op de smartphone van de cliënt en op het scherm van de begeleider.
