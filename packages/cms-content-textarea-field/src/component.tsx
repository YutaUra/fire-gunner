import { Box, Textarea } from '@chakra-ui/react'
import type {
  CmsContentFieldComponent,
  CmsContentStaticFieldComponent,
} from '@fire-gunner/cms-content-field'
import type { ChangeEventHandler } from 'react'
import { useCallback, useMemo } from 'react'
import type { TextareaFieldValue } from './type'

export const TextareaField: CmsContentFieldComponent<TextareaFieldValue> = ({
  value,
  onChange,
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      onChange(e.target.value)
    },
    [onChange],
  )
  return (
    <Box>
      <Textarea onChange={handleChange} value={value} />
    </Box>
  )
}

export const StaticTextareaField: CmsContentStaticFieldComponent<TextareaFieldValue> =
  ({ value }) => {
    const textLines = useMemo(
      () => value.split('\n').map((text, i) => ({ text, i })),
      [value],
    )

    return (
      <div className="cms-content-textarea-field">
        {textLines.map(({ text, i }) => (
          <p key={`${i}-${text}`}>{text}</p>
        ))}
      </div>
    )
  }
