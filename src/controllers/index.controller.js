import { pool } from "../db.js";

export const getPosts = async (req, res) => {
  const response = await pool.query("SELECT * FROM posts ORDER BY id ASC");
  res.status(200).json(response.rows);
};

export const getPostById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  res.json(response.rows);
};

export const createPost = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO posts (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  const { rows } = await pool.query(
    "UPDATE posts SET name = $1, description = $2 WHERE id = $3 RETURNING *",
    [name, description, id]
  );

  return res.json(rows[0]);
};

export const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { rowCount } = await pool.query("DELETE FROM posts where id = $1", [
    id,
  ]);

  if (rowCount === 0) {
    return res.status(404).json({ message: "post not found" });
  }

  return res.sendStatus(204);
};
