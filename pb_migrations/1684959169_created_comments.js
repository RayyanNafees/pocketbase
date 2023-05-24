migrate((db) => {
  const collection = new Collection({
    "id": "az7lon5o971qi8w",
    "created": "2023-05-24 20:12:49.746Z",
    "updated": "2023-05-24 20:12:49.746Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "24uiynl9",
        "name": "text",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("az7lon5o971qi8w");

  return dao.deleteCollection(collection);
})
