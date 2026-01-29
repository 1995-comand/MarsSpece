import { useState } from "react";

function Blog() {
  const [open, setOpen] = useState(false); 
  const [text, setText] = useState(""); 
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]); 

  const cardData = {
    title: "Marsgram",
  };


  const openModal = () => {
    setOpen(true);
  };


  const submitPost = () => {
    if (!text && !file) return;

    const newPost = {
      id: Date.now(),
      text,
      image: file ? URL.createObjectURL(file) : null,
    };

    setPosts([newPost, ...posts]);


    setOpen(false);
    setText("");
    setFile(null);
  };

  return (
    <div className="p-6 space-y-8 ml-100">
   
      <div className="card w-full max-w-sm bg-warning text-warning-content">
        <div className="card-body">
          <h2 className="card-title">{cardData.title}</h2>
          <div className="card-actions">
            <button onClick={openModal} className="btn btn-neutral w-full">
              Post qo'yish
            </button>
          </div>
        </div>
      </div>

  
      {open && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">Post qo'shish</h3>

            <textarea
              className="textarea textarea-bordered w-full h-28"
              placeholder="O‘z fikringizni qoldiring"
              maxLength={256}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

       
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="mt-3 rounded-lg"
              />
            )}

        
            <label className="mt-3 flex items-center justify-center border-2 border-dashed rounded-lg p-4 cursor-pointer text-sm opacity-70">
              Faylni yuklash uchun shu yerni bosing
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="modal-action">
              <button className="btn" onClick={() => setOpen(false)}>
                Bekor
              </button>
              <button className="btn btn-primary" onClick={submitPost}>
                Yuborish
              </button>
            </div>
          </div>
        </dialog>
      )}

      
      <div className="space-y-4 max-w-md ">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-200">
            <div className="card-body">
              <pre className="whitespace-pre-wrap text-sm">{post.text}</pre>
              {post.image && (
                <img src={post.image} alt="post" className="rounded-lg mt-2" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
