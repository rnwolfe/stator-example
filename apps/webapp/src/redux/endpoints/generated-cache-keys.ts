/**
 * This file was automatically generated by tools/generators/generate-cache-file.js file
 */

import { todosApi } from "./todos-endpoints"

export const addTodosCacheKeys = () =>
  todosApi.enhanceEndpoints({
    endpoints: {
      getManyTodos: { providesTags: ["todos"] },
      createOneTodo: { invalidatesTags: ["todos"] },
      updateOneTodo: { invalidatesTags: ["todos"] },
      deleteOneTodo: { invalidatesTags: ["todos"] },
    },
  })
export const addGeneratedCacheKeys = () => {
  addTodosCacheKeys()
}