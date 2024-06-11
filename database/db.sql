-- CREATE DATABASE firstapi;

-- \l

-- \c firstapi;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO posts (name, description)
VALUES
    ('Primer Post', 'Esta es la descripción del primer post.'),
    ('Segundo Post', 'Este es el contenido del segundo post. Puede ser más largo y detallado.'),
    ('Tercer Post', 'Aquí va la descripción del tercer post. Puede contener varias oraciones y párrafos.'),
    ('Cuarto Post', 'Este es el cuarto post. La descripción puede ser breve o extensa, según sea necesario.');

select * from posts;
