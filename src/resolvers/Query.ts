import { users } from '../db'

export default {
  Query: {
    users: () => users,
  },
}
