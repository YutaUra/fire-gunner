---
to: "packages/cms-content-<%= name %>-field/src/component.tsx"
unless_exists: true
---
import { Box, Input } from '@chakra-ui/react'
import type {
  CmsContentFieldComponent,
  CmsContentStaticFieldComponent,
} from '@fire-gunner/cms-content-field'
import type { ChangeEventHandler } from 'react'
import { useCallback } from 'react'
import type { <%= h.changeCase.pascal(name) %>FieldValue } from './type'

export const <%= h.changeCase.pascal(name) %>Field: CmsContentFieldComponent<<%= h.changeCase.pascal(name) %>FieldValue> = ({
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

export const Static<%= h.changeCase.pascal(name) %>Field: CmsContentStaticFieldComponent<<%= h.changeCase.pascal(name) %>FieldValue> =
  ({ value }) => {
    return (
      <div className="cms-content-<%= name %>-field">
        <p>{value}</p>
      </div>
    )
  }
