CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    phone VARCHAR(15),
    address VARCHAR(200)
);

CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(100),
    location VARCHAR(100),
    opening_hours TIME,
    closing_hours TIME
);

CREATE TABLE delivery_partners (
    partner_id SERIAL PRIMARY KEY,
    partner_name VARCHAR(100),
    phone VARCHAR(15),
    vehicle VARCHAR(50)
);

CREATE TABLE menu (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    price DECIMAL(10,2),
    image_url TEXT,
    food_type VARCHAR(20),
    restaurant_id INT REFERENCES restaurants(restaurant_id)
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    restaurant_id INT REFERENCES restaurants(restaurant_id),
    partner_id INT REFERENCES delivery_partners(partner_id),
    total_price DECIMAL(10,2),
    status VARCHAR(30)
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    customer_id INT REFERENCES customers(customer_id),
    payment_mode VARCHAR(30),
    amount DECIMAL(10,2),
    payment_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(30)
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    item_id INT REFERENCES menu(item_id),
    quantity INT
);

-- CUSTOMERS

INSERT INTO customers
(customer_name, phone, address)
VALUES
('Arun Kumar','9876543210','Chennai'),
('Priya','9876543211','Coimbatore'),
('Vignesh','9876543212','Salem');

-- RESTAURANTS

INSERT INTO restaurants
(restaurant_name, location, opening_hours, closing_hours)
VALUES
('A2B','Chennai','08:00','22:00'),
('Saravana Bhavan','Coimbatore','07:00','23:00'),
('Sangeetha','Salem','09:00','21:00');

-- DELIVERY PARTNERS

INSERT INTO delivery_partners
(partner_name, phone, vehicle)
VALUES
('Ravi','9876543220','Bike'),
('Karthik','9876543221','Scooter'),
('Manoj','9876543222','Bike');

-- MENU

INSERT INTO menu
(item_name, price, image_url, food_type, restaurant_id)
VALUES
(
'Pizza',
250.00,
'https://images.unsplash.com/photo-1513104890138-7c749659a591',
'Veg',
1
),
(
'Burger',
120.00,
'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
'NonVeg',
2
),
(
'Biriyani',
180.00,
'https://images.unsplash.com/photo-1701579231340-2d08dbec2f16',
'NonVeg',
3
);

-- ORDERS

INSERT INTO orders
(customer_id, restaurant_id, partner_id, total_price, status)
VALUES
(1,1,1,250,'Delivered'),
(2,2,2,120,'Preparing'),
(3,3,3,180,'Out For Delivery');

-- PAYMENTS

INSERT INTO payments
(order_id, customer_id, payment_mode, amount, status)
VALUES
(1,1,'UPI',250,'Success'),
(2,2,'Card',120,'Success'),
(3,3,'Cash',180,'Pending');

-- ORDER ITEMS

INSERT INTO order_items
(order_id, item_id, quantity)
VALUES
(1,1,1),
(2,2,1),
(3,3,1);