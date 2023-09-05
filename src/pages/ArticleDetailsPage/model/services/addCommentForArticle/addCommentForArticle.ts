import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const userData = getUserAuthData(thunkApi.getState());

        const article = getArticleDetailsData(thunkApi.getState());
        if (!userData || !text || !article?.id) {
            return thunkApi.rejectWithValue('no data');
        }
        try {
            const response = await thunkApi.extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            thunkApi.dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
