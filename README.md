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

## 06. Proxy Pattern

- Le patron proxy est un patron de conception en programmation orientée objet qui permet de créer un objet qui sert d'intermédiaire pour accéder à un autre objet. Le proxy peut être utilisé pour contrôler l'accès à l'objet cible, pour ajouter des comportements avant ou après l'accès à l'objet cible, ou pour simplement masquer l'objet cible derrière un interface commune.

- Le patron proxy est souvent utilisé dans les situations suivantes :

  - Pour contrôler l'accès à un objet qui est coûteux à créer ou à utiliser, comme un objet qui accède à une base de données ou à une API distante. Le proxy peut être utilisé pour mettre en cache les résultats afin de réduire les appels à l'objet cible et d'améliorer les performances.
  - Pour fournir une interface de service commune à plusieurs objets qui implémentent des interfaces différentes. Le proxy peut être utilisé pour adapter ces interfaces et les rendre compatibles.
  - Pour ajouter des comportements supplémentaires avant ou après l'accès à l'objet cible. Par exemple, le proxy peut être utilisé pour effectuer des vérifications d'autorisation avant de permettre l'accès à l'objet cible.

- Pour mettre en œuvre le patron proxy, vous devez définir une interface commune pour le proxy et l'objet cible, puis définir une classe concrète de proxy qui implémente cette interface et qui contient une référence à l'objet cible. Lorsque le proxy reçoit une requête, il peut exécuter des comportements supplémentaires avant ou après l'appel de l'objet cible.

## 07. Mediator Pattern

- Le patron médiateur est un patron de conception en programmation orientée objet qui permet de créer un objet qui agit comme un intermédiaire et qui gère les communications entre plusieurs objets. Le médiateur sert de canal centralisé pour l'échange d'informations et de messages entre les objets, ce qui peut aider à réduire la complexité de l'interaction entre ces objets et à les rendre plus modulaires et flexibles.

- Le patron médiateur est souvent utilisé dans les situations suivantes :

  - Lorsque vous avez plusieurs objets qui doivent communiquer entre eux et que vous voulez éviter de créer des dépendances directes entre ces objets. Le médiateur peut être utilisé pour gérer les communications entre ces objets, ce qui les rend plus indépendants et faciles à maintenir.
  - Lorsque vous voulez centraliser la logique de communication dans un seul endroit afin de faciliter la maintenance et l'extension du code. Le médiateur peut être utilisé pour regrouper toute la logique de communication dans un seul objet, ce qui peut rendre le code plus clair et plus facile à comprendre.

- Pour mettre en œuvre le patron médiateur, vous devez définir une interface de médiateur qui définit les méthodes de communication qu'il peut gérer. Vous devez également définir une classe concrète de médiateur qui implémente cette interface et qui contient la logique de communication. Enfin, vous devez définir des classes d'objets qui utilisent le médiateur pour envoyer et recevoir des messages. Ces objets n'ont pas à connaître les détails de la communication avec les autres objets, ce qui les rend plus modulaires et flexibles.

## 08. Visitor Pattern

- Le patron visiteur est un patron de conception en programmation orientée objet qui permet de définir une opération à effectuer sur les éléments d'une structure de données composée, tels qu'une liste ou un arbre. Le visiteur est une classe séparée qui parcourt la structure de données et exécute l'opération sur chaque élément. Cela permet de séparer la logique de traitement des données de la structure de données elle-même, ce qui rend le code plus facile à maintenir et à étendre.

- Le patron visiteur est souvent utilisé dans les situations suivantes :

  - Lorsque vous avez une structure de données composée (par exemple, une liste ou un arbre) et que vous voulez effectuer différentes opérations sur ces éléments sans avoir à ajouter de nouvelles méthodes à chaque élément de la structure. Le visiteur peut être utilisé pour effectuer ces opérations sans altérer l'interface de chaque élément.
  - Lorsque vous voulez effectuer des opérations qui dépendent du type d'élément dans une structure de données composée. Le visiteur peut être utilisé pour exécuter des opérations différentes en fonction du type d'élément, sans avoir à utiliser des structures de contrôle de type "switch" ou "if" complexes.

- Pour mettre en œuvre le patron visiteur, vous devez définir une interface de visiteur qui définit les opérations à effectuer sur chaque type d'élément de la structure de données. Vous devez également définir une classe concrète de visiteur qui implémente cette interface et qui contient la logique de traitement des données. Enfin, vous devez définir une interface pour les éléments de la structure de données qui possède une méthode acceptant le visiteur en tant qu'argument. Chaque classe d'élément concrète implémente cette interface et appelle la méthode de visiteur appropriée lorsqu'elle est visitée.
