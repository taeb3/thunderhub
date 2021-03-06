/* eslint-disable */
import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type ChannelFeesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ChannelFeesQuery = (
  { __typename?: 'Query' }
  & { getChannels: Array<Types.Maybe<(
    { __typename?: 'channelType' }
    & Pick<Types.ChannelType, 'id' | 'transaction_id' | 'transaction_vout' | 'partner_public_key'>
    & { partner_node_info: (
      { __typename?: 'Node' }
      & { node: (
        { __typename?: 'nodeType' }
        & Pick<Types.NodeType, 'alias' | 'color'>
      ) }
    ), partner_fee_info?: Types.Maybe<(
      { __typename?: 'singleChannelType' }
      & { node_policies?: Types.Maybe<(
        { __typename?: 'nodePolicyType' }
        & Pick<Types.NodePolicyType, 'base_fee_mtokens' | 'fee_rate' | 'cltv_delta' | 'max_htlc_mtokens' | 'min_htlc_mtokens'>
      )>, partner_node_policies?: Types.Maybe<(
        { __typename?: 'nodePolicyType' }
        & Pick<Types.NodePolicyType, 'base_fee_mtokens' | 'fee_rate' | 'cltv_delta' | 'max_htlc_mtokens' | 'min_htlc_mtokens'>
      )> }
    )> }
  )>> }
);


export const ChannelFeesDocument = gql`
    query ChannelFees {
  getChannels {
    id
    transaction_id
    transaction_vout
    partner_public_key
    partner_node_info {
      node {
        alias
        color
      }
    }
    partner_fee_info {
      node_policies {
        base_fee_mtokens
        fee_rate
        cltv_delta
        max_htlc_mtokens
        min_htlc_mtokens
      }
      partner_node_policies {
        base_fee_mtokens
        fee_rate
        cltv_delta
        max_htlc_mtokens
        min_htlc_mtokens
      }
    }
  }
}
    `;

/**
 * __useChannelFeesQuery__
 *
 * To run a query within a React component, call `useChannelFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelFeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useChannelFeesQuery(baseOptions?: Apollo.QueryHookOptions<ChannelFeesQuery, ChannelFeesQueryVariables>) {
        return Apollo.useQuery<ChannelFeesQuery, ChannelFeesQueryVariables>(ChannelFeesDocument, baseOptions);
      }
export function useChannelFeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelFeesQuery, ChannelFeesQueryVariables>) {
          return Apollo.useLazyQuery<ChannelFeesQuery, ChannelFeesQueryVariables>(ChannelFeesDocument, baseOptions);
        }
export type ChannelFeesQueryHookResult = ReturnType<typeof useChannelFeesQuery>;
export type ChannelFeesLazyQueryHookResult = ReturnType<typeof useChannelFeesLazyQuery>;
export type ChannelFeesQueryResult = Apollo.QueryResult<ChannelFeesQuery, ChannelFeesQueryVariables>;