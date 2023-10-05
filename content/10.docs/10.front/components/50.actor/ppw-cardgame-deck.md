# \<ppw-cardgame-deck\>


A card game deck ...

::code-group
:::code-block{label="Preview"}
::ppw-cardgame-deck
---
cards:
    - 1516
    - 1513
    - 1514
    - 1204
    - 1205
---
::
:::

```markdown [Code]
::ppw-cardgame-deck
---
cards:
    - 1516
    - 1513
    - 1514
    - 1204
    - 1205
---
::
```
::


## arc

The cards can be distributed along an arc.

The default is `false`.

::code-group
:::code-block{label="Preview"}
::ppw-cardgame-deck
---
arc: true
cards:
    - 1516
    - 1513
    - 1514
    - 1204
    - 1205
---
::
:::

```markdown [Code]
::ppw-cardgame-deck
---
arc: true

cards:
    - 1516
    - 1513
    - 1514
    - 1204
    - 1205
---
::
```
::


## TODO

* random deck
* shuffle mode
* animation customization
* verso and recto on click (draw mode)
* fix broken profile picture
* fix broken text