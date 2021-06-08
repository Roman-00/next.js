import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, arrow = 'none', appearanse, className, ...props }: ButtonProps ): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearanse == 'primary',
                [styles.ghost]: appearanse == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}><ArrowIcon/></span>}
        </button>
    );
};