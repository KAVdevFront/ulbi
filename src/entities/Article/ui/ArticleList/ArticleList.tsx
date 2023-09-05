import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
    className?:string
    articles: Article[]
    isLoading?:boolean
    view?:ArticleView
    target?: HTMLAttributeAnchorTarget

}

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.SMALL, target,
}:ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article:Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />

    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>

        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && (
                <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    {new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((_, index) => (
                            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
                        ))}
                </div>
            )}
        </div>
    );
};
