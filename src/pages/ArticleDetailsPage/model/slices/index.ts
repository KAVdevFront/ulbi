import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recomendations: articleDetailsPageRecommendationReducer,
});
