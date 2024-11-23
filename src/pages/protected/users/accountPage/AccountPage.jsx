import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";

function AccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Yuklangan rasmni URL formatiga o'tkazish
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        setFormData({ ...formData, image: info.file.originFileObj });
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-9 mt-10">Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              placeholder="Your surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Confirm password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Upload Image</label>
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={beforeUpload}
              onChange={handleImageChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-300 py-2 rounded-lg font-semibold hover:bg-amber-200 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountPage;