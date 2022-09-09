
                    /*                                                 */
                                /* JavaScript Arbeiter */
                               /* Michael Venetz Juni 2022 */
                    /*                       I.O.                          */

                class textArbeiter{

                    erzeugeText(textAuftrag){

                        const textConainer = document.querySelector("."+textAuftrag.containerKlasse+" > span");
                            this.erzeugePTextAusDaten(textAuftrag.daten, textConainer);
                            console.log(textConainer);
                    }

                        erzeugePTextAusDaten(daten, container){

                            for(let eintrag of daten){
                                container.appendChild(this.erzeugePElement(eintrag));
                            }
                        }
                     
                            erzeugePElement(inhalt){
                        
                                const pElement = document.createElement("p");
                                pElement.innerHTML = inhalt;
                                return pElement;
                            }
                }


                document.addEventListener("DOMContentLoaded", (event) => {
            
                    const aboutTextAuftrag = {
                        daten: [ 
                            "Bei unserer Innenarchitektur stehen die Sinne des Menschen, welcher die fertigen Räumlichkeiten betritt an erster Stelle. Alle verwendeten Materialien streben darauf, die Sinne Anzuregen. Bei unserer Innenarchitektur stehen die Sinne des Menschen, welcher die fertigen Räumlichkeiten betritt an erster Stelle. Alle verwendeten Materialien streben darauf, die Sinne Anzuregen. Bei unserer Innenarchitektur stehen die Sinne des Menschen, welcher die fertigen Räumlichkeiten betritt an erster Stelle. Alle verwendeten Materialien streben darauf, die Sinne Anzuregen.",
                           
                        ],
                
                        containerKlasse: "about",
                    };

                    const funktionalitaetTextAuftrag = {
                        daten: [ 
                            "Diese Zwei Wörter vereinen den Begriff des Innenarchitekten. Wir sehen es alles den Schlüssel unser Arbeit, diese zwei Begriffe in unserem Innenausbau zu vereinen."
                           
                        ],
                
                        containerKlasse: "funktionalitaet",
                    };

                    const individualitaetTextAuftrag = {
                        daten: [ 
                            "Jeder Mensch ist Individuell. Daher hat auch jeder andere Ansprüche, Wünsche und Bedürfnisse die wir mit unserer Innenarchitektur befriedigen wollen."
                           
                        ],
                
                        containerKlasse: "individualitaet",
                    };

                    const qualitaetTextAuftrag = {
                        daten: [ 
                            "Jeder Mensch ist Individuell. Daher hat auch jeder andere Ansprüche, Wünsche und Bedürfnisse die wir mit unserer Innenarchitektur befriedigen wollen."
                           
                        ],
                
                        containerKlasse: "qualitaet",
                    };
            
                        const arbeiter = new textArbeiter();
                            arbeiter.erzeugeText(aboutTextAuftrag);
                            arbeiter.erzeugeText(funktionalitaetTextAuftrag);
                            arbeiter.erzeugeText(individualitaetTextAuftrag);
                            arbeiter.erzeugeText(qualitaetTextAuftrag);
                });
