'use client';

import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';

function AddProduct() {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold text-gray-800">Add Product</h1>
      <hr />

      <ProductForm />
    </div>
  );
}

export default AddProduct;
