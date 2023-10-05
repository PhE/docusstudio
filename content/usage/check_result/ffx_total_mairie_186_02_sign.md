::ppw-checklist-result-static
---
result:
  id: root
  status: OK
  children:
    - id: sous-step1
      name: Conformité signature
      icon: "mdi:pen"
      status: OK
      children:
       - name: "1 signature PAdES"
         icon: mdi:magnify-remove-outline
         status: OK
    - id: sous-step2
      name: Profil basic - 18 mentions obligatoires
      icon: "mdi:file-arrow-up-down-outline"
      status: OK
      children:
        - name: N° Siren client (Numéro d’identité mentionné au premier alinéa de l’article R 123-221 du code de commerce)
          icon: mdi-numeric
          status: OK
        - name: Date d’émission de la facture
          icon: mdi-update
          status: OK
        - name: Numéro unique de la facture
          icon: mdi-numeric
          status: OK
        - name: Total hors taxe par taux d'imposition de la taxe
          icon: mdi-more
          status: OK
        - name: Montant de la taxe correspondante par taux d’imposition
          icon: mdi-more
          status: OK
        - name: Taux de TVA applicable (à différencier si multiples)
          icon: mdi-percent
          status: OK             
        - name: Somme totale à payer HT
          icon: mdi-more
          status: OK             
        - name: Montant de la taxe à payer
          icon: mdi-more
          status: OK
        - name: En cas d’exonération, la référence à la disposition légale
          icon: mdi-format-annotation-plus
          status: OK
        - name: Mention “Auto-facturation“
          icon: mdi-text
          status: OK
        - name: Mention “Autoliquidation“
          icon: mdi-text
          status: OK            
        - name: Numéro d’identité mentionné au premier alinéa de l’article R 123-221 du code de commerce (SIREN) – assujetti
          icon: mdi-numeric
          status: OK
        - name: Numéro individuel d’identification prévu à l’<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914646/2022-01-01">article 286x ter du Code général des impôts</a> (n°TVA intracommunautaire) – représentant fiscal de l’assujetti
          icon: mdi-google-circles-communities
          status: OK
        - name: "Mention catégorie de l’opération : livraison de biens (LB) / prestation de services (PS) /double (LBPS)"
          icon: mdi-mushroom
          status: OK
        - name: Numéro de la facture rectifiée en cas d’émission d’une facture rectificative
          icon: mdi-numeric
          status: OK
        - name: Option pour le paiement de la taxe d’après les débits
          icon: mdi-format-list-numbers
          status: OK
        - name:  Code/désignation devise de la facture
          icon: mdi-currency-eur
          status: OK
        - name: Référence à un régime particulier visé aux 15 et 16 du I de l’article 242 nonies A
          icon: mdi-certificate
          status: OK
        - name: Date de l’acompte versé si elle est différente de la date d’émission de la facture
          icon: mdi-update
          status: OK
    - id: sous-step2
      name: Profil étendu - 26 mentions obligatoires
      icon: mdi:file-arrow-up-down-outline
      status: KO
      children:
        - name: Numéro individuel d’identification prévu à l’article 286 ter du Code général des impôts (n°TVA intracommunautaire) – client
          icon: mdi-google-circles-communities
          status: KO
        - name: Date de la livraison du bien ou de la fin d’exécution de la prestation
          icon: mdi-update
          status: KO
        - name: Numéro individuel d’identification prévu à l’article 286 ter du Code général des impôts (n°TVA intracommunautaire) – assujetti ou assujetti unique
          icon: mdi-google-circles-communities
          status: KO
        - name: Pays – assujetti
          icon: mdi-flag
          status: KO
        - name: Numéro individuel d’identification prévu à l’article 286 ter du Code général des impots (n° TVA intracommunautaire) – attribué au membre de l’assujetti unique
          icon: mdi-google-circles-communities
          status: KO
        - name: Pays – client
          icon: mdi-flag
          status: KO
        - name: Mention 'Membre d’un assujetti unique'
          icon: mdi-account
          status: KO                                   
---
::