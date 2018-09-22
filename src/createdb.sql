-- Drop table

-- DROP TABLE public."data"

CREATE TABLE "data" (
	id serial NOT NULL,
	request json NOT NULL,
	"result" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	date_created timestamp NULL DEFAULT now(),
	CONSTRAINT data_pkey PRIMARY KEY (id)
)
WITH (
	OIDS=FALSE
) ;
