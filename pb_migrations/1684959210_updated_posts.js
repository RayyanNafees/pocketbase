migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjckt1efphh251v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uwczfacz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjckt1efphh251v")

  // remove
  collection.schema.removeField("uwczfacz")

  return dao.saveCollection(collection)
})
