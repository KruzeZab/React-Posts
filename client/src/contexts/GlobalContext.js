import React, { createContext, useReducer } from 'react';
import userReducer from '../reducers/userReducer';

const initialState = {
  posts: [
    {
      id: 1,
      title: 'My Post',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi fugiat repellendus fuga quas perspiciatis quos ab neque molestias. Quod inventore tempore eos! Dolor facilis veniam, rem, beatae at officiis, consequuntur recusandae dignissimos velit molestiae excepturi quisquam mollitia! Consectetur rem recusandae voluptate repellat, perferendis tempore! Cum id neque consequuntur incidunt. Id.',
    },
    {
      id: 2,
      title: 'My Second Post',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi fugiat repellendus fuga quas perspiciatis quos ab neque molestias. Quod inventore tempore eos! Dolor facilis veniam, rem, beatae at officiis, consequuntur recusandae dignissimos velit molestiae excepturi quisquam mollitia! Consectetur rem recusandae voluptate repellat, perferendis tempore! Cum id neque consequuntur incidunt. Id.',
    },
  ],
  users: [
    {
      id: 1,
      username: 'larrking6',
      email: 'larry123@gmail.com',
      password: 'larry123',
    },
    {
      id: 2,
      username: 'david32',
      email: 'david123@gmail.com',
      password: 'david123',
    },
  ],
  userId: null,
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ users: state.users, userId: state.userId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
