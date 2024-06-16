import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar usuário' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao buscar usuários' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao buscar usuário' });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar usuário' });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: 'Falha ao deletar usuário' });
  }
};
