# 🍁🍂🥧 It's gonna be OK

Generator web app API.

```
npm run build

npm run start-ts
```

[http://localhost:3000/](http://localhost:3000/)

## Endpoints:
- [/ids?ids=1,3,120,90,7](http://localhost:3000/ids?ids=1,3,120,90,7)
- [/by?hash=MSwzLDEyMCw5MCw3](http://localhost:3000/by?hash=MSwzLDEyMCw5MCw3)
- [/generate?ids=1,3,120,90,7](http://localhost:3000/generate?ids=1,3,120,90,7)
- [/id?id=2](http://localhost:3000/id?id=2)

---

> ## REST API на Node со следующими эндпоинтами:
>
> 1. GET `ids=*перечисление идентификаторов*, id — число`
   Пример: `/ids=1,3,120,90,7`
   Принимает произвольное количество идентификаторов
   Отдает JSON вида `[0: {'name': 'что-то', 'description': 'что-то', image: '/path/to/image.svg'}, 1: {'name': 'что-то', 'description': 'что-то', image: '/path/to/image.svg'} ]`, где ключи и есть id.
>
> 2. GET `by=*хэш, сгенерированный из параметров*`
   Пример: `/hash=wHy3r7jfef30jhs`
   Отдает то же самое, что первый эндпоинт.
>
> 3. GET `generate=*перечисление идентификаторов*`
   Пример: `/ids=1,3,120,90,7`
   Принимает произвольное количество идентификаторов
   Отдает сгенерированный из них хэш, например: `wHy3r7jfef30jhs`
>
> 4. GET `id=*один идентификатор*`
   Пример: `/id=2`
   Отдает JSON вида `{'id': 2, 'name': 'что-то', 'description': 'что-то', image: '/path/to/image.svg', 'links': ['массив', 'строк']}`, где ключи и есть id.
>
> Сам список этих айдишников с описаниями, откуда будут отдаваться данные, сделать пока без базы, а просто в JSON файлах для теста.
