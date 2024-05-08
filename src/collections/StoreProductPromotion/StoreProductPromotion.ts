import { CollectionConfig } from 'payload/types'

const StoreProductPromotions: CollectionConfig = {
  slug: 'storeProductPromotions',
  fields: [
    {
      name: 'masterPromotionId',
      required: true,
      relationTo: 'masterPromotions',
      type: 'relationship',
    },
    {
      name: 'x',
      type: 'text',
      required: true
    },
    {
      name: 'y',
      type: 'text',
      required: true
    },
    {
      name: 'discount',
      type: 'text',
      required: true
    },
  ],
}

export default StoreProductPromotions
