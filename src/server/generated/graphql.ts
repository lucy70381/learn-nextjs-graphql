import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Activity = {
  __typename?: 'Activity';
  address: Scalars['String'];
  city: Scalars['String'];
  class1: Scalars['String'];
  class2: Scalars['String'];
  cycle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  endTime: Scalars['String'];
  id: Scalars['ID'];
  location: Scalars['String'];
  name: Scalars['String'];
  organizer: Scalars['String'];
  picture: Picture;
  position: Position;
  startTime: Scalars['String'];
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Hotel = {
  __typename?: 'Hotel';
  address: Scalars['String'];
  city: Scalars['String'];
  class: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  picture: Picture;
  position: Position;
  serviceInfo?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Picture = {
  __typename?: 'Picture';
  PictureDescription1?: Maybe<Scalars['String']>;
  PictureDescription2?: Maybe<Scalars['String']>;
  PictureDescription3?: Maybe<Scalars['String']>;
  PictureUrl1?: Maybe<Scalars['String']>;
  PictureUrl2?: Maybe<Scalars['String']>;
  PictureUrl3?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  GeoHash: Scalars['String'];
  PositionLat: Scalars['Float'];
  PositionLon: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  hotel?: Maybe<Hotel>;
  hotels: Array<Hotel>;
  restaurants: Array<Restaurant>;
};


export type QueryActivitiesArgs = {
  amount?: InputMaybe<Scalars['Int']>;
};


export type QueryActivityArgs = {
  city: Scalars['String'];
};


export type QueryHotelArgs = {
  name: Scalars['String'];
};


export type QueryRestaurantsArgs = {
  amount?: InputMaybe<Scalars['Int']>;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  city: Scalars['String'];
  class: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  openTime: Scalars['String'];
  phone: Scalars['String'];
  picture: Picture;
  position: Position;
  websiteUrl: Scalars['String'];
};

export type GetActivitiesQueryVariables = Exact<{
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type GetActivitiesQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, name: string, description: string, location: string, address: string, organizer: string, startTime: string, endTime: string, cycle?: string | null, websiteUrl?: string | null, class1: string, class2: string, city: string, picture: { __typename?: 'Picture', PictureUrl1?: string | null, PictureDescription1?: string | null, PictureUrl2?: string | null, PictureDescription2?: string | null, PictureUrl3?: string | null, PictureDescription3?: string | null }, position: { __typename?: 'Position', PositionLon: number, PositionLat: number, GeoHash: string } }> };

export type ActivityByCityQueryVariables = Exact<{
  city: Scalars['String'];
}>;


export type ActivityByCityQuery = { __typename?: 'Query', activity?: { __typename?: 'Activity', id: string, name: string, description: string, location: string, address: string, organizer: string, startTime: string, endTime: string, cycle?: string | null, websiteUrl?: string | null, class1: string, class2: string, city: string, picture: { __typename?: 'Picture', PictureUrl1?: string | null, PictureDescription1?: string | null, PictureUrl2?: string | null, PictureDescription2?: string | null, PictureUrl3?: string | null, PictureDescription3?: string | null }, position: { __typename?: 'Position', PositionLon: number, PositionLat: number, GeoHash: string } } | null };

export type HotelByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type HotelByNameQuery = { __typename?: 'Query', hotel?: { __typename?: 'Hotel', id: string, name: string, city: string, description?: string | null, address: string, phone: string, websiteUrl?: string | null, class: string, serviceInfo?: string | null, picture: { __typename?: 'Picture', PictureUrl1?: string | null, PictureDescription1?: string | null, PictureUrl2?: string | null, PictureDescription2?: string | null, PictureUrl3?: string | null, PictureDescription3?: string | null }, position: { __typename?: 'Position', PositionLon: number, PositionLat: number, GeoHash: string } } | null };

export type GetHotelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHotelsQuery = { __typename?: 'Query', hotels: Array<{ __typename?: 'Hotel', id: string, name: string, city: string, description?: string | null, address: string, phone: string, websiteUrl?: string | null, class: string, serviceInfo?: string | null, picture: { __typename?: 'Picture', PictureUrl1?: string | null, PictureDescription1?: string | null, PictureUrl2?: string | null, PictureDescription2?: string | null, PictureUrl3?: string | null, PictureDescription3?: string | null }, position: { __typename?: 'Position', PositionLon: number, PositionLat: number, GeoHash: string } }> };

export type GetRestaurantsQueryVariables = Exact<{
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type GetRestaurantsQuery = { __typename?: 'Query', restaurants: Array<{ __typename?: 'Restaurant', id: string, name: string, description: string, address: string, phone: string, openTime: string, websiteUrl: string, class: string, city: string, picture: { __typename?: 'Picture', PictureUrl1?: string | null }, position: { __typename?: 'Position', PositionLon: number, PositionLat: number } }> };


export const GetActivitiesDocument = gql`
    query getActivities($amount: Int) {
  activities(amount: $amount) {
    id
    name
    description
    location
    address
    organizer
    startTime
    endTime
    cycle
    websiteUrl
    class1
    class2
    city
    picture {
      PictureUrl1
      PictureDescription1
      PictureUrl2
      PictureDescription2
      PictureUrl3
      PictureDescription3
    }
    position {
      PositionLon
      PositionLat
      GeoHash
    }
  }
}
    `;
export const ActivityByCityDocument = gql`
    query activityByCity($city: String!) {
  activity(city: $city) {
    id
    name
    description
    location
    address
    organizer
    startTime
    endTime
    cycle
    websiteUrl
    class1
    class2
    city
    picture {
      PictureUrl1
      PictureDescription1
      PictureUrl2
      PictureDescription2
      PictureUrl3
      PictureDescription3
    }
    position {
      PositionLon
      PositionLat
      GeoHash
    }
  }
}
    `;
export const HotelByNameDocument = gql`
    query hotelByName($name: String!) {
  hotel(name: $name) {
    id
    name
    city
    description
    address
    phone
    websiteUrl
    class
    serviceInfo
    picture {
      PictureUrl1
      PictureDescription1
      PictureUrl2
      PictureDescription2
      PictureUrl3
      PictureDescription3
    }
    position {
      PositionLon
      PositionLat
      GeoHash
    }
  }
}
    `;
export const GetHotelsDocument = gql`
    query getHotels {
  hotels {
    id
    name
    city
    description
    address
    phone
    websiteUrl
    class
    serviceInfo
    picture {
      PictureUrl1
      PictureDescription1
      PictureUrl2
      PictureDescription2
      PictureUrl3
      PictureDescription3
    }
    position {
      PositionLon
      PositionLat
      GeoHash
    }
  }
}
    `;
export const GetRestaurantsDocument = gql`
    query getRestaurants($amount: Int) {
  restaurants(amount: $amount) {
    id
    name
    description
    address
    phone
    openTime
    websiteUrl
    picture {
      PictureUrl1
    }
    position {
      PositionLon
      PositionLat
    }
    class
    city
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getActivities(variables?: GetActivitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetActivitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetActivitiesQuery>(GetActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getActivities', 'query');
    },
    activityByCity(variables: ActivityByCityQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ActivityByCityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActivityByCityQuery>(ActivityByCityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activityByCity', 'query');
    },
    hotelByName(variables: HotelByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HotelByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HotelByNameQuery>(HotelByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hotelByName', 'query');
    },
    getHotels(variables?: GetHotelsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHotelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHotelsQuery>(GetHotelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHotels', 'query');
    },
    getRestaurants(variables?: GetRestaurantsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRestaurantsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRestaurantsQuery>(GetRestaurantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRestaurants', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;