const users = [
  { userId: 1, name: "Hamidreza", phone: "09194106814", email: "a@b.com" },
  { userId: 2, name: "Edvard", phone: "09194106814", email: "a@b.com" },
  { userId: 3, name: "Nicole", phone: "09194106814", email: "a@b.com" },
  { userId: 4, name: "Hermann", phone: "09194106814", email: "a@b.com" },
  { userId: 5, name: "Paul", phone: "09194106814", email: "a@b.com" },
];

export const getUsers = () => {
  return users;
};

export const getUserId = (number) => {
  return users.find((user) => user.userId === number);
};
