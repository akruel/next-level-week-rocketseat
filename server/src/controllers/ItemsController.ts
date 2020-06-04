import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    try {
      const items = await knex('items').select('*');
      const serializedItems = items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://localhost:3000/uploads/${item.image}`,
        };
      });

      return res.json(serializedItems);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ItemsController;
