import type { CollectionConfig } from 'payload/types'

const StoreProducts: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'title',
  // },
  slug: 'storeProducts',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'price',
      type: 'number',
      required: true
    },
    {
      name: 'satuan',
      type: 'text',
      required: true
    },
    {
      name: 'caption',
      type: 'text',
      required: true
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true
    },
    {
      name: 'longDescription',
      type: 'richText',
      required: true
    },
    {
      name: 'availabilityStatus',
      type: 'checkbox',
      required: true
    },
    {
      name: 'categoryId',
      relationTo: 'categories',
      type: 'relationship',
    },
    {
      name: 'readyToBuy',
      type: 'checkbox',
      required: true
    },
  ],
}

export default StoreProducts
