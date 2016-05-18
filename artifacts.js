artifacts = {
    "title": "Artifacts",
    "description": "The adventurers have found a strange artifact. Let's see what it does.",
    "roll": "1",
    "description-image": "artifact.png",

    "nameStart": ["Ch","B","W","T","P","Y","L","G","Gr","Z","C","V","B","N","M"],
    "nameSyl": ["is","ar","us","os","in","it","ix","ast","or","arth","irth","unt","as","y"],

    "name": ["#nameStart##nameSyl#", "#nameStart##nameSyl#", "#nameStart##nameSyl##nameSyl#", "#nameStart##nameSyl##nameSyl##nameSyl#"],

    "shapephrase": ["has the form of", "is a powerful artifact in the shape of", "looks like"],
    "adj": ["broken", "smooth", "warm", "cold", "sharp", "wet", "soft", "hard", "mushy", "transparent", "glassy", "opaque"],
    "shape": ["rock", "doll", "figurine", "amulet", "orb", "gem", "crystal", "sphere", "cube", "prism", "blade", "spear", "monument", "meteorite"],


    "formSentence": "#artifact# #shapephrase# #adj.a# #shape#.",

    "artifactDescription": "#formSentence#",



    "1-artifact-title": "",
    "1-artifact-description": "#[artifact:#name#]artifactDescription#"
}