# tuto-github-workflows-actions

S'il s'agit du point d'entrée, j'analyserais alors les arguments de ligne de commande (à l'aide de commander) transmis depuis entrypoint.sh. Les arguments ont été injectés dans entrypoint.sh par GitHub à partir du fichier de workflow via le conteneur (plus à ce sujet plus tard).

J'invoque ensuite la fonction principale. Puisqu'il s'agit d'une fonction asynchrone, je gère sa valeur de retour avec une clause then et gère l'échec avec une clause catch.

Il est également utile de lire l'événement, fourni par GitHub, et de l'utiliser dans le script:
const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))
 ## 
