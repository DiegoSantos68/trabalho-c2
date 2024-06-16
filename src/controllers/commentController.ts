import { Request, Response } from 'express';
import prisma from '../prisma/client';
import * as commentService from '../services/commentService';

export const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao buscar comentários', detalhes: error.message });
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await commentService.getCommentById(parseInt(id, 10));
    if (!comment) {
      res.status(404).json({ error: 'Comentário não encontrado' });
    } else {
      res.status(200).json(comment);
    }
  } catch (error) {
    res.status(400).json({ error: 'Falha ao buscar comentário', detalhes: error.message });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { content, authorId } = req.body;
  try {
    const comment = await commentService.createComment({
      content,
      authorId,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar comentário', detalhes: error.message });
  }
};

export const updateCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const comment = await commentService.updateCommentById(parseInt(id, 10), { content });
    if (!comment) {
      res.status(404).json({ error: 'Comentário não encontrado' });
    } else {
      res.status(200).json(comment);
    }
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar comentário', detalhes: error.message });
  }
};

export const deleteCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await commentService.deleteCommentById(parseInt(id, 10));
    if (!comment) {
      res.status(404).json({ error: 'Comentário não encontrado' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(400).json({ error: 'Falha ao deletar comentário', detalhes: error.message });
  }
};
