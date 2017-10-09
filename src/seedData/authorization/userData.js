const bcrypt = require('bcryptjs');
const faker = require('faker');

const randomStr = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const password = bcrypt.hashSync(
  'Abc123@@',
  parseInt(process.env.SALT_FACTOR, 10),
);
const versionKey = bcrypt.hashSync(
  randomStr(),
  parseInt(process.env.SALT_FACTOR, 10),
);

const usersData = [
  {
    firstname: 'Admin',
    lastname: 'Mr.',
    email: 'admin@gmail.com',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Organizer',
    lastname: 'Mr.',
    email: 'organizer@gmail.com',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Speaker',
    lastname: 'Mr.',
    email: 'speaker@gmail.com',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Participant',
    lastname: 'Mr.',
    email: 'participant@gmail.com',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Tri',
    lastname: 'Pham Van',
    email: 'pvtri96@gmail.com',
    password,
    gender: 'male',
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Thuc',
    lastname: 'Tran Van',
    email: 'tranvanthuc365@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Vinh',
    lastname: 'Lu Thanh',
    email: 'luthanhvinhdtu@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Manh',
    lastname: 'Le Quoc',
    email: 'lequocmanh2010@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Minh',
    lastname: 'Thai Thi Hong',
    email: 'minhthai0124@gmail.com',
    gender: 'female',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Dung',
    lastname: 'Le Thi Thuy',
    email: 'dungle1811@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Khanh',
    lastname: 'Ly Bao',
    email: 'baokhanh7m@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Khanh',
    lastname: 'Le Dinh Nhat',
    email: 'lednhatkhanh@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Man',
    lastname: 'Nguyen Duc',
    email: 'mannd@duytan.edu.vn',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Supporter',
    lastname: 'Mr.',
    email: 'supporter@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'An',
    lastname: 'Nguyen Hong',
    email: 'hongan@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Moderator',
    lastname: 'Mr.',
    email: 'moderator@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Huong',
    lastname: 'Tran Thi',
    email: 'thihuong@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'ticket',
    lastname: 'checker',
    email: 'ticket@duytan.edu.vn',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Tien',
    lastname: 'Tran Minh',
    email: 'minhtien@duytan.edu.vn',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Athor',
    lastname: 'Mr.',
    email: 'author@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Hoang',
    lastname: 'Tran Minh',
    email: 'minhhoang@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Reviewer',
    lastname: 'Mr.',
    email: 'reviewer@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Dat',
    lastname: 'Tran Tien',
    email: 'tiendat@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    firstname: 'Ming',
    lastname: 'Nguyen Tien',
    email: 'tienminh@gmail.com',
    gender: 'male',
    password,
    version_key: versionKey,
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

for (let i = 1; i < 111; i += 1) {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  usersData.push({
    firstname,
    lastname,
    email: faker.internet.email(firstname, lastname, 'gmail'),
    gender: faker.random.arrayElement(['male', 'female', 'unknown']),
    password,
    version_key: versionKey,
    bio: faker.lorem.sentence(),
    language: 'Vietnamese',
    created_at: new Date(),
    updated_at: new Date(),
  });
}

module.exports = usersData;
