import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('images.db');

export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        uri TEXT NOT NULL
      );`
    );
  });
};

export const insertImage = (name, uri) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Images (name, uri) VALUES (?, ?);',
        [name, uri],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getImages = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Images;',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};
