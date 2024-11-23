import { useState } from 'react';
import { Pagination } from 'antd';
import useData from '../../hooks/useData';
import ComponentItem from './ContentItem';
import { LIMIT } from '../../utils/constants';

const Contents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useData('post', {
    page: currentPage,
    limit: LIMIT,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const postsData = data?.data || [];
  const totalItems = data?.pagination?.total || 0;

  return (
    <div className="max-w-5xl">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="component-list md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsData.map((content) => (
          <ComponentItem key={content.id} {...content} />
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