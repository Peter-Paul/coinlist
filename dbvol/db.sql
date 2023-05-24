CREATE TABLE public."votes" (
	"VoteID" varchar(225) NOT NULL,
	"Address" varchar(225) NOT NULL,
	"Coin" varchar(225) NULL,
	"Time" varchar(225) NOT NULL,
	CONSTRAINT "PK_votes" PRIMARY KEY ("VoteID")
);


CREATE TABLE public."coins" (
	"Address" varchar(225) NOT NULL,
	"CoinData" text NOT NULL,
	CONSTRAINT "PK_coins" PRIMARY KEY ("Address")
);

CREATE TABLE public."banners" (
	"Name" varchar(225) NOT NULL,
	"Url" text NOT NULL,
	CONSTRAINT "PK_banners" PRIMARY KEY ("Name")
);


INSERT INTO public."votes" ("VoteID","Address","Coin","Time") VALUES
    ('03b1fc1f-4a76-4910-b6e3-2c613666956b','0xc58F0E2007B4c52597042cB212a3683AF2ABDA06','0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB', '1684245576');

INSERT INTO public."banners" ("Name","Url") VALUES
	('banner1','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684819281/banner_c17fxw.png'),
	('banner2','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684819361/banner_aideuf.png'),
    ('banner3','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684819403/banner_muaak9.png');

