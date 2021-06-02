import { Box, Input } from '@chakra-ui/react'
import type {
  CmsContentFieldComponent,
  CmsContentStaticFieldComponent,
} from '@fire-gunner/cms-content-field'
import type { ChangeEventHandler } from 'react'
import { useCallback } from 'react'
import type { TextFieldValue } from './type'

export const TextField: CmsContentFieldComponent<TextFieldValue> = ({
  value,
  onChange,
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChange(e.target.value)
    },
    [onChange],
  )
  return (
    <Box>
      <Input onChange={handleChange} value={value} />
    </Box>
  )
}

export const StaticTextField: CmsContentStaticFieldComponent<TextFieldValue> =
  ({ value }) => {
    return (
      <div className="cms-content-text-field">
        <p>{value}</p>
      </div>
    )
  }
