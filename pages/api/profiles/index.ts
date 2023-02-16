import type { NextApiRequest, NextApiResponse } from "next";
const models = require("../../../server/sequelize/models/index");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const profiles = await models.profiles.findAll();
      res.json({ success: true, profiles });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
