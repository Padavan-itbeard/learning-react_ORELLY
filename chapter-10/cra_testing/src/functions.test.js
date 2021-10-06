import { order, subtract, sum, timesTwo } from "./functions";

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});

test("Build an order object", () => {
    const menuItems = [
        {
            id: "1",
            name: "Tatted Up Turkey Burger",
            price: 19.5,
        },
        {
            id: "2",
            name: "Lobster Lollipops",
            price: 16.5,
        },
        {
            id: "3",
            name: "Motley Que Pulled Pork Sandwich",
            price: 21.5,
        },
        {
            id: "4",
            name: "Trash Can Nachos",
            price: 19.5,
        },
    ];

    const result = {
        orderItems: menuItems,
        total: 77,
    };
    expect(order(menuItems)).toEqual(result);
});

describe('Math function', () => {
    test('Multiplies by two', () => {
        expect(timesTwo(4)).toBe(8);
    });
    
    test('Adds two numbers', () => {
        expect(sum(4, 2)).toBe(6);
    });

    test('Subtract two numbers', () => {
        expect(subtract(4, 2)).toBe(2);
    });
});
