import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, appearanse, className, ...props }: ButtonProps ): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearanse == 'primary',
                [styles.ghost]: appearanse == 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    );
};