

                    /*                                                 */
                                /* JavaScriptsheelt Arbeiter */
                               /* Michael Venetz Juni 2022 */
                    /*                       I.O.                          */



// Arbeiter estellen
class ListenArbeiterKenntnisse{

    // Funktion erzeuge Liste
        erzeugeListe(listenAuftrag){
    // Konstante "listenContainer" füllen mit allen Elementen die eine Klasse und ein <span> haben.
            const listenContainer = document.querySelector("."+listenAuftrag.containerKlasse+" > span");
    // Erzeugt <p> Elemente von listenAuftrag.daten im listenContainer
            this.erzeugePListeAusDaten(listenAuftrag.daten, listenContainer);
        }
    // Funktion erzeugeListeAusPElement mnit daten in Container
        erzeugePListeAusDaten(daten, container) {
    // For-schleife variabel eintrag von Daten
            for(let eintrag of daten){
    // Trägt p elemente in Liste ein
                container.appendChild(this.erzeugePElement(eintrag));
            }
        }
    
    
         // // Hiermit wird neues p Element erzeugt
            // Funktion P Elemente 
                erzeugePElement(inhalt){
            // Konstante pElement ist gleich erstelle <p> Element       
                    const pElement = document.createElement("p");
            // vor <p> Element - und lücke schreiben dan inhalt von pElement
                    pElement.innerHTML = inhalt;
            // Rückgabe von pElement
                    return pElement;
                }
    }
    
    
    document.addEventListener("DOMContentLoaded", (event) => {
        const kontaktListenAuftrag = {
            daten: [ 
                "Herr",
                "Julius Meinhof",
                "Tel: +41 78 971 50 31",
                "E-Mail: julius@meinhof.ch"
            ],
    
            containerKlasse: "kontakt",
        };

        
        const adressListenAuftrag = {
            daten: [ 
                "Grisigenstrasse 12",
                "6048 Horw",
                "Luzern",
                "Schweiz (CH)"
            ],
    
            containerKlasse: "adress",
        };

        

       
       
    
        const arbeiter = new ListenArbeiterKenntnisse();
            arbeiter.erzeugeListe(kontaktListenAuftrag);
            arbeiter.erzeugeListe(adressListenAuftrag);
    });
    