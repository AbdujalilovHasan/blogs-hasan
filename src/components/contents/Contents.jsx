import { useState } from 'react';
import { Pagination } from 'antd';
import useFetchData from '../hooks/useData';
import ComponentItem from './ContentItem';
import { LIMIT } from '../../utils/constants';

const Contents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetchData('posts', {
    page: currentPage,
    limit: LIMIT,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const postsData = data?.data || [];
  const totalItems = data?.pagination?.total || 0;

  return (
    <div className="components-container max-w-5xl mx-auto px-4 py-6">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="component-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsData.map((post) => (
          <ComponentItem key={post.id} {...post} />
        ))}
      </div>

      <div className="pagination mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={LIMIT}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Contents;