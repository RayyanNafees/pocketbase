migrate((db) => {
  const collection = new Collection({
    "id": "jjckt1efphh251v",
    "created": "2023-05-24 20:12:17.287Z",
    "updated": "2023-05-24 20:12:17.287Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lm4urdr9",
        "name": "article",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jjckt1efphh251v");

  return dao.deleteCollection(collection);
})
