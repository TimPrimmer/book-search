import gql from 'graphql-tag';


export const GET_ME = gql`
    query { 
    me 
    { 
      email
      username
      savedBooks {
        title
      }
    }
  }
`;

export const ALL_USERS = gql`
    query { 
    allUsers 
    { 
      email
      username
      savedBooks {
        title
      }
    }
  }
`;
