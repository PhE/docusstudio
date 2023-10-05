# \<ppw-checklist-result\>

To show a checklist result.



## path prop

The checklist result can be specified with a path to a JSON or YAML file in the `url` property.

The `url` is fetch from nuxt content (`/content` folder)
and if not found then from a classic fetch (`/public` folder).
In both case the checkresult can be in JSON or YAML format.

Checklist result from a YAML URL :

::code-group
  ::code-block{label="Preview"}
    :ppw-checklist-result-static{path="/docs/front/components/_carnet_paul"}
  ::

  ```markdown [Code]
  ::code-block{label="Preview"}
    :ppw-checklist-result-static{path="/docs/front/components/_carnet_paul"}
  ::
  ```
::


Checklist result from a JSON URL :

::code-group  
  ::code-block{label="Preview"}
    :ppw-checklist-result-static{path="/docs/front/components/_carnet_pierre"}
  ::

  ```markdown [Code]
  ::code-block{label="Preview"}
    :ppw-checklist-result-static{path="/docs/front/components/_carnet_pierre"}
  ::
  ```
::

## result prop

You can inject check result directly in the component
with a YAML syntax in the `result` property :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    result:
        id: root
        name: I am root
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step1
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  result:
      id: root
      name: I am root
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step1
        name: This is step 2
        status: KO
  ---
  ::
  ```
::


## show_root

Show the root node or start at its children.
When `show_root: true` :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    show_root: true
    result:
        id: root
        name: I am root
        status: KO
        children:
        - id: step1
          name: This is step children 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step children 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  show_root: true
  result:
      id: root
      name: I am root
      status: KO
      children:
      - id: step1
        name: This is step children 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step children 2
        status: KO
  ---
  ::
  ```
::


When `show_root: false` (default) :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    show_root: false
    result:
        id: root
        name: I am root
        status: KO
        children:
        - id: step1
          name: This is step children 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step children 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  show_root: false
  result:
      id: root
      name: I am root
      status: KO
      children:
      - id: step1
        name: This is step children 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step children 2
        status: KO
  ---
  ::
  ```
::


## hide_modes_selector

When `hide_modes_selector: true` :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    hide_modes_selector: true
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  hide_modes_selector: true
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::


When `hide_modes_selector: false` (default) :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    hide_modes_selector: false
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  hide_modes_selector: false
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::


## mode prop

You can set view mode with the `mode` props
(default is `basic`).
Available modes :
* `simple`
* `basic`
* `nonconformity`
* `datav`
* `semantic`
* `timeline`
* `geographic`
* `chat`
* `notebook`


### mode simple

In this `simple` mode the minimum info is displayed.

KO sample :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    class: h-96
    mode: simple
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  class: h-96
  mode: simple
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::


OK sample2 :

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    class: h-96
    mode: simple
    result:
        status: OK
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2b
          name: This is step 2
          status: OK
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  class: h-96
  mode: simple
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::

### mode basic

This is the default mode.

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    mode: basic
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  mode: basic
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::

### mode datav

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    mode: datav
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  mode: datav
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::
  ```
::


### mode nonconformity

::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    mode: nonconformity
    result:
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  mode: nonconformity
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::all
  ```
::



## mode semantic


## mode timeline


## mode geographic


## mode chat


## mode notebook


## auto propagate status

Each node can have a result prop with the values `OK`, `KO`, `WARNING`,  ` INFO`.

With the `auto_propagate_status` prop set to `True` (default) the `status` value will be inferred with those rules :

For children to parent walk :

* set the status to the *max* encountered status of the children (respecting the order `INFO` < `WARNING` < `OK` < `KO`)
* if not set use curernt node status if any
* if not set use the parent status if any
* if not set, set it to `OK` 


::code-group
  ::code-block{label="Preview"}
    ::ppw-checklist-result-static
    ---
    hide_modes_selector: true
    result:
        children:
        - id: step1
          name: This is step 1
        - id: step2
          name: This is step 2
          status: KO
    ---
    ::
  ::
  
  ```markdown [Code]
  ::ppw-checklist-result-static
  ---
  mode: nonconformity
  result:
      status: KO
      children:
      - id: step1
        name: This is step 1
        icon: "mdi:file-arrow-up-down-outline"
        status: OK
      - id: step2
        name: This is step 2
        status: KO
  ---
  ::all
  ```
::

## Not implemented yet

* show only a given tree node
* open the tree node at a specified location
* in YAML prop, allow `$ref`to include part from other file
* auto propagate result
