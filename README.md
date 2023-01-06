# L'agorithmie

## La "Big O notation"

- La notation Big O est une notation utilisée en algorithmique pour décrire
  la complexité d'un algorithme. Elle permet de déterminer le temps d'exécution et
  l'espace mémoire nécessaire à un algorithme en fonction de la taille des données d'entrée.

- Quel est le meilleur code ?

  - Code Rapide
  - Code légé (qui utilise le moins de ressource)
  - Code lisible

## Comment tester la rapidité ?

- performance.now()
- console.Time()

(Voir le fichier Javascript)

## Que juger de la rapidité ?

- L'insertion
- Le retrait
- La recherche
- L'acces aux données

1. Les objets sont rapides dans l'ensemble de ces domaines
2. Les tableaux sont rapides pour l'acces aux données mais peuvent etre lents lors de l'insertion ou le retrait

## Les design patterns :

Il existe trois grands types de design patterns :

- Les Creational Design Patterns qui représentent tous les design patterns dédiés à la création d’objets. On y trouvera le Constructor Pattern, le Factory Pattern, etc. ;

- Les Structural Design Patterns qui permettent de gérer et d’assembler des objets dans des structures plus grandes. Vous y trouverez, par exemple, l’Adapter Pattern et le Decorator Pattern ;

- Et enfin les Behavioral Design Patterns qui correspondent à la communication entre les objets. On y trouve, par exemple, l'Observable Pattern et les State Patterns.

### Attention :

- Un design pattern est relatif à la création, la manipulation et/ou la communication entre un ou plusieurs objets. Dans ce cas, vous travaillez sur un sujet assez précis : la communication avec une API, par exemple.

- Un design d’architecture est un ensemble de règles et de conventions pour le design de l’application elle-même, qu’elle soit front-end ou back-end... Par exemple, quelle partie du code s’occupe de gérer les données, quelle partie s’occupe de les afficher, etc.

## 01. Factory pattern

- Le "Factory pattern" est un patron de conception qui consiste à déléguer la création d'objets à une classe spécialisée appelée "fabrique". L'objectif de ce patron de conception est de séparer la logique de création des objets de leur utilisation, ce qui permet de rendre le code plus flexible et modulaire.

- Le "Factory pattern" est souvent utilisé lorsque l'on a besoin de créer des objets qui appartiennent à une famille de classes similaires, mais où la sous-classe concrète à instancier peut varier. La fabrique se charge de décider quelle sous-classe concrète instancier et de retourner une instance de cette sous-classe. Cela permet de centraliser la logique de création des objets et de la rendre plus modifiable.

## 02. Singleton pattern

- Le "Singleton pattern" est un patron de conception qui vise à garantir qu'une classe n'a qu'une seule instance et qu'il existe un point d'accès global à cette instance.

- Le "Singleton pattern" est souvent utilisé lorsqu'il est nécessaire de s'assurer qu'il n'existe qu'une seule instance d'une classe, par exemple pour représenter une connexion à une base de données ou un service web, afin d'éviter d'avoir à créer de nouvelles connexions chaque fois qu'on en a besoin.

## 03. Strategy Pattern

- Le "Strategy Pattern" est un patron de conception qui permet de définir une famille d'algorithmes, de les encapsuler et de les rendre interchangeables. Ce patron de conception permet de sélectionner l'algorithme à utiliser à runtime et de changer facilement d'algorithme sans impacter le code utilisateur.

## 04. Iterator Pattern

- L' "iterator pattern" est un patron de conception de logiciel qui permet d'accéder de manière séquentielle aux éléments d'un objet agrégat, sans exposer sa représentation interne. Cela signifie que vous pouvez parcourir les éléments d'un objet agrégat sans savoir comment cet objet est organisé interne.

## 05. Observer Pattern

- Le patron observer (aussi connu sous le nom de patron de publication-abonnement) est un patron de conception en programmation orientée objet qui permet à un objet, appelé "sujet", de diffuser des mises à jour à un ensemble d'objets, appelés "observateurs", lorsqu'il subit un changement.

- Le patron observer est utilisé pour mettre en œuvre une dépendance en "un pour plusieurs" de sorte que lorsqu'un objet change d'état, tous ses dépendants sont automatiquement notifiés et mis à jour. Cela permet de créer des systèmes modulaires et flexibles, car les observateurs peuvent être ajoutés ou supprimés dynamiquement.

- Pour mettre en œuvre le patron observer, vous devez définir une interface d'observateur qui définit une méthode de mise à jour à appeler lorsque le sujet change d'état. Vous devez également définir une classe concrète d'observateur qui implémente cette interface et qui contient les comportements à exécuter lorsqu'elle est mise à jour. Enfin, vous devez définir une classe de sujet qui maintient une liste d'observateurs et qui appelle la méthode de mise à jour de chaque observateur lorsqu'elle subit un changement.
