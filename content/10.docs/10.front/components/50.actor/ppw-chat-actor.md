# \<ppw-chat-actor\>


## name prop


::code-group
:::code-block{label="Preview"}

:ppw-chat-actor{name="alice"}
:ppw-chat-actor{name="zina"}

:::

```markdown [Code]

:ppw-chat-actor{name="alice"}
:ppw-chat-actor{name="zina"}

```
::

## hidename prop

::code-group
:::code-block{label="Preview"}
:ppw-chat-actor{name="zina" hidename}
:ppw-chat-actor{name="francoise" hidename}
:ppw-chat-actor{name="zina" hidename}
:::

```markdown [Code]
:ppw-chat-actor{name="alice" hidename}
:ppw-chat-actor{name="francoise" hidename}
:ppw-chat-actor{name="zina" hidename}

```
::


## size prop

Size in tailwind mode (default is 5).

::code-group
:::code-block{label="Preview"}
:ppw-chat-actor{name="zina" hidename}
:ppw-chat-actor{name="zina" hidename size=8}
:ppw-chat-actor{name="zina" hidename size=10}
:ppw-chat-actor{name="zina" hidename size=12}
:ppw-chat-actor{name="zina" hidename size=16}


:::

```markdown [Code]
:ppw-chat-actor{name="zina" hidename}
:ppw-chat-actor{name="zina" hidename size=8}
:ppw-chat-actor{name="zina" hidename size=10}
:ppw-chat-actor{name="zina" hidename size=12}
:ppw-chat-actor{name="zina" hidename size=16}

```
::

## link prop

To let a click naviagte to the actor page set prop `link` to `true` (default is `false`).


::code-group
:::code-block{label="Preview"}

:ppw-chat-actor{name="zina" link}
:ppw-chat-actor{name="alice" link}

:::

```markdown [Code]
:ppw-chat-actor{name="zina" link}
:ppw-chat-actor{name="alice" link}
```
::

## actor avatar image

For example, the actor avatar image  is `/public/avatar/bob.png`
for the actor `bob`.

Here are some of the available actors :

:ppw-chat-actor{name="adrien"}
:ppw-chat-actor{name="alain"}
:ppw-chat-actor{name="alice"}
:ppw-chat-actor{name="francoise"}
:ppw-chat-actor{name="gerard"}
:ppw-chat-actor{name="guillaume"}
:ppw-chat-actor{name="guillaumep"}
:ppw-chat-actor{name="jacques"}
:ppw-chat-actor{name="guillaumep"}
:ppw-chat-actor{name="jacques"}
:ppw-chat-actor{name="jeanL"}
:ppw-chat-actor{name="ludovic"}
:ppw-chat-actor{name="marc"}
:ppw-chat-actor{name="nadege"}
:ppw-chat-actor{name="nadine"}
:ppw-chat-actor{name="patrick"}
:ppw-chat-actor{name="patrickM"}
:ppw-chat-actor{name="peggy"}
:ppw-chat-actor{name="sophie"}
:ppw-chat-actor{name="thierry"}
:ppw-chat-actor{name="valerie"}
:ppw-chat-actor{name="zina"}

## inline usage

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  :ppw-chat-actor{name="alice"} lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 

## not implemented

* show/hide name
* id card format
* link to content page
* tooltip
