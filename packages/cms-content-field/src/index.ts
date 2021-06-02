import type { VFC } from 'react'

export interface CmsContentFieldComponentProps<T> {
  value: T
  onChange: (data: T) => void
}
export type CmsContentFieldComponent<T> = VFC<CmsContentFieldComponentProps<T>>

export interface CmsContentStaticFieldComponentProps<T> {
  value: T
}
export type CmsContentStaticFieldComponent<T> = VFC<
  CmsContentStaticFieldComponentProps<T>
>

export interface CmsContentField<T> {
  type: string
  defaultTitle?: string
  defaultDescription?: string
  component: CmsContentFieldComponent<T>
  staticComponent: CmsContentFieldComponent<T>
}
