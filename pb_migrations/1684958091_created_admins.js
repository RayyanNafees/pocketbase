migrate((db) => {
  const collection = new Collection({
    "id": "ny5rexykhjgme1t",
    "created": "2023-05-24 19:54:51.022Z",
    "updated": "2023-05-24 19:54:51.022Z",
    "name": "admins",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ny5rexykhjgme1t");

  return dao.deleteCollection(collection);
})
