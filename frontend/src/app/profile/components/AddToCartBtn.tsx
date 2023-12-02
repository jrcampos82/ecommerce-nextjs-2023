'use client';
import { ProductInterface } from '@/interfaces';
import { AddProductToCart } from '@/redux/cartSlice';
import { Button, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

function AddToCartBtn({ product }: { product: ProductInterface }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        type="primary"
        onClick={(e) => {
          dispatch(
            AddProductToCart({
              ...product,
              quantity: 1,
            })
          );
          message.success('Added to cart');
        }}
      >
        Add Cart
      </Button>
    </div>
  );
}

export default AddToCartBtn;
