import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';

import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ArticleBlock } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

interface ArticleDetailsProps {
    className?:string
    id:string
}

const reducers : ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }:ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    let content;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <VStack max gap="4">
                <HStack justify="center" max className={cls.avatarWrapper}>

                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                </HStack>
                <VStack max gap="4">
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.skeleton} width={600} height={24} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                </VStack>

            </VStack>
        );
    } else if (error) {
        content = (

            <Text
                title="Произошла ошибка при загрузке статьи."
                align={TextAlign.CENTER}
            />

        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />

                </HStack>
                <VStack max gap="4">
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        align={TextAlign.LEFT}
                        size={TextSize.L}
                    />
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});
