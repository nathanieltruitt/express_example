import { Request, Response } from "express";
import { products } from "../data";
import { IProduct } from "../models/product.model";
import { ResponseData } from "../models/response-data.model";

// get products from products array and send
export function getProduct(req: Request, res: Response) {
  const { name } = req.query;

  let product = products.filter((product) => product.name === name)[0];
  if (product) {
    return res.status(200).json(new ResponseData(true, 200, product));
  }

  // otherwise return products
  return res.status(200).json(new ResponseData(true, 200, products));
}

export function addProduct(req: Request, res: Response) {
  const { name, price, queryProducts } = req.body;
  console.log(req.body);
  if (name && price) {
    const singleProduct = {
      id: products.length + 1,
      name: name,
      price: Number(price),
    };
    products.push(singleProduct);

    return res.status(201).json(new ResponseData(true, 201, singleProduct));
  }

  if (queryProducts) {
    let nextIndex = products.length + 1;
    const newProducts = [
      ...products,
      ...queryProducts.map((product: Partial<IProduct>) => {
        const newProduct = {
          id: nextIndex,
          name: product.name,
          price: product.price,
        };
        nextIndex += 1;
        return newProduct;
      }),
    ];
    return res.status(201).json(new ResponseData(true, 201, newProducts));
  }
  return res
    .status(400)
    .json(new ResponseData(false, 400, { message: "malformed query!" }));
}

export function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const { name, price } = req.body;

  // check if id exists and is found in products
  if (
    id &&
    products.filter((product) => product.id === Number(id)).length === 0
  ) {
    return res.status(404).json(
      new ResponseData(false, 404, {
        message: "No product with a matching id was found!",
      })
    );
  }

  // check if name & price props exist and then commit the data
  if (name && price) {
    products[Number(id) - 1] = {
      id: Number(id),
      name: name,
      price: Number(price),
    };
    return res
      .status(204)
      .json(new ResponseData(true, 204, products[Number(id)]));
  }

  // assume the query is malformed if the last if statement is not true
  return res
    .status(400)
    .json(
      new ResponseData(false, 400, { message: "The query was malformed!" })
    );
}

export function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;

  // locate the product to be deleted.
  if (products.filter((product) => product.id === Number(id)).length === 1) {
    const returnedProduct = products.splice(Number(id) - 1, 1);
    return res.status(200).json(new ResponseData(true, 200, returnedProduct));
  } else {
    return res.status(404).json(
      new ResponseData(false, 404, {
        message: "The specified id was not found!",
      })
    );
  }
}
