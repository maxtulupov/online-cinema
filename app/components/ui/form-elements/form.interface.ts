import { EditorProps } from 'draft-js';
import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
} from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string;
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}

type TypeTextAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps;

export interface ITextAreaField extends TypeTextAreaPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps;

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void;
	value: string;
}

export interface IUploadField {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
}
