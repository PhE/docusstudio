# \<ppw-pricing-main\>


## Sections without items

::code-group
:::code-block{label="Preview"}
::ppw-pricing-main
---
monthly: true
pricing:
  plans:
  - id: free
    title: Gratuit
    price_desc: Vérifiez vos documents pdfs
    price_msg: "-"
    price_per_month: 0
    price_per_year: 0
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: own
    title: Design
    price_desc: Créez et vérifiez votre dossier digital
    price_msg: à partir de
    price_per_month: 62.5
    price_per_year: 750
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  sections:
  - name: Vérification
    toggle: false
    free: "∞"
    own: "∞"
  - name: Génération
    toggle: false
    free: "good"
    own: "120"
---
::
:::

```markdown [Code]
::ppw-pricing-main
---
monthly: true
pricing:
  plans:
  - id: free
    title: Gratuit
    price_desc: Vérifiez vos documents pdfs
    price_msg: "-"
    price_per_month: 0
    price_per_year: 0
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: own
    title: Design
    price_desc: Créez et vérifiez votre dossier digital
    price_msg: à partir de
    price_per_month: 62.5
    price_per_year: 750
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  sections:
  - name: Vérification
    toggle: false
    free: "∞"
    own: "∞"
  - name: Génération
    toggle: false
    free: "good"
    own: "120"
---
::
```
::


## With items

::ppw-pricing-main
---
monthly: true
pricing:
  plans:
  - id: free
    title: Gratuit
    price_desc: Vérifiez vos documents pdfs
    price_msg: "-"
    price_per_month: 0
    price_per_year: 0
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: own
    title: Design
    price_desc: Créez et vérifiez votre dossier digital
    price_msg: à partir de
    price_per_month: 62.5
    price_per_year: 750
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  sections:
  - name: Vérification
    items:
    - section: ''
      item: Conformité technique
      free: V
      own: V
      name: Conformité technique
    - section: ''
      item: Conformité métier
      free: V
      own: ":opt:theme:1780:"
      name: Conformité métier
    - section: ''
      item: Conformité juridique
      free: V
      own: V
      name: Conformité juridique
    toggle: true
    free: "∞"
    own: "∞"
  - name: Génération
    items:
    - section: ''
      item: Formulaire de saisie
      free: V
      own: V
      name: Formulaire de saisie
    - section: ''
      item: Modèle de donnée
      free: V
      own: V
      name: Modèle de donnée
    toggle: false
    free: "∞"
    own: "∞"
---
::


## Full example


::ppw-pricing-main
---
monthly: true
pricing:
  plans:
  - id: free
    title: Gratuit
    price_desc: Vérifiez vos documents pdfs
    price_msg: "-"
    price_per_month: 0
    price_per_year: 0
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: own
    title: Design
    price_desc: Créez et vérifiez votre dossier digital
    price_msg: à partir de
    price_per_month: 62.5
    price_per_year: 750
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: retailer
    title: Distribution
    price_desc: Déléguez la vérification documentaire à vos clients, en marque blanche
    price_msg: à partir de
    price_per_month: 2083
    price_per_year: 24996
    button: Choisir
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  - id: partner
    title: Sur_mesure
    price_desc: Adaptez les services de création et de vérification à vos processus
      documentaires
    price_msg: à partir de
    price_per_month: "-"
    price_per_year: "-"
    button: Contactez nous
    button_url: "/checkout?price_id=678678YUIUYIU6768"
    chip: x
  sections:
  - name: Vérification
    items:
    - section: ''
      item: Conformité technique
      free: V
      own: V
      retailer: V
      partner: V
      name: Conformité technique
    - section: ''
      item: Conformité métier
      free: V
      own: V
      retailer: V
      partner: V
      name: Conformité métier
    - section: ''
      item: Conformité juridique
      free: V
      own: V
      retailer: V
      partner: V
      name: Conformité juridique
    - section: ''
      item: Vérification des pièces jointes
      free: V
      own: V
      retailer: V
      partner: V
      name: Vérification des pièces jointes
    - section: ''
      item: Vérification métadonnées
      free: V
      own: V
      retailer: V
      partner: V
      name: Vérification métadonnées
    - section: ''
      item: Utilisation des modules publics
      free: V
      own: V
      retailer: V
      partner: V
      name: Utilisation des modules publics
    - section: ''
      item: Rapport d'audit
      free: X
      own: X
      retailer: V
      partner: V
      name: Rapport d'audit
    - section: ''
      item: Développement de modules privés
      free: X
      own: X
      retailer: X
      partner: V
      name: Développement de modules privés
    toggle: false
    free: "∞"
    own: "∞"
    retailer: "∞"
    partner: "∞"
  - name: Génération
    items:
    - section: ''
      item: Formulaire de saisie
      free: V
      own: V
      retailer: V
      partner: V
      name: Formulaire de saisie
    - section: ''
      item: Modèle de donnée
      free: V
      own: V
      retailer: V
      partner: V
      name: Modèle de donnée
    - section: ''
      item: Ajout de pièces jointes
      free: V
      own: V
      retailer: V
      partner: V
      name: Ajout de pièces jointes
    - section: ''
      item: Modèle sémantique
      free: X
      own: X
      retailer: V
      partner: V
      name: Modèle sémantique
    - section: ''
      item: Intégration dans un formulaire tiers
      free: X
      own: X
      retailer: X
      partner: V
      name: Intégration dans un formulaire tiers
    - section: ''
      item: Studio forge BO
      free: X
      own: X
      retailer: ":opt:theme:1780:"
      partner: V
      name: Studio forge BO
    toggle: false
    free: "∞"
    own: "∞"
    retailer: "∞"
    partner: "∞"
  - name: Signatures
    items:
    - section: ''
      item: Signature Chambersign
      free: V
      own: V
      retailer: V
      partner: V
      name: Signature Chambersign
    - section: ''
      item: Autre signature par certificat
      free: V
      own: V
      retailer: V
      partner: V
      name: Autre signature par certificat
    - section: ''
      item: 'Signature YouSign ??: Selon tarif à venir'
      free: V
      own: V
      retailer: V
      partner: V
      name: 'Signature YouSign ??: Selon tarif à venir'
    - section: ''
      item: 'Signature Universign ??: Selon tarif à venir'
      free: V
      own: V
      retailer: V
      partner: V
      name: 'Signature Universign ??: Selon tarif à venir'
    - section: ''
      item: 'Signature DocuSign ??: Frais de signature à votre charge'
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Signature DocuSign ??: Frais de signature à votre charge'
    - section: ''
      item: 'Signature Adobe Sign ??: Frais de signature à votre charge'
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Signature Adobe Sign ??: Frais de signature à votre charge'
    - section: ''
      item: 'Autre signature PSC ??: Frais de signature à votre charge'
      free: V
      own: V
      retailer: V
      partner: V
      name: 'Autre signature PSC ??: Frais de signature à votre charge'
    toggle: false
    free: "∞"
    own: "∞"
    retailer: "∞"
    partner: "∞"
  - name: Souveraineté
    items:
    - section: ''
      item: Conformité RGPD
      free: V
      own: V
      retailer: V
      partner: V
      name: Conformité RGPD
    - section: ''
      item: Authentification sans mot de passe
      free: V
      own: V
      retailer: V
      partner: V
      name: Authentification sans mot de passe
    - section: ''
      item: 'Non rétention des documents ??: Voir CGU'
      free: X
      own: V
      retailer: V
      partner: V
      name: 'Non rétention des documents ??: Voir CGU'
    - section: ''
      item: Votre indépendance GAFAM / BATX
      free: X
      own: V
      retailer: V
      partner: V
      name: Votre indépendance GAFAM / BATX
    - section: ''
      item: Hébergement Europe
      free: X
      own: V
      retailer: V
      partner: V
      name: Hébergement Europe
    - section: ''
      item: Hébergement France
      free: X
      own: X
      retailer: X
      partner: V
      name: Hébergement France
    toggle: false
    free: V
    own: V
    retailer: V
    partner: V
  - name: Spécialisation
    items:
    - section: ''
      item: Communauté
      free: 1
      own: 1
      retailer: jusqu’à 100
      partner: "∞"
      name: Communauté
    - section: ''
      item: 'Votre thème ??: charte graphique, logo, couleurs, mentions légales'
      free: X
      own: 1
      retailer: ":opt:theme:15:"
      partner: V
      name: 'Votre thème ??: charte graphique, logo, couleurs, mentions légales'
    - section: ''
      item: Votre nom de domaine
      free: X
      own: X
      retailer: ":opt:domain:150:"
      partner: V
      name: Votre nom de domaine
    - section: ''
      item: 'Vérification personnalisée ??:  sur la base de signataires identifiés pour
        contrôler automatiquement vos documents avant envoi'
      free: X
      own: 2
      retailer: jusqu’à 100
      partner: V
      name: 'Vérification personnalisée ??:  sur la base de signataires identifiés pour
        contrôler automatiquement vos documents avant envoi'
    - section: ''
      item: Modèle de documents personnalisé
      free: X
      own: 2
      retailer: jusqu’à 100
      partner: V
      name: Modèle de documents personnalisé
    - section: ''
      item: 'Saisie personnalisée ??: pour gagner du temps en évitant les erreurs de
        saisie'
      free: X
      own: X
      retailer: Jusqu’à 80
      partner: V
      name: 'Saisie personnalisée ??: pour gagner du temps en évitant les erreurs de
        saisie'
    - section: ''
      item: 'Nouveau modèle de données ??:  pour prendre en compte vos spécificités'
      free: X
      own: X
      retailer: Jusqu’à 80
      partner: V
      name: 'Nouveau modèle de données ??:  pour prendre en compte vos spécificités'
    - section: ''
      item: 'Nouveau module ??: pour s''interfacer avec votre environnement informatique'
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Nouveau module ??: pour s''interfacer avec votre environnement informatique'
    - section: ''
      item: 'Empreinte Blockchain ??: fonctionnalité en cours'
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Empreinte Blockchain ??: fonctionnalité en cours'
    toggle: false
    free: X
    own: V
    retailer: V
    partner: V
  - name: API
    items:
    - section: ''
      item: Token accès API
      free: X
      own: X
      retailer: V
      partner: V
      name: Token accès API
    - section: ''
      item: API rate limit / mois
      free: 500
      own: 5K
      retailer: 1M
      partner: V
      name: API rate limit / mois
    - section: ''
      item: API burst limit / mn
      free: 25
      own: 75
      retailer: 5K
      partner: V
      name: API burst limit / mn
    - section: ''
      item: API SLA
      free: X
      own: 2 x 9
      retailer: 3 x 9
      partner: V
      name: API SLA
    toggle: false
    free: X
    own: X
    retailer: V
    partner: V
  - name: Hébergement
    items:
    - section: ''
      item: 'Déploiement dédié ??: votre instance sur l’infrastructure paxpar (Kubernetes)'
      free: X
      own: X
      retailer: ":opt:deploy_pp:1780:"
      partner: V
      name: 'Déploiement dédié ??: votre instance sur l’infrastructure paxpar (Kubernetes)'
    - section: ''
      item: 'Votre déploiement ??: déploiement sur votre infrastructure d’une instance
        paxpar (on promise, Kubernetes)'
      free: X
      own: X
      retailer: ":opt:deploy_user:4220:"
      partner: V
      name: 'Votre déploiement ??: déploiement sur votre infrastructure d’une instance
        paxpar (on promise, Kubernetes)'
    - section: ''
      item: 'Votre archivage ??: toutes vos données sont stockées sur votre infra. Aucune
        donnée persistante sur paxpar (bucket S3)'
      free: X
      own: X
      retailer: ":opt:bucketS3:250:"
      partner: V
      name: 'Votre archivage ??: toutes vos données sont stockées sur votre infra. Aucune
        donnée persistante sur paxpar (bucket S3)'
    - section: ''
      item: 'Intégration à vos stockages cloud ??: Mircrosoft OneDrive, Google Drive,
        Dropbox, Nextcloud'
      free: X
      own: X
      retailer: ":opt:integratecloud:250: "
      partner: V
      name: 'Intégration à vos stockages cloud ??: Mircrosoft OneDrive, Google Drive,
        Dropbox, Nextcloud'
    toggle: false
    free: X
    own: X
    retailer: V
    partner: V
  - name: "\U0001F465 Collaboration Equipe"
    items:
    - section: ''
      item: 'Support-Tickets ??: Délai de réponse variable'
      free: X
      own: V
      retailer: V
      partner: V
      name: 'Support-Tickets ??: Délai de réponse variable'
    - section: ''
      item: 'Support-Chat ??: Délai de réponse variable'
      free: X
      own: V
      retailer: V
      partner: V
      name: 'Support-Chat ??: Délai de réponse variable'
    - section: ''
      item: 'Support-Téléphone ??: Délai de réponse variable'
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Support-Téléphone ??: Délai de réponse variable'
    - section: ''
      item: Support prioritaire 48h
      free: X
      own: X
      retailer: ":opt:sup48:265:"
      partner: V
      name: Support prioritaire 48h
    - section: ''
      item: Support prioritaire 12h
      free: X
      own: X
      retailer: ":opt:sup12:1340:"
      partner: V
      name: Support prioritaire 12h
    - section: ''
      item: Atelier privatisé
      free: X
      own: X
      retailer: ":opt:atelier:500:"
      partner: V
      name: Atelier privatisé
    - section: ''
      item: 'POC ??: répondant aux besoins client, via 2 sessions de 4h'
      free: X
      own: X
      retailer: ":opt:POC:2240:"
      partner: V
      name: 'POC ??: répondant aux besoins client, via 2 sessions de 4h'
    - section: ''
      item: Co-developpement
      free: X
      own: X
      retailer: ":opt:codev:4860:"
      partner: V
      name: Co-developpement
    - section: ''
      item: 'Communication digitale  ??:  2 lives webinar par an, Logo sur notre site
        dans la rubrique Partenaire, Logos sur nos supports Print,2 Newsletters par
        an, 12 publications sur nos réseaux sociaux '
      free: X
      own: X
      retailer: X
      partner: V
      name: 'Communication digitale  ??:  2 lives webinar par an, Logo sur notre site
        dans la rubrique Partenaire, Logos sur nos supports Print,2 Newsletters par
        an, 12 publications sur nos réseaux sociaux '
    toggle: false
    free: X
    own: "…"
    retailer: "…"
    partner: "…"
---
::



## TODO

* explain prop `toggle`
* explain special values like `X`, `V`, `∞`
* explain price toggle per month/year
* explain options like `":opt:theme:1780:`
* explain `button` and `button_url`
