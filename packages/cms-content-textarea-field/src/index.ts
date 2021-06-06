import type { CmsContentField } from '@fire-gunner/cms-content-field'
import { StaticTextareaField, TextareaField } from './component'
import type { TextareaFieldValue } from './type'

export const textareaField: CmsContentField<TextareaFieldValue> = {
  type: 'textarea',
  defaultTitle: '',
  defaultDescription: '',
  component: TextareaField,
  staticComponent: StaticTextareaField,
}
