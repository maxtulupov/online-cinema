import cn from 'classnames';
import { forwardRef } from 'react';

import { ITextAreaField } from './form.interface';
import styles from './form.module.scss';

const TextAreaField = forwardRef<HTMLTextAreaElement, ITextAreaField>(
	({ placeholder, error, style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<textarea ref={ref} {...rest}></textarea>
				</label>
				{error && <div className={styles.error}>{String(error.message)}</div>}
			</div>
		);
	}
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
