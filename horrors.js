horrors = {
    "title": "Astral Horrors",
    "description": "As a feeling of unspeakable dread washes over them, the adventurers realize that they have attracted the attention of a strange being from a distant plane or dimension.",
    "roll": "1",
    "description-image": "horror.png",

    "nameStart": ["Ch","X","S","Ick","Ix","Ex","Ax","Ach","Gr"],
    "nameSyl": ["iz","ix","ez","az","ach","ech","ich","eb","aarg","arth","irth","erth","earth"],

    "name1": ["#nameStart##nameSyl##nameSyl#", "#nameStart##nameSyl#", "#nameStart##nameSyl##nameSyl##nameSyl#"],

    "name": ["#name1#", "#name1# #name1#"],

    "animal": ["cat", "jellyfish", "starfish", "urchin", "elephant", "ape", "coral"],

    "bodyPart": ["disembodied brain", "disembodied eyeball", "disembodied mouth"],

    "formState": ["glowing", "burning", "shimmering", "transparent", "ethereal", "slimy", "scaly"],

    "form": ["#animal#", "#bodyPart#"],

    "formSentence": "#horror# takes the form of a #formState# #form# monster.",

    "eatsVerb": ["eats", "feeds upon"],
    "eatsNoun": ["blood", "psychic energy", "children", "innocents", "darkness", "magical energy", "hope", "dreams"],

    "eatsSentence": "#horror# #eatsVerb# #eatsNoun#.",

    "attacksWith": ["bites", "tentacles", "talons", "claws", "fire"],

    "attackAdj": ["vicious", "powerful", "fierce", "energized", "electric", "piercing", "sticky", "draining"],

    "attackSentence": "It attacks with #attackAdj# #attacksWith#.",

    "horror-description": "#formSentence# #eatsSentence# #attackSentence#",

    "1-midboss-title": "",
    "1-midboss-description": "#[horror:#name#]horror-description#"
}