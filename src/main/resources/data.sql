INSERT INTO location (latitude, longitude, city, country, add_line_1, add_line_2, add_line_3, zip)
VALUES
    (47.529812, 21.622039, 'Debrecen', 'HUNGARY', 'Piac utca 23.', NULL, NULL, 4025), -- Ikon Restaurant
    (47.531025, 21.623684, 'Debrecen', 'HUNGARY', 'Piac utca 29.', NULL, NULL, 4025), -- Belga Étterem és Söröző
    (47.531846, 21.625398, 'Debrecen', 'HUNGARY', 'Piac utca 21.', NULL, NULL, 4025), -- Bonita Bistro
    (47.529932, 21.625501, 'Debrecen', 'HUNGARY', 'Kossuth tér 3.', NULL, NULL, 4026), -- Vintage World Cafe & Shop
    (47.532486, 21.624727, 'Debrecen', 'HUNGARY', 'Csapó utca 6.', NULL, NULL, 4024), -- Kashmir
    (47.532102, 21.626778, 'Debrecen', 'HUNGARY', 'Hal köz 3.', NULL, NULL, 4024), -- Volt Egyszer
    (47.531028, 21.623469, 'Debrecen', 'HUNGARY', 'Piac utca 11.', NULL, NULL, 4025), -- Szomszéd Bisztró
    (47.530045, 21.628704, 'Debrecen', 'HUNGARY', 'Bajcsy-Zsilinszky utca 2.', NULL, NULL, 4024), -- Pálma Pub
    (47.530678, 21.626057, 'Debrecen', 'HUNGARY', 'Csapó utca 5.', NULL, NULL, 4024), -- Vintage Garden
    (47.530991, 21.629099, 'Debrecen', 'HUNGARY', 'Kossuth utca 12.', NULL, NULL, 4025), -- Reskontó
    (47.531476, 21.623814, 'Debrecen', 'HUNGARY', 'Piac utca 26.', NULL, NULL, 4025), -- Pepe Panini Cafe
    (47.530122, 21.628221, 'Debrecen', 'HUNGARY', 'Hatvan utca 1.', NULL, NULL, 4024), -- Csakhal Bisztró Belváros
    (47.529852, 21.629101, 'Debrecen', 'HUNGARY', 'Szent Anna utca 25.', NULL, NULL, 4024), -- Melange Étterem
    (47.530987, 21.623493, 'Debrecen', 'HUNGARY', 'Déri tér 1.', NULL, NULL, 4026), -- Matyas Pince
    (47.532345, 21.623891, 'Debrecen', 'HUNGARY', 'Kossuth tér 4.', NULL, NULL, 4026), -- Maszek - az utcabár
    (47.531402, 21.622889, 'Debrecen', 'HUNGARY', 'Arany János utca 2.', NULL, NULL, 4026), -- Pepito Pizza Bar
    (47.532555, 21.625400, 'Debrecen', 'HUNGARY', 'Széchenyi utca 15.', NULL, NULL, 4025), -- Bors Gastro Bar
    (47.530976, 21.625935, 'Debrecen', 'HUNGARY', 'Hal köz 2.', NULL, NULL, 4024), -- Csokonai Étterem
    (47.531823, 21.627114, 'Debrecen', 'HUNGARY', 'Kossuth Lajos utca 7.', NULL, NULL, 4024), -- Pizza Via
    (47.531311, 21.623812, 'Debrecen', 'HUNGARY', 'Piac utca 10.', NULL, NULL, 4025); -- Nonna Rosa


INSERT INTO restaurant (name, location_id, restaurant_type, description)
VALUES
    ('Ikon Restaurant', 1, 'FINE_DINING', 'Exquisite fine dining experience with locally sourced ingredients.'),
    ('Belga Étterem és Söröző', 2, 'AMERICAN', 'Casual American-style bistro with a wide range of beers on tap.'),
    ('Bonita Bistro', 3, 'JAPANESE', 'Modern Japanese fusion cuisine in a cozy setting.'),
    ('Vintage World Cafe & Shop', 4, 'CAFE', 'Charming café with vintage decor and specialty coffees.'),
    ('Kashmir', 5, 'FAST_FOOD', 'Authentic Indian fast food with a variety of flavorful dishes.'),
    ('Volt Egyszer', 6, 'HEALTHY', 'Healthy eatery offering fresh and nutritious meals.'),
    ('Szomszéd Bisztró', 7, 'HEALTHY', 'Trendy bistro focused on health-conscious dishes.'),
    ('Pálma Pub', 8, 'FAST_FOOD', 'Lively pub known for its fast food and great atmosphere.'),
    ('Vintage Garden', 9, 'CAFE', 'Elegant café with a garden ambiance and delicious desserts.'),
    ('Reskontó', 10, 'CHINESE', 'Authentic Chinese restaurant with a focus on traditional flavors.'),
    ('Pepe Panini Cafe', 11, 'CAFE', 'Relaxed café with freshly made paninis and aromatic coffee.'),
    ('Csakhal Bisztró Belváros', 12, 'JAPANESE', 'Japanese bistro offering fresh sushi and unique dishes.'),
    ('Melange Étterem', 13, 'AMERICAN', 'Modern American cuisine with a twist, served in style.'),
    ('Matyas Pince', 14, 'FINE_DINING', 'Historical fine dining restaurant with a regal atmosphere.'),
    ('Maszek', 15, 'DESSERT', 'Cozy dessert spot with handcrafted sweets and cakes.'),
    ('Pepito Pizza Bar', 16, 'AMERICAN', 'Casual pizza bar with a variety of delicious toppings.'),
    ('Bors Gastro Bar', 17, 'FINE_DINING', 'Contemporary fine dining with an innovative menu.'),
    ('Csokonai Étterem', 18, 'FINE_DINING', 'Elegant fine dining experience in a classical setting.'),
    ('Pizza Via', 19, 'AMERICAN', 'Popular pizzeria with authentic wood-fired pizzas.'),
    ('Nonna Rosa', 20, 'HEALTHY', 'Family-friendly healthy restaurant with Italian-inspired dishes.');




INSERT INTO account (username, password, role)
VALUES
    ('Csabi', '$2a$12$WgRTV8OPzpZ4k1/8c8/Gau7pxs.aRWezWk8hjWzQBz.l325s1OONy', 'ADMIN'),
    ('Anonymous', '$2a$12$Wij3whsi3dO/F1p4j2N0/On6IZPOM8QOIPfOVun45/2JZZthKGqly', 'GUEST'),
    ('Miki', '$2a$12$1Bul0pBfYB6i4IIB7qzCYeDkS3RN9X3at5BXJsZYXtjcdFeux8JuG', 'USER'),
    ('Bence', '$2a$12$u2WkZbpREp75E/qF./4RFeelICFkKI9qvf7hfETHhgh3v66qdcOWO', 'USER');
