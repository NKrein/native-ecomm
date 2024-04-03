import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('session.db')

export const init = () => {
  return new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS sessions (
          localId TEXT PRIMARY KEY NOT NULL,
          email TEXT NOT NULL,
          token TEXT NOT NULL
        )`,
        [],
        (_, result) => res(result),
        (_, error) => rej(error)
      )
    })
  })
}

export const insertSession = ({ email, localId, token }) => {
  return new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO sessions (email, localId, token) VALUES (?, ?, ?)`,
        [email, localId, token],
        (_, result) => res(result),
        (_, error) => rej(error)
      )
    })
  })
}

export const fetchSession = () => {
  return new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM sessions`,
        [],
        (_, result) => res(result),
        (_, error) => rej(error)
      )
    })
  })
}

export const deleteSession = ({ localId }) => {
  return new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM sessions WHERE localId = ?`,
        [localId],
        (_, result) => res(result),
        (_, error) => rej(error)
      )
    })
  })
}