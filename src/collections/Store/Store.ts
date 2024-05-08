import type { CollectionConfig } from 'payload/types'

const Stores: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  admin: {
    useAsTitle: 'name',
  },
  slug: 'stores',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'owner',
      type: 'text',
      required: true
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true
    },
    {
      name: 'password',
      type: 'text',
      required: true
    },
    {
      name: 'address',
      type: 'text',
      required: true
    },
    {
      name: 'estimateDeliver',
      type: 'number',
      required: true
    },
  ],
}

export default Stores
