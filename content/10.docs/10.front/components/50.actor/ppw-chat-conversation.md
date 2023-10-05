# \<ppw-chat-conversation\>


For a [little conversation](https://www.youtube.com/watch?v=Zx1_6F-nCaw) with [our actors](ppw-chat-actor):

::code-group
:::code-block{label="Preview"}
    ::ppw-chat-conversation
    ---
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
:::

```markdown [Code]
    ::ppw-chat-conversation
    ---
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
```
::

## Same actor speaking

Please note that following lines with the same actor will stay
on the same side of the conversation :

::code-group
:::code-block{label="Preview"}
    ::ppw-chat-conversation
    ---
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine !"
        - peggy: " ...and you ?"
        - zina: ":-)"
    ---
    ::
:::

```markdown [Code]
    ::ppw-chat-conversation
    ---
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine !"
        - peggy: " ...and you ?"
        - zina: ":-)"
    ---
    ::
```
::


## right prop

Start the conversation on the right with the `right` prop (default is `false`)  :

::code-group
:::code-block{label="Preview"}
    ::ppw-chat-conversation
    ---
    right: true
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
:::

```markdown [Code]
    ::ppw-chat-conversation
    ---
    right: true
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
```
::


## animate prop

Animate the conversation (default is `false`)  :
(switch from code to preview to trigger again the animation)

::code-group
:::code-block{label="Preview"}
    ::ppw-chat-conversation
    ---
    animate: true
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
:::

```markdown [Code]
    ::ppw-chat-conversation
    ---
    animate: true
    conversation:
        - zina: "Hello, my name is Zina"
        - peggy: "Hello, my name is Peggy"
        - zina: "How do you do ?"
        - peggy: "Fine, and you ?"
        - zina: ":-)"
    ---
    ::
```
::

## animate_period prop

Tweak the time between each sentence animation with
the `animate_period` prop (default is 1) in seconds :


::code-group
:::code-block{label="Preview"}

Slow conversation : 

::ppw-chat-conversation
---
animate: true
animate_period: 2
conversation:
    - zina: "Hello, my name is Zina"
    - peggy: "Hello, my name is Peggy"
    - zina: "How do you do ?"
    - peggy: "Slowly, and you ?"
    - zina: ":-)"
---
::

Fast conversation

::ppw-chat-conversation
---
animate: true
animate_period: 0.5
conversation:
    - zina: "Hello, my name is Zina"
    - peggy: "Hello, my name is Peggy"
    - zina: "How do you do ?"
    - peggy: "Quickly, and you ?"
    - zina: ":-)"
---
::

:::

```markdown [Code]

Slow conversation : 

::ppw-chat-conversation
---
animate: true
animate_period: 2
conversation:
    - zina: "Hello, my name is Zina"
    - peggy: "Hello, my name is Peggy"
    - zina: "How do you do ?"
    - peggy: "Slowly, and you ?"
    - zina: ":-)"
---
::

Fast conversation

::ppw-chat-conversation
---
animate: true
animate_period: 0.5
conversation:
    - zina: "Hello, my name is Zina"
    - peggy: "Hello, my name is Peggy"
    - zina: "How do you do ?"
    - peggy: "Quickly, and you ?"
    - zina: ":-)"
---
::

```
::



## not implemented

* add animation controls
* click to replay animation
* allow rich markdown content
* use actor component