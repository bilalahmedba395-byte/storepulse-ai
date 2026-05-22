import { orders } from "@/data/orders";
import { Order } from "@/types/order";

export async function getOrders(): Promise<Order[]> {

  // Simulate API delay
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return orders;
}