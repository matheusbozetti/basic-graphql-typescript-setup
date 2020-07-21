import { GraphQLResolveInfo } from 'graphql'
import { fieldsList } from 'graphql-fields-list'
import { GetFieldsOptions } from '../@types/utilsTypes'

const getGraphQLFields = (
  info: GraphQLResolveInfo,
  options?: GetFieldsOptions,
): string[] => {
  let fields = fieldsList(info) //['id', 'price']

  if (options) {
    const { include = [], skip = [] } = options
    fields = fields.concat(include) //[('id', 'price', 'name')]
    fields = fields.filter(f => !skip.includes(f)) // ['id']
  }

  // return fields.join(' ')
  return fields
}

export = {
  getGraphQLFields,
}
