---
model: article
lang: fr
image: https://media.paxpar.tech/pp_blog_med_FEC_sam-albury-oA7MMRxTVzo-unsplash.png
description: 📖 Lire l'article
createdAt: 2023-02-09
---

![](https://media.paxpar.tech/pp_blog_med_FEC_sam-albury-oA7MMRxTVzo-unsplash.png)
# Intégration ERP
![ERP](https://media.paxpar.tech/pp_blog_med_FEC_sam-albury-oA7MMRxTVzo-unsplash.png)
|[]|[]| []
----|-----------|-----
[Philippe ENTZMANN](/actor/philippe)|9 Février 2022|Conformité,Contrôle| 

L'intégration de metadonnées aux documents PDF devient incontournable.
Nous présenterons sommairement le cas du [format Factur-X](#le-cas-factur-x) pour les factures PDF.

Nous détaillerons ensuite plusieurs approches pour intégrer cette démarche [aux autres documents PDF](#les-autres-documents) générés.
Les plus pertinentes sont présentées en premier.

* [Approche intégrée](#approche-intégrée)
* [Approche API](#approche-api)
* [Approche base de donnée](#approche-base-de-donnée)
* [Approche fichier](#approche-fichier)
* [Approche scrapping](#approche-scrapping)

Tous les [languages de développement](#langages-supportés) courants peuvent être utilisés.

A noter que cette intégration est souvent demandée aux bénéfices d'outils tiers à l'ERP. Mais il faut signaler [les bénéfices indirects](#bénéfices-éco-système) importants pour l'ERP et son écosystème.

Nous évoquerons enfin la [possibilité de co-développement](#co-développement) de ces intégrations
afin d'en partager la charge et [les bénéfices](#bénéfices-éco-système).

## Le cas Factur-X

Le cas emblématique d'attache de métadonnées à un PDF est celui du [format Factur-X](https://fnfe-mpe.org/factur-x/) pour les factures PDF électroniques.

Il s'agit d'attacher un simple fichier texte à un PDF.

Le fichier attaché est au format XML et le PDF doit être au [format PDF/A](https://en.wikipedia.org/wiki/PDF/A).

Ce fichier texte doit être structuré pour pouvoir être lisible par un ordinateur d'où l'utilisation du [format XML](https://www.w3.org/standards/xml/core).
D'autre formats structurés peuvent être utilisés.
Nous préconisons le [format YAML](https://yaml.org/) selon un schema au [format JSON-schema](https://json-schema.org/).

D'autres formats standardisés sont possibles (
[JSON](https://www.json.org/json-en.html),
[FEC](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027804775),
[XBRL](https://www.xbrl.org/),
[IFC](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/),
...)
Certains formats sont à éviter, comme XLSX ou CSV, car jugés non stables ou trop ambigüs.

En résumé, Il s'agit d'**attacher un simple fichier texte à un PDF**.
Les [bénéfices](#bénéfices-éco-système) sont alors conséquents.


## Les autres documents

La facture est le premier document d'un ERP à disposer d'un format officiel de metadonnées.
D'autres types de document sont en cours de normalisation.
C'est le cas du bon de commande avec le [standard Order-X](https://fnfe-mpe.org/factur-x/order-x/).
D'autres documents suivront inévitablement comme le bon de livraison.

Mais il n'est pas judicieux d'attendre pour enrichir ces documents PDF :
* même standardisées, les metadonnées ne couvriront que les aspects communs à tous les métiers. Chaque métier à ses particularités et un ERP spécialisé dans un métier a tout intérêt à inclure, en complément, les données spécifiques au métier concerné
* les documents qui seront standardisés en dernier sont probablement les documents les plus spécifiques.
Or les cas de litiges et de fraudes portent essentiellement sur les spécifités d'un métier. Il est donc pertinent pour un ERP spécialisé de créer et attacher des métadonnées à tout type de document.
* certains documents de niche n'auront pas de standard officiel ...
mais peuvent bénéficier d'un **standard de fait** porter par
un acteur majeur (utilisateur/intégrateur/éditeur) qui aura pris l'initiative
de générer le premier ces documents.

Tout document édité au format PDF peut disposer de métadonnées.
Plus ce document circule, plus il est sujet à des fraudes ou des litiges, plus il a de valeur contractuelle et plus il tirera profit des métadonnées qui y seront rattachées :
* packing list
* procès verbal de recette
* levée de reserves
* contrat commercial
* fiche visite
* calibrage de machine
* analyse de laboratoire
* prise d'échantillon
* attestation de qualification professionnelle
* bulletin de salaire
* contrat de travail
* diagnostique technique
* etc ...

## Approche intégrée

L'approche idéale consiste à enrichir le PDF avec ses métadonnées directement au sein de l'ERP lors de sa génération.
Les métadonnées ne *pèsent* que quelques kilo-octets et le processus d'ajout de la pièce jointe au PDF est très peu couteux en temps processeur.
Les métadonnées sont généralement disponibles au moment de la génération du PDF. Il n'y a donc pas de coût supplémentaire pour les collecter.
Tous les [langages de développement](#langages-supportés) sont supportés.
Il n'y a aucun coût de license à envisager en utilisant des bibliothèques en license libre permissive.

## Approche API

Lors de la génération d'un document au format PDF par l'ERP,
un outil externe en détecte la présence et lance un appel API à  l'ERP (via un  appel API REST ou GraphQL) pour obtenir les métadonnées utiles.
Le résultat de la requête, après conversion au format YAML, est fusionné au PDF.

L'utilisateur peut alors utiliser le fichier PDF augmenté.

## Approche base de données

Lors de la génération d'un document au format PDF par l'ERP,
un outil externe en détecte la présence et lance une requête
à la base de donnée de l'ERP (via un connecteur JDBC/ODBC ou un pilote dédié SQL ou noSQL) pour obtenir les métadonnées utiles.
Le résultat de la requête, après conversion au format YAML, est fusionné au PDF.

L'utilisateur peut alors utiliser le fichier PDF augmenté.

## Approche fichier

Lors de la génération d'un document au format PDF, l'ERP peut générer également un fichier complémentaire dans un format structuré (XML, JSON, YAML).

Un outil externe à l'ERP détecte la présence du fichier PDF et du fichier complémentaire et déclencher la fusion des 2 (après une éventuelle conversion du fichier complémentaire en YAML).

L'utilisateur peut alors utiliser le fichier PDF augmenté.

## Approche scrapping

En recours ultime, en l'absence de tout autre canal de communcation avec l'ERP, il est possible d'automatiser les interactions utilisateur pour collecter les informations utiles.

Que l'ERP dispose d'un accès de type web ou d'une application native Windows, il est envisageable, mais délicat, d'utiliser des [techniques de scrapping](https://en.wikipedia.org/wiki/Web_scraping).

Un outil externe à l'ERP détecte la présence du fichier PDF généré par l'utilisateur, va collecter par scrapping les données et déclencher la fusion des 2 (après une éventuelle conversion du fichier complémentaire en YAML).

L'utilisateur peut alors utiliser le fichier PDF augmenté.

## Langages supportés

Tous les langages de développement modernes sont envisageables pour cette intégration.
A partir du moment où celui-ci dispose d'une bibliothèqe de génération PDF supportant l'ajout de pièces jointes.
C'est notamment le cas des langages
[Python](https://www.python.org/),
[Java](https://www.java.com),
[Kotlin](https://kotlinlang.org/),
[C#](https://learn.microsoft.com/en-us/dotnet/csharp/),
[Rust](https://www.rust-lang.org/),
[TypeScript](https://www.typescriptlang.org/),
[C,C++](https://isocpp.org/).

Si votre langage de développement n'est pas dans cette liste ou si votre outillage PDF actuel n'est pas adapté, il est possible d'intégrer un service PDF spécifique à votre architecture et de l'appeler sous forme de webservice, socket ou commande shell.

Nous disposons d'exemples fonctionnels sous forme de container Docker ou Kubernetes.

## Bénéfices éco-système

Les bénéfices de tels PDF augmentés sont nombreux :

* intégration sans limite dans tout autre outil tiers
* reconciliation des points de vue humain/machine dans un même document
* import déterministe des PDF (sans OCR, sans IA, sans resaisie, sans relecture)
* valorisation juridique des métadonnées avec une signature électronique
* remplissage automatique de formulaire par simple glisser-déposer de PDF (nous contacter)
* imbrication de documents multiples (PDF dans PDF)
* vérification avancée des documents par des services tiers
* comparaison avancée des documents par des services tiers

## Co-développement

Nous nous tenons à votre disposition pour évaluer l'intégration de PDF augmentés au sein de votre ERP.
Que vous soyez utilisateur, consultant, intégrateur ou éditeur, nous pouvons détailler ensemble la meilleure approche.
Dans le cas où cette intégration aurait un intérêt et une visibilité significative, nous pouvons étudier un co-développement et donc un partage des coûts de cette intégration.
N'hésitez pas à nous contacter.

