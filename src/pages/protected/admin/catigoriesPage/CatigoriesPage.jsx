import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Input, Pagination, message } from 'antd';
import { getCategory } from '../../../../redux/actions/catigoryActions';
import apiClient from '../../../../services/request';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category = [], totalCount = 0, loading } = useSelector(
    (state) => state.category
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(getCategory(page, pageSize, ''));
  }, [dispatch, page, pageSize]);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      message.error('Category name cannot be empty');
      return;
    }
    try {
      await apiClient.post('/category', { name: newCategory });
      setIsModalVisible(false);
      setNewCategory('');
      dispatch(getCategory(page, pageSize, ''));
      message.success('Category added successfully!');
    } catch (error) {
      message.error('Failed to add category. Please try again.');
      console.error('Error adding category:', error);
    }
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this category?',
      onOk: async () => {
        try {
          await apiClient.delete(`/category/${id}`);
          dispatch(getCategory(page, pageSize, ''));
          message.success('Category deleted successfully!');
        } catch (error) {
          message.error('Failed to delete category. Please try again.');
          console.error('Error deleting category:', error);
        }
      },
    });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add Category
      </Button>
      <Table
        dataSource={category.map((cat) => ({ ...cat, key: cat.id }))}
        columns={columns}
        loading={loading}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        current={page}
        pageSize={pageSize}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        total={totalCount}
        style={{ marginTop: 16 }}
      />
      <Modal
        title="Add New Category"
        open={isModalVisible}
        onOk={handleAddCategory}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default CategoryPage;