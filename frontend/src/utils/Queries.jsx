import {gql} from "@apollo/client"
const BUY_CARDS = gql`

query GET_BUY_CARDS{
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                Location
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Street
          Rooms
          Bedrooms
          Bathrooms
          Price
          Rent
          Short_Address
        }
      }
    }
  }
`;

const RENT_CARDS = gql`
query GET_RENT_CARDS{
  houses(
    filters: { categories: { Category: { contains: "Rent" } } }
    pagination: { limit: 6 }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              Location
            }
          }
        }
        Preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        Rent
        Short_Address
      }
    }
  }
}
`;

const ID_CARD = gql`
query GET_ID_CARD($id: ID){
  houses(
    filters: { id: { eq: $id } }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              Location
            }
          }
        }
        Preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        Rent
        Short_Address
        Description
      }
    }
  }
}
`;
export {BUY_CARDS, RENT_CARDS, ID_CARD};