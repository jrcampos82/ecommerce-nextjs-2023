import React from 'react';
import { Form, Modal, message } from 'antd';
import { getAntdFieldsRequireRule } from '@/helpers/validations';
import axios from 'axios';

type CategoryFormValues = {
  id: string;
  name: string;
  description: string;
};

function CategoryForm({
  showCategoryForm,
  setShowCategoryForm,
  reloadData,
  category,
  setSelectedCategory,
}: CategoryFormProps) {
  const [form] = Form.useForm();

  const onFinish = async (values: CategoryFormValues) => {
    try {
      if (category) {
        await axios.patch(
          `http://localhost:3000/category/${category.id}`,
          values
        );
        message.success('Category updated successfully');
      } else {
        const res = await axios.post('http://localhost:3000/category', values);
        console.log(res);
        message.success('Category added successfully');
      }
      reloadData();
      setShowCategoryForm(false);
      setSelectedCategory(null);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <Modal
      title={
        <h1 className="text-2xl font-bold text-gray-800">
          {category ? 'Edit Category' : 'Add Category'}
        </h1>
      }
      open={showCategoryForm}
      onCancel={() => {
        setShowCategoryForm(false);
        setSelectedCategory(null);
      }}
      centered
      closable={false}
      okText="Save"
      onOk={() => {
        form.submit();
      }}
    >
      <Form
        layout="vertical"
        className="flex flex-col gap5"
        form={form}
        onFinish={onFinish}
        initialValues={category}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={getAntdFieldsRequireRule('Category Name is required')}
        >
          <input type="text" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={getAntdFieldsRequireRule('Description is required')}
        >
          <textarea />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CategoryForm;

interface CategoryFormProps {
  showCategoryForm: boolean;
  setShowCategoryForm: (show: boolean) => void;
  reloadData: () => void;
  category: any;
  setSelectedCategory: (category: any) => void;
}
