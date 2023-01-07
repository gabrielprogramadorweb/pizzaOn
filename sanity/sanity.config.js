import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import pizza from './schemas/pizza'

export default defineConfig({
  name: 'default',
  title: 'DignoDev',

  projectId: 'gk8vm7ky',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
