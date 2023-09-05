import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?:string
    src?:string
    size?:number
    alt?: string
}

export const Avatar = memo(({
    className, src, size, alt,
}:AvatarProps) => {
    const mods: Mods = {

    };

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});
