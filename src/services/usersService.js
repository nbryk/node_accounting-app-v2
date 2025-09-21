let users = [];

function getAll() {
  return users;
}

function getById(id) {
  return users.find((user) => user.id === id);
}

function create(name) {
  if (!name || typeof name !== 'string') {
    const error = new Error('Name is required and must be a string');

    error.code = 400;
    throw error;
  }

  const newUser = { id: users.length + 1, name };

  users.push(newUser);

  return newUser;
}

function remove(id) {
  const initialLength = users.length;

  users = users.filter((user) => user.id !== id);

  return users.length < initialLength;
}

function update(id, name) {
  const user = users.find((person) => person.id === id);

  if (!user) {
    const error = new Error('User not found');

    error.code = 404;
    throw error;
  }

  if (!name || typeof name !== 'string') {
    const error = new Error('Name must be a string');

    error.code = 400;
    throw error;
  }

  user.name = name;

  return user;
}

function reset() {
  users = [];
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  reset,
};
