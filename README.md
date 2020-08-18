# ClassedQL

ClassedQL is a promise-based Node.js ORM for MySQL.

## Installation

```node
npm install --save classedql
```

## Usage

```js
const { Collection, DataTypes } = require('firebold');

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
```
