let oeuvres = [
{"titre" : "Salle 1", "illustration" : "", "artiste" : "", "date" : "", "description" : "Dans la critique du magazine Frieze, cette première salle est traité selon un discours &quot;humoristique sur le démembrement et le déplacement du corps humain&quot;.  ", "exposition" : 6},
{"titre" : "Untitled (Go-go Dancing Platform), œuvre en situation de performance", "illustration" : "http://78.media.tumblr.com/tumblr_macf2dAiGJ1qggdq1.jpg", "artiste" : "Felix Gonzales-Torres", "date" : "1991", "description" : "","exposition" : 3, "salle" : "1"}, 
{"titre" : "311-B, 331-B, 332-B, 354-P, 355-P, œuvre par terre, telles que présentées à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-19_b.jpg", "artiste" : "Taro Chiezo", "date" : "1991-92", "exposition" : 3, "salle" : "1"},
{"titre" : "Two Spread Legs", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%289%29.jpg", "artiste" : "Robert Gober", "date" : "1991", "description" : "Pour Deitch, Gober provoque le spectateur dans cette œuvre en lui donnant une sensation d'étrangeté. ", "exposition" : 5, "salle" : "1"},

{"titre" : "Salle 1a, 1b, 1c, 1d", "illustration" : "", "artiste" : "", "date" : "", "description" : "Dans ces trois alcoves, le corps humain est mis en scène, non de façon réaliste mais trop grand, trop petit, à l'envers. Comme une thématique précise. Bien que figuratives ces sculptures par leur étrangeté, semble plutôt signifier l'absence du corps et de la figure humaine que sa présence.", "exposition" : 6},
{"titre" : "Untitled (Lilac Women)", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-8_b.jpg", "artiste" : "Pia Stadtbaümer", "date" : "1991", "description": "Dans <i>Lilac Woman</i>, Pia Stadtbäumer sculpte un corps de femme aux dimensions réalistes (elle mesure 166cm). L'étrangeté réside dans sa présentation tête en bas et la couleur violette de cette sculpture.", "exposition" : 2, "salle" : "1a"},
{"titre" : "Airport (Frankfurt, Delta)", "illustration" : "https://media.mutualart.com/Images/2011_11/22/22/224113513/17a96294-9a8d-444c-a024-200ce729b0ad_570.Jpeg", "artiste" : "Fischli / Weiss", "description": "Dans ces travaux d'aéroport Fischli et Weiss la notion de non-lieu semble présente. Rem Koolhaas écrivait ainsi sur la <i>Generic City</i>(Sikkens Foundation, Amsterdam, 1995) et les aéroport comme &quot;non-lieu de la surmodernité&quot;", "date" : "1989", "exposition" : 0, "salle" : "1b"},
{"titre" : "4 Stewardesses", "illustration" : "http://www.artnet.com/WebServices/images/ll00427lldDkMJFgUNECfDrCWvaHBOcPK3E/peter-fischli-and-david-weiss-4-hostessen-(4-stewardesses).jpg", "artiste" : "Fischli / Weiss", "description": "<i>Les hôtesses de l'air</i> ont gardé la couleur blanche du plâtre dont elles sont faîtes. Anonymisées, elles semblent être les figures par excellence de cette surmodernité que présente Rem Koolhaas. Ce sont les personnages qui n'appartiennent qu'au déplacement, au transit.", "date" : "1988", "exposition" : 0, "salle" : "1b"},
{"titre" : "Man under a Toadstool", "illustration" : "", "artiste" : "Stephan Balkenhol", "description": "Ici, l'être humain se confond avec la nature, les sculptures faîtes de bois sont légérement peintes mais le matériaux reste présent. Au travers de son &quot;manifeste cyborg&quot; Donna Haraway, parle d'une figure se trouvant entre l'homme et la machine, l'homme et l'animal, l'homme et la femme, c'est ce point de vue qui semble mis en scène par Deitch dans la présentation de cette sculpture.", "date" : "1991", "exposition" : 2, "salle" : "1c"},
{"titre" : "Tall Man with White Shirt, œuvre au dernier plan telle que présentée à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-23_b.jpg", "artiste" : "Stephan Balkenhol", "date" : "1990", "exposition" : 2, "salle" : "1c"},
{"titre" : "Bourgeois Bust - Jeff and Ilona", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2811%29.jpg", "artiste" : "Jeff Koons", "description": "l'auteur de Frieze propose d'appeler cette dernière salle &quot;le tombeau de Jeff Koons&quot;. De nombreux critique ont ainsi insisté sur le rôle promoteur de Deitch par rapport aux artistes de sa connaissance. Ici, Deitch parle de Koons comme d'un artiste dont &quot;la vie et l'œuvre tourne autour de la re-création du moi&quot; ", "date" : "1991", "exposition" : 0, "salle" : "1c"},
{"titre" : "Bear and Policeman", "illustration" : "http://www.jeffkoons.com/sites/default/files/styles/380x_height/public/artwork-images/ban3_sm.jpg?itok=fKMAKN1S", "artiste" : "Jeff Koons", "description" : "Dans cette œuvre, le jeu de Jeff Koons présente une figure humaine et l'anthropomorphisation d'un ours. Le kitsch, la société de consommation sont présent dans cette œuvre.", "date" : "1988", "exposition" : 2, "salle" : "1d"},

{"titre" : "Salle 2", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6, "salle" : "2"},
{"titre" : "Switzerland, the Pink & Peter Sellers & Boris & Natasha in Siberia", "illustration" : "http://www.artnet.com/WebServices/images/ll00107lldETaFFgUNECfDrCWvaHBOcqTF/karen-kilimnik-switzerland,-the-pink-panther-and-peter-sellers-and-boris-and-natasha-in-siberia.jpg", "artiste" : "Karen Kilimnik", "description" : "L'œuvre de Kilimnik est nommée d'après des personnages de dessin animé &quot;La Panthère Rose&quot;, les personnages Boris et Natasha du dessin animé &quot;The Adventures of Rocky and Bullwinkle and Friends&quot; et l'acteur américain Peter Sellers. Les œuvres de Kiliminik mettent en scène la culture populaire et ici, l'idéé de la Suisse avec un caquelon.", "date" : "1991", "exposition" : 1, "salle" : "2"},
{"titre" : "Goldie Hawn, œuvre au dernier plan, contre le mur, telles que présentée à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-28_b.jpg", "artiste" : "Karen Kilimnik", "description" : "Dans cette œuvre, l'actrice américaine, Goldie Hawn est représentée en haut à gauche du dessin. Au centre, une figure féminine de dos. Pour Deitch, Kliminik étudie le rapport à la personnalité, au moi et aux &quot; modèles de la célébrité&quot;.", "date" : "1990", "exposition" : 1, "salle" : "2"},
{"titre" : "The Garden, œuvre comme présentée à la Deichtorhallen d'Hamburg", "illustration" : "https://www.spikeartmagazine.com/sites/default/files/styles/full_width/public/styles/full_width/public/users/shared/articles/images/1993_posthuman_wolfgangneeb_0.jpg?itok=ms7OFfH0&width=auto&height=auto", "artiste" : "Paul McCarthy", "description" : "Pour Deitch, cette œuvre représente la fusion de l'humain et de la machine, en proie au pulsions et dénué de toute pasion humaine. Pour le journaliste de Frieze cette œuvre est la plus impressionnante de l'exposition. Le jeu intéressant se trouve ici dans le mélange entre une forêt artificielle, les deux hommes robotisés, la machine, l'humain, la nature semblant être tous artificiels, comme simulacres d'une situation.", "date" : "1991-92", "exposition" : 2, "salle" : "2"},
{"titre" : "Tale", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2814%29.jpg", "artiste" : "Kiki Smith", "description" : "L'œuvre de Kiki Smith, présente dans cette salle est décrite par Deitch comme &quot;témoignant du naufrage émotionnel qui suppure sous la surface du plastique&quot;. Il s'agit pour Deitch de la même idée proposé par Janine Antoni. L'idée de &quot;réservoir irrationnel d'émotions désorganisées qui risque de submerger les progrès de la technologie&quot;.", "date" : "1992", "exposition" : 2, "salle" : "2"},
{"titre" : "Chocolate Gnaw", "illustration" : "http://www.learn.columbia.edu/courses/fa/images/large/ck_femart_antoni_block.jpg", "artiste" : "Janine Antoni", "description" : "Les œuvres de Janine Antoni, sont pour Deitch du même ordre que celle de Kiki Smith, elles traitent des pulsions humaines qui ressortent dans une société où tout le reste a été lissé. Pour Paul Ardenne dans &quot;L'ère des Monstres&quot;, ce travail se rapproche de celui de celui de Sylvie Fleury qui se trouve à l'étage de l'exposition. Tous deux traitent du &quot; statut de consommateur&quot; de l'être humain dont le corps devient absent.", "date" : "1992", "exposition" : 1, "salle" : "2"},
{"titre" : "Lard Gnaw", "illustration" : "http://www.learn.columbia.edu/courses/fa/images/large/kc_femart_antoni_113.jpg", "artiste" : "Janine Antoni", "date" : "1992", "exposition" : 1, "salle" : "1"},
{"titre" : "Phenylethylamine", "illustration" : "http://www.marthagarzon.com/contemporary_art/wp-content/uploads/2011/03/antoni-sculpt-004.jpg", "artiste" : "Janine Antoni", "description" : "", "date" : "1992", "exposition" : 1, "salle" : "2"},
{"titre" : "Lipstick", "illustration" : "", "artiste" : "Janine Antoni", "description" : "", "date" : "1992", "exposition" : 1, "salle" : "2"},
{"titre" : "Happy Worker (Tom the Postman)", "illustration" : "", "artiste" : "Daniel Oates", "description" : "", "date" : "1992", "exposition" : 0},
{"titre" : "St. Stephen, œuvre au dernier plan telle que présentée à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-24_b.jpg", "artiste" : "Wim Delvoye", "description" : "", "date" : "1990", "exposition" : 4, "salle" : "2"},
{"titre" : "Choir Boys, œuvre à droite, telle que présentée à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-24_b.jpg", "artiste" : "Martin Honert", "description" : "", "date" : "1988-89", "exposition" : 2, "salle" : "2"},

{"titre" : "Escalier", "illustration" : "", "artiste" : "", "description" : "", "date" : "", "exposition" : 6, "salle" : "Escalier"},
{"titre" : "Radia Drill", "illustration" : "http://www.artinamericamagazine.com/files/2016/10/06/img-matthew-barney-lookout_16580229330.jpg_x_550x413_c.jpg", "artiste" : "Matthew Barney", "description" : "Le travail de Matthew Barney est intéressant au regard sur le <i>post-human</i>, il joue sur le corps, son genre et sa sexualisation, notamment au travers des vidéos qu'il réalise entre 1994 et 2002,<i> Cremaster Cycle</i>.", "date" : "1991", "exposition" : 0, "salle" : "Escalier"},
{"titre" : "Pin-Ups (œuvres telles que présentée à la Deste Foundation)", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%282%29.jpg", "artiste" : "Christian Marclay", "description" : "Dans ces œuvres, Christian Marclay présente les corps décomposés et recomposés de figure de la pop. Dans l'exposition l'œuvre est présentée au-dessus des escaliers.", "date" : "1991", "exposition" : 5, "salle" : "Escalier"},
{"titre" : "Doorsiana (œuvres telles que présentée à la Deste Foundation)", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%282%29.jpg", "artiste" : "Christian Marclay", "description" : "", "date" : "1991", "exposition" : 5, "salle" : "Escalier"},
{"titre" : "", "illustration" : "", "artiste" : "Erika Rothenberg", "description" : "", "date" : "", "exposition" : 0,  "salle" : "Escalier"},
{"titre" : "Second étage", "illustration" : "", "artiste" : "", "description" : "", "date" : "", "exposition" : 6},
//{"titre" : "Salle 3a", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Repressia (Decline)", "illustration" : "http://www.art-agenda.com/wp-content/uploads/2016/10/1.-Matthew-Barney.jpg", "artiste" : "Matthew Barney", "description" : "", "date" : "1991", "exposition" : 0, "salle" : "3a"},

//{"titre" : "Salle 3b", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "The Limits of the World I", "illustration" : "https://media.mutualart.com/Images/2009_07/25/0255/631473/2643a537-156b-46ca-a9c7-5568c048e2f2_g_570.Jpeg", "artiste" : "Ashley Bickerton", "description" : "", "date" : "1991", "exposition" : 0, "salle" : "3b"},
{"titre" : "Tanya as a Bandit", "illustration" : "http://greg.org/archive/noland_moma_itgreeds.jpg", "artiste" : "Cady Nolan", "description" : "", "date" : "1989", "exposition" : 0, "salle" : "3b"},
{"titre" : "Oozewald, œuvre au premier plan, comme présentée à la Deste Foundation", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2817%29.jpg", "artiste" : "Cady Nolan", "description" : "", "date" : "1989", "exposition" : 0, "salle" : "3b"},

//{"titre" : "Salle 3c", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Sculpture for Teenage Boys, Portraits of the Artists in their Studio Hung", "illustration" : "", "artiste" : "Pruitt & Early", "description" : "", "date" : "Early 1990s", "exposition" : 0, "salle" : "3c"},

//{"titre" : "Salle 3d", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Untitled Turkey, œuvre comme présentée à la Deichtorhallen d'Hamburg", "illustration" : "https://www.spikeartmagazine.com/sites/default/files/styles/full_width/public/styles/full_width/public/users/shared/articles/images/post-human-meyer-vaisman-kopie_0.jpg?itok=gdemiD9x&width=auto&height=auto", "artiste" : "Meyer Vaisman", "description" : "Dans cette œuvre, une anthropomorphisation de dindons vient jouer des limites entres humains et animaux.", "date" : "1992", "exposition" : 2, "salle" : "3d"},
{"titre" : "Untitled Turkey", "illustration" : "https://i.pinimg.com/474x/39/79/f5/3979f595a43c506633aa5c20a6b239bc--turkey.jpg", "artiste" : "Meyer Vaisman", "description" : "", "date" : "1992", "exposition" : 2, "salle" : "3d"},

//{"titre" : "Salle 3e", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Untitled, œuvre au premier plan comme présentée à la Deste Foundation", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2826%29.jpg", "artiste" : "Sylvie Fleury", "description" : "Le travail de Sylvie Fleury, comme plus tôt vu avec l'œuvre de Janine Antoni, présente l'absence de la figure humaine et la société de consommation de l'ère postmodene.", "date" : "1992", "exposition" : 1, "salle" : "3e"},
{"titre" : "The Acquired Inability to Escape", "illustration" : "http://www.tate.org.uk/art/images/work/T/T12/T12748_10.jpg", "artiste" : "Damien Hirst", "description" : "L'œuvre de Damien Hirst, présente elle aussi, l'absence de la figure humaine. La présence est saisissable au regard des mégots de cigratte dans le cendrier. L'humain qui aurait pu s'y trouver serait présenté derrière une parois de verre, dans un cube transparent dans le white cube de l'exposition. Les deux œuvres de Sylvie Fleury et de Damien Hirst, fonctionnent parfaitement ensemble selon le journaliste de Frieze.", "date" : "1991", "exposition" : 3, "salle" : "3e"},

//{"titre" : "Salle 3f", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Untitled", "illustration" : "https://i.pinimg.com/564x/53/19/05/53190528f4d8e3d9b6e44d86f9f0350c--cindy-sherman--d-art.jpg", "artiste" : "Cindy Sherman", "description" : "L'œuvre de Cindy Sherman est présenté dans l'exposition derrière l'œuvre de Sylvie Fleury. Pour le journaliste de Frieze, il s'agit d'un mauvais placement qui fait penser que les travaux de Sherman ne sont que la toile de fonds du travail de Fleury.", "date" : "1992", "exposition" : 2, "salle" : "3f"},
{"titre" : "Untitled", "illustration" : "http://www.christies.com/img/LotImages/2012/NYR/2012_NYR_02559_0438_000.jpg?height=400", "artiste" : "Cindy Sherman", "description" : "Dans les deux œuvres de Sherman, le corps humain est présenté de façon décomposé et réassemblé en plus d'être un mannequin.", "date" : "1992", "exposition" : 2, "salle" : "3f"},


//{"titre" : "Salle 3g", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "The Singing Company", "illustration" : "https://dg19s6hp6ufoh.cloudfront.net/pictures/611901413/large/clegg_guttmann_04.jpeg?1361289326", "artiste" : "Clegg & Guttmann", "description" : "Cette photographie est présentée face au mannequin de Charles Ray. Le journaliste de Frieze salue ce placement, expliquant que les hommes semblent fixer la sculpture.", "date" : "1986", "exposition" : 0, "salle" : "3g"},

//{"titre" : "Salle 3h", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6},
{"titre" : "Mannequin Fall '91, œuvre comme présentée au Castello Di Rivoli", "illustration" : "https://www.castellodirivoli.org/wp-content/uploads/2012/04/Posthuman-6.jpg", "artiste" : "Charles Ray", "description" : "L'œuvre de Charles Ray, présente un mannequin aux dimensions irréelle, placé dans une petite alcove elle parait d'autant plus grande aux visiteurs de l'exposition.", "date" : "1991", "exposition" : 2, "salle" : "3h"},

{"titre" : "Œuvres non situées", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6, "salle" : "non définie"},
{"titre" : "346", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2821%29.jpg", "artiste" : "John M Armleder", "date" : "1988", "exposition" : 1, "salle" : "non définie"},
{"titre" : "Dryclean", "illustration" : "", "artiste" : "Susan Etkin", "date" : "1990-91", "exposition" : 1, "salle" : "non définie"},
{"titre" : "Brown Star, œuvre du fond, comme présentée à la Deste Foundation", "illustration" : "http://www.deitch.com/content/curatorial/post-human/1992_PH-Inst--%2817%29.jpg", "artiste" : "Mike Kelly", "date" : "1991", "exposition" : 2, "salle" : "non définie"},
{"titre" : "Martin, Stand in the Corner and Shame on You", "illustration" : "", "artiste" : "Martin Kippenberger", "date" : "1990", "exposition" : 2, "salle" : "non définie"},
{"titre" : "New Members for the Burghers of Calais", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-5_b.jpg", "artiste" : "George Lappas", "date" : "1992", "exposition" : 5, "salle" : "non définie"},
{"titre" : "Blinded by the Light", "illustration" : "", "artiste" : "Yasumasa Morimura", "date" : "1991", "exposition" : 1, "salle" : "non définie"},
{"titre" : "Portrait", "illustration" : "", "artiste" : "Thomas Ruff", "date" : "1989", "exposition" : 2, "salle" : "non définie"},
{"titre" : "Portrait", "illustration" : "", "artiste" : "Thomas Ruff", "date" : "1988", "exposition" : 2, "salle" : "non définie"},

{"titre" : "Œuvres absente à la FAE", "illustration" : "", "artiste" : "", "date" : "", "exposition" : 6, "salle" : "non définie"},
{"titre" : "A thru Z 1979-1989", "illustration" : "", "artiste" : "Dennis Adams", "date" : "1990", "exposition" : 0, "salle" : "non définie"},
{"titre" : "Pastel, œuvre au premier plan telle que présentée à la Deste Foundation", "illustration" : "https://deste.gr/wp-content/uploads/2013/07/1992_PH-Inst-28_b.jpg", "artiste" : "Annette Lemieux", "date" : "1992", "exposition" : 5, "salle" : "non définie"},
{"titre" : "Date Machine", "illustration" : "", "artiste" : "Kodai Nakahara", "date" : "1991", "exposition" : 0, "salle" : "non définie"},
{"titre" : "The Stumbling Block", "illustration" : "", "artiste" : "Jeff Wall", "date" : "1991", "exposition" : 0, "salle" : "non définie"},
];

//Ci dessus set de données
//Ci dessous D3

//Définition des variables de bases
//Cadre correspondant à la largeur et à la hauteur de la fenêtre, les données s'incriront à l'intérieur
let largeur = window.innerWidth; 
let hauteur = "50px";

let canevas = d3.select("body")
   .append("svg")
   .attr("width",largeur)
   .attr("height",hauteur);

let couleur = ["pink","red","orange","yellow","lightgreen","lightblue", "black"];
//le noir correspond au mur
// ajout d'une div pour les tooltips
// cette div sera déplacé à chaque survol
let div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// pour rendre le graphique réactif en x
let echelle_x = d3.scaleLinear()
   .domain([0,oeuvres.length])
   .range([40,largeur-20]);

let cercles = d3.select("svg")
   .selectAll("circle")
   .data(oeuvres)
   .enter()
   .append("circle")
     .attr("cx",(d,i) => echelle_x(i))
     .attr("cy", (10))
     .attr("data-exposition", (d) => d.exposition)
     .attr("r",window.innerWidth/oeuvres.length/2.5)
     .attr("fill",(d) => couleur[d.exposition])
      // ajout du tooltip
     .on("click", function(d) {
       div.transition()
         .duration(200)
         .style("opacity", 1);
       //div.html(d.illustration+"<br /><br />"+"<i>"+d.titre+"</i><br /><br /><b>"+d.artiste+"</b><br /><br />"+d.description)
       div.html(`<img src='${d.illustration}'><br /><br /><i>${d.titre}</i><br /><br /><b>${d.artiste}</b><br /><br />${d.description}<br /><br />Salle ${d.salle}`)
       })