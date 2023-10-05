# \<ppw-showcase-check\>



## pdf props

::code-group
  ::code-block{label="Preview"}
    ::ppw-showcase-check
    ---
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-showcase-check
    ---
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
    ---
    ::
  ```
::


## conversation prop

You can define a conversation that will be shown
when no PDF are selected :

::code-group
  ::code-block{label="Preview"}
    ::ppw-showcase-check
    ---
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-showcase-check
    ---
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
    ---
    ::
  ```
::


## pdf conversation prop

You can attach a conversation to each PDF document.
The conversation is shown when the PDF is selected :

::code-group
  ::code-block{label="Preview"}
    ::ppw-showcase-check
    ---
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Paul"
          - zina: "Is it OK ?"
          - peggy: "Yes it is."
          - zina: ":-)"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Pierre"
          - zina: "Is it OK ?"
          - peggy: "No it is not OK !"
          - zina: "What is the problem ?"
          - peggy: "The problem is ..."
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-showcase-check
    ---
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Paul"
          - zina: "Is it OK ?"
          - peggy: "Yes it is."
          - zina: ":-)"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Pierre"
          - zina: "Is it OK ?"
          - peggy: "No it is not OK !"
          - zina: "What is the problem ?"
          - peggy: "The problem is ..."
    ---
    ::
  ```
::


## animate prop

You can enable animation with `animate` set to `true`
(The default is `false`) :

::code-group
  ::code-block{label="Preview"}
    ::ppw-showcase-check
    ---
    animate: true
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Paul"
          - zina: "Is it OK ?"
          - peggy: "Yes it is."
          - zina: ":-)"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Pierre"
          - zina: "Is it OK ?"
          - peggy: "No it is not OK !"
          - zina: "What is the problem ?"
          - peggy: "The problem is ..."
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-showcase-check
    ---
    animate: true
    conversation:
      - zina: "Give me some documents to check ..."
      - peggy: "Here are 2 documents I received"
      - zina: "Are they OK ?"
      - peggy: "I don't know, click them to check ..."
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_paul"
        name: "Paul"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Paul"
          - zina: "Is it OK ?"
          - peggy: "Yes it is."
          - zina: ":-)"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        check_result: "/docs/front/components/_carnet_pierre"
        name: "Pierre"
        conversation:
          - zina: "Which document is it ?"
          - peggy: "It's a document from Pierre"
          - zina: "Is it OK ?"
          - peggy: "No it is not OK !"
          - zina: "What is the problem ?"
          - peggy: "The problem is ..."
    ---
    ::
  ```
::


## TODO

* align check content top
* describe pdfs prop
* add animation for PDF drag-n-drop
* add animation for PDF check progress bar
* disable check prop
* disable preview prop

