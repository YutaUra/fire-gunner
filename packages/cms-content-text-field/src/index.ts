import type { CmsContentField } from '@fire-gunner/cms-content-field'
import { StaticTextField, TextField } from './component'
import type { TextFieldValue } from './type'

export const textField: CmsContentField<TextFieldValue> = {
  type: 'text',
  defaultTitle: '',
  defaultDescription: '',
  component: TextField,
  staticComponent: StaticTextField,
}
