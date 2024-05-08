import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users/Users'
import Categories from './collections/Categories'
import Stores from './collections/Store/Store'
import StoreProducts from './collections/StoreProducts/StoreProducts'
import MasterPromotions from './collections/MasterPromotion/MasterPromotion'
import StoreProductPromotions from './collections/StoreProductPromotion/StoreProductPromotion'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Categories, Stores, StoreProducts, MasterPromotions, StoreProductPromotions],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  express: {
    preMiddleware: [
      (req, res, next) => {
        // do something
        console.log('middleware')
        next()
      }
    ],
    // postMiddleware: [
    //   (req, res, next) => {
    //     // do something
    //     next()
    //   }
    // ]
  }
})
