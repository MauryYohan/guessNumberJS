# Projet GuessTheNumber

Le concept est simple. Au début du script, notre application va générer un nombre aléatoire entre 0 et 100 qu'on va appeler targetNumber.

Ensuite, il va demander à l'utilisateur de rentrer un nombre.
    - Si le nombre n'est pas valide, il informe qu'il faut rentrer un nombre entre 0 et 100
    - Si le nombre est plus petit, il va informer que le nombre targetNumber est plus grand
    - Si le nombre est trop grand, il va informer que le nombre targetNumber est plus petit
    - Si c'est le bon nombre : fin de la partie ! (affiche le nombre d'essais)

Voici les fonctionnalités attendues :
    - Générer un nombre aléatoire entre 0 et 100
    - Utiliser une fonction récursive pour demander à l'utilisateur un nombre tant qu'il n'a pas trouvé le bon nombre
    - Compter le nombre d'essais
