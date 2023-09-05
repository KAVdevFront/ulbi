import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?:string
    comments?:Comment[]
    isLoading?:boolean
}

export const CommentList = memo(({ className, comments, isLoading }:CommentListProps) => {
    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
                ))
                : <Text text="Комментарии отсутствуют" />}
        </VStack>
    );
});
