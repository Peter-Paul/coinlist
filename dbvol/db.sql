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

CREATE TABLE public."games" (
	"Address" varchar(225) NOT NULL,
	"GameData" text NOT NULL,
	CONSTRAINT "PK_games" PRIMARY KEY ("Address")
);

CREATE TABLE public."banners" (
	"Name" varchar(225) NOT NULL,
	"Url" text NOT NULL,
	"Link" text NOT NULL,
	CONSTRAINT "PK_banners" PRIMARY KEY ("Name")
);

CREATE TABLE public."subscribers" (
	"Id" varchar(225) NOT NULL,
	"Email" varchar(225) NOT NULL,
	CONSTRAINT "PK_subscribers" PRIMARY KEY ("Id")
);


-- INSERT INTO public."votes" ("VoteID","Address","Coin","Time") VALUES
--     ('03b1fc1f-4a76-4910-b6e3-2c613666956b','0xc58F0E2007B4c52597042cB212a3683AF2ABDA06','0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB', '1684245576');

INSERT INTO public."banners" ("Name","Url","Link") VALUES
	('banner1','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684921197/banner1_m5me1i.png','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
	('banner2','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684923456/banner1_ybu95g.png','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
	('banner3','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684860902/banner1_nw8ltb.gif','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
	('banner4','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685380240/trade_s36d1o.gif','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
	('banner5','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685379668/250x250_k4rysx.gif','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
	('banner6','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686144626/250x250_tiv0ll.png','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1'),
    ('banner7','https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685381621/download_t0nblf.png','https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1');

