---
title: Kondisional pada "where" di ActiveRecord
date: "2020-03-20T17:46:00.000Z"
description: Kondisional pada "where" di ActiveRecord
---

## Kenapa dilakukan kondisional?

Untuk melakukan filter pada *where* jika memenuhi kondisi.

Misalnya: 

> ambil item dengan warna kuning jika ada query parameter "color" bernilai "yellow"

maka kodenya:

```ruby
items = Item.all
items = items.where(color: 'yellow') if params[:color]

items #=> <ActiveRecord::Relation [<Item id: 1, color: 'yellow'>]>
```

Query tidak akan dijalankan sampai variabel *items* digunakan.
