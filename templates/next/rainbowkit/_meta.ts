import { compose } from '../../../src/hooks'
import {
  promptAndInjectProjectId,
  selectAndInjectProviders,
} from '../../../src/hooks/common'
import { createTemplate } from '../../../src/utils'

export default createTemplate({
  title: 'RainbowKit',
  description: 'Next.js wagmi project with RainbowKit included',
  hooks: compose([
    selectAndInjectProviders({
      envNamespace: 'process.env',
      envPrefix: 'NEXT_PUBLIC_',
    }),
    promptAndInjectProjectId({ required: true }),
  ]),
})
