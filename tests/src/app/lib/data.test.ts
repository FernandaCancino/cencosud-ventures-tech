import { IUser } from '../../../../src/app/lib/definitions';
import { fetchUsers, fetchFilteredUsers } from '../../../../src/app/lib/data';

const dataMock: IUser[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(dataMock),
  } as Response)
) as jest.Mock;

describe('test in data - fetchUsers', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
});

  test('should fetch users successfully', async () => {
    const users = await fetchUsers();
    expect(users).toBeInstanceOf(Array);
    expect(users).toHaveLength(2);
    expect(users[0]).toHaveProperty('name', 'Leanne Graham');
    expect(users[0]).toHaveProperty('email', 'Sincere@april.biz');
  });

  test('should handle fetch error', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    await expect(fetchUsers()).rejects.toThrow('cannot get users');
  });
});

describe('test in data - fetchFilteredUsers', () => {

  test('should return filtered users based on query', () => {
    const query = 'Leanne';
    const result = fetchFilteredUsers(dataMock, query);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('name', 'Leanne Graham');
  });

  test('should return an empty array if no users match the query', () => {
    const query = 'nonexistent';
    const result = fetchFilteredUsers(dataMock, query);
    expect(result).toHaveLength(0);
  });

  test('should be case-insensitive when filtering', () => {
    const query = 'Ervin';
    const result = fetchFilteredUsers(dataMock, query);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('name', 'Ervin Howell');
  });
});