# git repo

The `pp-ref-common` is store in a S3 bucket.

This bucket is synced in a git repo.
The main [git remote if on gitlab](https://gitlab.com/arundo-tech/pp-ref-common).


In a paxpar instance `/ref/common` is a folder that is synced with the S3 bucket.

In a dev environement `/ref/common` is a folder :

* that is the git repo
* that is git ignored from the parent project
* that could be sync with the S3 bucket (except the `.git` folder)


## S3 sync

`exclude-rclone.txt` contains the patterns of files/folders that will be skipped
in a s3 sync.

!!! TODO
    How to avoid rclone sync of `.git` folder

    How to avoid rclone sync erase of `.git` folder
