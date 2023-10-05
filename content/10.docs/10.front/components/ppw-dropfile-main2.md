# \<ppw-dropfile-main2\>

Upload files.


Dropped files are store in remote S3 bucket.

::code-group
  ::code-block{label="Preview"}
    :ppw-dropfile-main2{sessionPath="demo/dropfile" uploadUrl="api/files/session/demo/dropfile"}
  ::

  ```markdown [Code]
  ::code-block{label="Preview"}
    :ppw-checklist-result-static{path="/docs/front/components/_carnet_paul"}
  ::
  ```
::

## uploadUrl prop

Option POST URL triggered for each dropped file.

## sessionPath prop

## showFiles prop

Populate with existing files if `showFiles` is `true`
(default).


## TODO

* [ ] set prefix folder
* [ ] extension filter
* [ ] fake mode with predefined files