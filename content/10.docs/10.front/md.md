# Markdown 

## Titres

Pour créer un titre, il faut utiliser signe dièse (#) en début de ligne :

Exemple:

    # Texte de niveau 1 (sera le titre de la page)
    ## Texte de niveau 2
    ### Texte de niveau 3
    #### Texte de niveau 4
    ##### Texte de niveau 5
    ###### Texte de niveau 6    

Contenu affiché:
# Texte de niveau 1 (sera le titre de la page)
## Texte de niveau 2
### Texte de niveau 3
#### Texte de niveau 4
##### Texte de niveau 5
###### Texte de niveau 6  

---

## Texte en **gras** et/ou *italique*

- Pour mettre le texte en italique, entourez-le d’astérisques uniques :

Exemple:

    *Lorem Ipsum* 

Contenu affiché:

 *Ce texte est en italique*


- Pour mettre le texte en gras, entourez-le de deux astérisques. 

Exemple:

    **Lorem Ipsum** 

 
Contenu Affiché:

**Ce texte est en gras**

- Pour mettre le texte en gras et en italique, entourez-le de deux astérisques :

Exemple:
    
    ***Lorem Ipsum*** 

Contenu affiché:

 ***Ce texte est en italique***

---

## Listes numérotées et listes à puces

- Pour créer des listes numérotées, commencez une ligne par 1. ou 1), 
mais n’utilisez pas les deux formats dans la même liste. Il n’est pas nécessaire de spécifier les nombres. GitHub le fait pour vous.

Exemple:

    1.Lorem Ipsum
    1.Lorem Ipsum
    1.Lorem Ipsum


1. Lorem Ipsum
1. Lorem Ipsum
1. Lorem Ipsum

- Pour créer des **listes à puces**, commencez une ligne par * ou - ou +, mais ne mélangez pas les formats dans la même liste. (Ne mélangez pas les formats de puces, tels que * et +, dans le même document.)

Exemple:

    -Lorem Ipsum
    *Lorem Ipsum
    +Lorem Ipsum

Contenu affiché :

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum


## Footnote

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

    
## Tableaux

 Il est recommandé d’éviter d’utiliser plusieurs lignes dans les tableaux. Vous pouvez créer des tableaux à l’aide de la barre verticale (|) pour délimiter les colonnes et les lignes. Les traits d’union créent l’en-tête de chaque colonne, tandis que les barres verticales séparent chaque colonne. Insérez une ligne vierge avant votre tableau afin qu’il soit rendu correctement.

 Exemple: 

    |X|X|X|
    |---|---|---|
    |Ligne 1 | Colonne 2 | Colonne 3 |
    |Ligne 2 | Ligne 2 Colonne 2 | Ligne 2 Colonne 3 |

Contenu affiché:

|X|X|X|
|---|---|---|
|Ligne 1 | Colonne 2 | Colonne 3 |
|Ligne 2 | Ligne 2 Colonne 2 | Ligne 2 Colonne 3 |

## Liens

La syntaxe Markdown d’un lien inséré se compose de la partie [link text], qui est le texte qui sera affiché sous forme d’hyperlien, suivie de la partie (file-name.md), qui est l’URL ou le nom de fichier lié à :

Exemple:

    [Nom du lien](nom-du-fichier.md)

ou
    
    [Nom du lien](URL)



Liens
La syntaxe Markdown d’un lien inséré se compose de la partie [link text], qui est le texte qui sera affiché sous forme d’hyperlien, suivie de la partie (file-name.md), qui est l’URL ou le nom de fichier lié à :

Contenu affiché:

[Page Documentation](documentation.md) 

[Paxpar Youtube](https://www.youtube.com/channel/UC33eRipJqRuqWTpTMm66obQ?app=desktop)

## Images

Même principe que pour les liens mais on rajoute un ! devant les crochets.

Exemple:

Contenu affiché:

![Nom de l'image](URL de l'image)

![Paxpar Youtube](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAXYClSDK1Z0aoRE7freBsOiC-eGC43wzY6hy3bgVkw&s)



## Emoticon

Use unicode emoticon
from this [wikipedia page](https://fr.wikipedia.org/wiki/Table_des_caract%C3%A8res_Unicode/U1F300) :
or with this [search tool](https://unicode-table.com/en/sets/emoji/) :

* 💣, 💀 : for errors
* ⚠🚨 : for warning
* 🐛🔧 : for debug
* ┉ : as line sep
* 👤 : for user
* 👥 : for user group
* 📂 : for folder/path
* 📄 : for file/document
* ⚡ :  for messaging/broker
* 📊 : for metrics
* 📎 : for attachment
* 📐 : for schema/model
* 🌍 : for internet access
* 🖕 : not implemented
* 🔎 : for search/select
* 🔏 : for signature
* 📜 : for script
* 🕐 : for time/performance
* 📝 : for form
* 👮 : for security (auth/perm)
* 💅 : for template
* 🛠 : for tool
* 🏃 : for service/access/portal
* ⛁ : for reference object storage
* 💢 : for python dynamic module
* 🐣 : creation / new instance
* ✅ : check success or OK
* ❌ : check fail or error
* ✨ : great news/event (new user)
* 🔔 : webhook/event
* 🌀🌀🌀 : Work in progress
* 🌟🌟🌟 : for self-esteem ;-)

For emoticon in git messages or source code, please consider [conventional commits](https://www.conventionalcommits.org/)
and [gitmoji](https://gitmoji.dev/).
