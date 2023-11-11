import { Button } from 'antd';
import { useState } from 'react';
import CategoryForm from './CategoryForm';

function CategoriesList() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => {
            setShowCategoryForm(true);
          }}
        >
          Add Category
        </Button>

        {showCategoryForm && (
          <CategoryForm
            showCategoryForm={showCategoryForm}
            setShowCategoryForm={setShowCategoryForm}
            reloadData={() => {}}
          ></CategoryForm>
        )}
      </div>
    </div>
  );
}

export default CategoriesList;
