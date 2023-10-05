# \<ppw-showcase-craft\>

## model prop

::code-group
  ::code-block{label="Preview"}
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ::
  
  ```markdown [Code]
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ```
::

## uploaded_files prop

You can simulate files uploaded with the `uploaded_files` property.

::code-group
  ::code-block{label="Preview"}
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ::
  
  ```markdown [Code]
    ::ppw-wizard-craft
    ---
    craft_id: frozen.paf.paf.craftform
    uploaded_files:
    - url: case/invoice/FA233.pdf
      name: facture1.pdf
      checklist_result: case/invoice/checklist_result_facture1.yaml
      form_data: case/invoice/form_data_facture1.yaml
    - url: case/invoice/FA234.pdf
      name: facture2.pdf
      checklist_result: case/invoice/checklist_result_facture2.yaml
      form_data: case/invoice/form_data_facture2.yaml
    ---
    ::
  ```
::

