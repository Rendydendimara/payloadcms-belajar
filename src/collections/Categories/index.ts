import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'title',
  // },
  auth: true,
  slug: 'categories',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'parentId',
      relationTo: 'stores',
      type: 'relationship',
    }
  ],
}

export default Categories
