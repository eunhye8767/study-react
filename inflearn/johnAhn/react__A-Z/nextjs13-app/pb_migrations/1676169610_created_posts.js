migrate((db) => {
  const collection = new Collection({
    "id": "b8aetft1olccvub",
    "created": "2023-02-12 02:40:10.447Z",
    "updated": "2023-02-12 02:40:10.447Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vfoztom0",
        "name": "title",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b8aetft1olccvub");

  return dao.deleteCollection(collection);
})
