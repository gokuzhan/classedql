# ClassedQL

ClassedQL is a promise-based Node.js ORM for MySQL.

## Installation

```node
npm install --save classedql
```

## Usage

```js
const ClassedQL = require('classedql').default;
const { Collection, DataTypes } = require('classedql');

class User extends Collection {}

User.build({
  id: {
    type: DataTypes.BIGINTEGER.set({ length: 20, unsigned: true }),
    length: 20,
    auto_increment: true,
    primary_key: true,
    comment: 'identity of the row',
  },
  name: {
    type: DataTypes.CHAR.set({ length: 60 }),
    length: 20,
    null: true,
  },
});

const connection = new ClassedQL('database', 'user', 'password');

connection.initialize({ User });
```
