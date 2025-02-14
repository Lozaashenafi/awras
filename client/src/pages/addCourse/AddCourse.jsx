import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddCourse() {
  const [tags, setTags] = useState(["TagBadge", "TagBadge", "TagBadge"]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && tags.length < 5) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="flex-1 pl-5 ">
        <h1 className="text-2xl font-bold">COURSE LANDING</h1>
        <p className="text-gray-600 mt-2 mb-6">
          Your course landing page plays a key role in your success on Awras...
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Course name</label>
            <input
              type="text"
              placeholder="add course title (e.g. flutter for beginners)"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Image upload</label>
            <div className="flex gap-2">
              <input type="file" className="border p-2 w-full rounded" />
              <button className="bg-primaryBlue text-white px-4 py-2 rounded">
                Upload
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold">Category</label>
            <select className="w-full p-2 border rounded">
              <option>Select your category</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Tag</label>
            <div className="flex flex-wrap gap-2 border p-2 rounded">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 px-2 py-1 rounded flex items-center gap-1"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(index)}
                    className="text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
              {tags.length < 5 && (
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTag()}
                  placeholder="add a tag"
                  className="p-1 border rounded"
                />
              )}
            </div>
          </div>
        </div>
        <Link to="/course/info">
          <button className="mt-6 bg-primaryBlue text-white px-6 py-2 rounded flex items-center gap-2">
            NEXT &gt;
          </button>
        </Link>
      </div>
    </>
  );
}

export default AddCourse;
