import type { CollectionConfig } from 'payload/types'

const MasterPromotions: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'title',
  // },
  admin: {
    useAsTitle: 'name',
  },
  slug: 'masterPromotions',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
  ],

}

export default MasterPromotions
