const sqlite3 = require("sqlite3");

export const Criar = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('local.sqlite');

    db.serialize(() => {
      db.run('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)');
      db.run('INSERT INTO users VALUES (?, ?)', [1, 'John']);
      db.run('INSERT INTO users VALUES (?, ?)', [2, 'Jane']);

      const result = [];

      db.each('SELECT id, name FROM users', (err, row) => {
        if (err) {
          reject(err);
        }

        if (row) {
          result.push({ id: row.id, name: row.name });
        }
      }, () => {
        resolve({ data: result });
      });
    });

    db.close((err) => {
      if (err) {
        reject(err);
      }
      console.log('Banco de dados fechado.');
    });
  });
};
