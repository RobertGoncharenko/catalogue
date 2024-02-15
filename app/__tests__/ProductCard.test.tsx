import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import ProductCard from "../src/components/ProductCard";
import items from "../src/constants/items"
import { Product } from "../src/types";

const item = items[0];

describe("Renders product card properly", async () => {
    it("Should show product title", async () => {
        render(<ProductCard item={items[0]} />);
        const title = await screen.queryByText(item.title);
        expect(title).not.toBeNull();
    });

    it("Should show product price", async () => {
        render(<ProductCard item={items[0]} />);
        const price = await screen.queryByText(item.price + "$");
        expect(price).not.toBeNull();
    });

});
