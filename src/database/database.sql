CREATE DATABASE "Ambition"
    WITH 
    OWNER = alexis
    ENCODING = 'UTF8'
    LC_COLLATE = 'es_ES.UTF-8'
    LC_CTYPE = 'es_ES.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;




    CREATE TABLE public.users
(
    email text COLLATE pg_catalog."default" NOT NULL,
    id uuid NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    permissions boolean
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;




CREATE TABLE public.game
(
    team1 text COLLATE pg_catalog."default" NOT NULL,
    team2 text COLLATE pg_catalog."default" NOT NULL,
    result integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."betUser"
(
    "idUs" uuid NOT NULL,
    "idBet" uuid NOT NULL,
    "winerUs" bit(1),
    wallet text COLLATE pg_catalog."default" NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."betGame"
(
    "idBet" uuid NOT NULL,
    "idGame" uuid NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


CREATE TABLE public.bet
(
    porcent1 integer NOT NULL,
    porcent2 integer NOT NULL,
    idbet uuid NOT NULL,
    winnerbet integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

