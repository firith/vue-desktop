import { defineStore } from 'pinia/dist/pinia.esm-browser'
import { useSettings } from '@/composables/useSettings'
import { apolloClient } from '@/apollo-client'
import gql from 'graphql-tag'
import { useStorage } from '@vueuse/core'

function createTree(projects) {
  let roots = projects.filter((each) => each.parent === null)

  roots = roots.map((each) => ({ ...each, client: each.name, children: [...getChildren(each, projects, each)] }))

  return roots
}

function getChildren(parent, projects, root) {
  const children = projects.filter((p) => p.parent && p.parent.id === parent.id)

  return children.map((each) => ({ ...each, client: root.name, children: getChildren(each, projects, root) }))
}

export const useProjects = defineStore('projects', {
  state: () => ({
    projects: useStorage('projects', []),
    tree: useStorage('projects_tree', []),
  }),

  actions: {
    async fetch() {
      const settingsStore = useSettings()

      const { data } = await apolloClient.query({
        query: gql`
          query projects($userId: Int!) {
            projects(status: ACTIVE, member: $userId, first: 5000) {
              data {
                id
                name
                parent {
                  id
                  name
                }
              }
              paginatorInfo {
                total
                count
              }
            }
          }
        `,
        variables: {
          userId: settingsStore.settings.user_id,
        },
      })

      this.projects = data.projects.data
      this.tree = createTree(this.projects)
    },
  },
})
