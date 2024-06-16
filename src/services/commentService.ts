import prisma from '../prisma/client';
import { Comment } from '@prisma/client';

export const getAllComments = async (): Promise<Comment[]> => {
  return prisma.comment.findMany();
};

export const getCommentById = async (id: number): Promise<Comment | null> => {
  return prisma.comment.findUnique({
    where: { id },
  });
};

export const createComment = async (data: Comment): Promise<Comment> => {
  return prisma.comment.create({
    data,
  });
};

export const updateCommentById = async (id: number, data: Comment): Promise<Comment | null> => {
  return prisma.comment.update({
    where: { id },
    data,
  });
};

export const deleteCommentById = async (id: number): Promise<Comment | null> => {
  return prisma.comment.delete({
    where: { id },
  });
};
