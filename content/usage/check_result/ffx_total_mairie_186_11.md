::ppw-checklist-result-static
---
result:
    id: root
    status: KO
    children:
      - id: sous-step1
        name: Conformité signature
        icon: "mdi:pen"
        status: KO
        children:
         - name: "0 signature PAdES"
           icon: mdi:magnify-remove-outline
           status: KO          
      - id: sous-step2
        name: Profil basic
        icon: "mdi:file-arrow-up-down-outline"
        status: KO
        children:
         - name: Ecart détecté sur le montant TVA de 1€
           icon: mdi-more
           status: KO
           children:
            - name: Montant lu - 1232,60€
              icon: mdi-calculator         
              status: KO
            - name: Montant calculé - 6168€x20%=1233,60€
              icon: mdi-calculator
              status: OK
---
::