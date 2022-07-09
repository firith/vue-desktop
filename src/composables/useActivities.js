import { defineStore } from 'pinia'
import { apolloClient } from '@/apollo-client'
import gql from 'graphql-tag'

export const useActivities = defineStore('activities', {
  state: () => ({
    activities: [],
  }),

  actions: {
    async load() {
      const { data } = await apolloClient.query({
        query: gql`
          query activities {
            activities {
              id
              name
            }
          }
        `,
        fetchPolicy: 'cache-first',
      })

      this.activities = data.activities
    },
  },
})
