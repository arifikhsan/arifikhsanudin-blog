---
title: Cara menghilangkan file dari git yang sudah ter-commit pada gitignore
date: "2020-03-14T08:10:00.000Z"
description: Cara menghilangkan file dari git yang sudah ter-commit pada gitignore
---

Misalkan kita pada kondisi telah meng-commit suatu file, namun karena suatu hal, kita harus menghilangkan *tracking* git pada file tersebut. Maka kita perlu menuliskan nama file tersebut ke dalam file **.gitignore**.

Namun file tersebut masih ada dalam repository karena belum benar benar dihapus dari repository.

## Langkah 1: Commit semua perubahan kita

Pastikan semua kode terkommit dengan melakukan:

```bash

git add .
git commit -m "save"

```

## Langkah 2: Hapus semuanya dari repository

Gunakan perintah:

```bash

git rm -r --cached .

```

- **rm** adalah perintah *remove*.
- **-r** akan memperbolehkan penghapusan *recursive*.
- **--cached** akan menghapus file dari index. File akan tetap ada.
- **.** Titik ini maksudnya untuk memilih semua file.

Kita bisa memilih beberapa file dengan mengganti titik dengan nama file tersebut.

```bash

git rm --cached test.txt

```

## Langkah 3: Tambahkan semuanya

```bash

git add .

```

## Langkah 4: Commit

```bash

git commit -m ".gitignore fix"

```

## Langkah 5: Push

Push ke remote repository. 

```bash

git push

```

## Sumber

[Untrack files already added to git repository based on .gitignore](http://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/)
